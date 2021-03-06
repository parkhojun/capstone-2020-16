import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import querystring from 'querystring';
// import ApiFuncs2 from '@api/ApiFuncs2';
/* eslint-disable camelcase */

// const api = new ApiFuncs2();

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      err => {
        return new Promise((resolve, reject) => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            this.emit("onAutoLogout", "Invalid access_token");
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit("onNoAccessToken");

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit("onAutoLogin", true);
    } else {
      this.setSession(null);
      this.emit("onAutoLogout", "access_token expired");
    }
  };

  createUser = data => {
    return new Promise((resolve, reject) => {
      // axios.post('/api/auth/register', data).then(response => {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/rest-auth/registration/",
          querystring.stringify({
            username: data.username,
            email: data.email,
            password1: data.password1,
            password2: data.password2
          })
        )
        .then(response => {
          console.log(response)
          if (response.data.user) {
            // this.setSession(response.data.access_token);
            window.localStorage.setItem('pk', response.data.user.pk)
            window.localStorage.setItem('jwt_access_token', response.data.token)
            window.localStorage.setItem('username', response.data.user.username);
            window.localStorage.setItem('password', data.password1);
            this.setSession(response.data.token);
            resolve(response.data.user);
          } else {
            console.log('response')
            reject(response.data.error);
          }
        })
        .catch(error => {
          // console.log(error.response);
          if(error.response.data.email){
            alert(error.response.data.email)
          }
          if(error.response.data.password1){
            alert(error.response.data.password1)
          }
          if(error.response.data.username){
            alert(error.response.data.username)
          }
        });
    });
  };

  signInWithEmailAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
      // axios
      // 	.get('/api/auth', {
      // 		data: {
      // 			email,
      // 			password
      // 		}
      // 	})
      // 	.then(response => {
      // 		if (response.data.user) {
      // 			this.setSession(response.data.access_token);
      // 			resolve(response.data.user);
      // 		} else {
      // 			reject(response.data.error);
      // 		}
      // 	});
      axios
        .post("http://203.246.112.32:8000/api/v1/rest-auth/login/", {
          username: username,
          password: password
        })
        .then(response => {
          if (response.data.user) {
            // console.log(response);
			      this.setSession(response.data.token);
			      window.localStorage.setItem("username", username);
            window.localStorage.setItem("password", password);
            window.localStorage.setItem('pk', response.data.user.pk);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch(error => {
          // console.log(error.response.status);
          if (error.response.status === 400) {
            alert("ID나 Password를 확인하세요.");
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      // axios
      // 	.get('/api/auth/access-token', {
      // 		data: {
      // 			access_token: this.getAccessToken()
      // 		}
      // 	})
      // 	.then(response => {
      // 		if (response.data.user) {
      // 			this.setSession(response.data.access_token);
      // 			resolve(response.data.user);
      // 		} else {
      // 			this.logout();
      // 			Promise.reject(new Error('Failed to login with token.'));
      // 		}
      // 	})
      // 	.catch(error => {
      // 		this.logout();
      // 		Promise.reject(new Error('Failed to login with token.'));
      // 	});
      axios
        .post("http://203.246.112.32:8000/api/v1/rest-auth/login/", {
          username: window.localStorage.getItem('username'),
          password: window.localStorage.getItem('password')
        })
        .then(response => {
          if (response.data.user) {
            // console.log(response);
            this.setSession(response.data.token);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        });
      // resolve()
    });
  };

  updateUserData = user => {
    return axios.post("/api/auth/user/update", {
      user
    });
  };

  setSession = access_token => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    window.localStorage.clear();
  }; 

  isAuthTokenValid = access_token => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    // console.log(window.localStorage)
    return window.localStorage.getItem("jwt_access_token"); 
  };
}

const instance = new JwtService();

export default instance;
