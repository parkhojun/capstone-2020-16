(this.webpackJsonponepanman=this.webpackJsonponepanman||[]).push([[122],{4163:function(e,a,t){"use strict";t.r(a);var n=t(144),c=t(191),l=t(1338),o=t(226),r=t(0),m=t.n(r),s=t(30);a.default=function(){return m.a.createElement(c.a,{header:m.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",{className:"flex items-center mb-16"},m.a.createElement(l.a,{className:"text-18",color:"action"},"home"),m.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),m.a.createElement(o.a,{color:"textSecondary"},"Documentation"),m.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),m.a.createElement(o.a,{color:"textSecondary"},"Authentication")),m.a.createElement(o.a,{variant:"h6"},"Auth0 Authentication"))),content:m.a.createElement("div",{className:"p-24 max-w-2xl"},m.a.createElement(o.a,{className:"mb-16",component:"p"},"With Auth0 Authentication in Fuse React."),m.a.createElement("ul",null,m.a.createElement("li",{className:"mb-12"},"You can ",m.a.createElement(s.a,{to:"/register"},"register"),"."),m.a.createElement("li",{className:"mb-12"},"You can ",m.a.createElement(s.a,{to:"/login"},"login"),"."),m.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) as user_metadata to Auth0 Database.")),m.a.createElement(o.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",m.a.createElement("code",null,"/src/auth0Service")),m.a.createElement(o.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in",m.a.createElement("code",null,"src/app/App.js"),"."),m.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),m.a.createElement(o.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Auth0 Project into",m.a.createElement("code",null,"src/app/services/auth0Service/auth0ServiceConfig.js")),m.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '))})}}}]);