(this.webpackJsonponepanman=this.webpackJsonponepanman||[]).push([[69],{1376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,c=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(c=window);var l=t.FrameContext=o.default.createContext({document:i,window:c}),s=l.Provider,u=l.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1377:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(20),r=n(144),o=n(1364),i=n(1368),c=n(1338),l=n(1370),s=n(1371),u=n(0),d=n.n(u),m=n(13),f=n(11),p=n(64),h=n(65),v=n(94),y=n(95),b=n(1295),g=n(672),E=n(1330),x=n(1365),w=n(10),j=n(450),O=n(451),_=n(1378),C=n.n(_),P=Object(b.a)({productionPrefix:"iframe-"}),D=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.a)(Object(f.a)({},Object(g.a)(),{plugins:[].concat(Object(m.a)(Object(g.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(C.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(E.b,{jss:this.state.jss,generateClassName:P,sheetsManager:this.state.sheetsManager},d.a.createElement(x.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),M=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(D);function N(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],p=e.component,h=e.raw,v=e.iframe,y=e.className;return d.a.createElement(i.a,{className:y},d.a.createElement(o.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},p&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),h&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center"},d.a.createElement("div",{className:0===m?"flex flex-1":"hidden"},p&&(v?d.a.createElement(M,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}N.defaultProps={currentTabIndex:0};var k=N},1378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1376);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1379),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=d(o),c=d(n(22)),l=d(n(2)),s=n(1376),u=d(n(1380));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=!this._setInitialContent,o=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));r&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0);var l=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,l)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);m.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(2)));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=s},3660:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(1319),i=n(227),c=Object(o.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}}));function l(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{elevation:0}),r.a.createElement(i.a,null),r.a.createElement(i.a,{elevation:3}))}},3661:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    '& > *': {\n      margin: theme.spacing(1),\n      width: theme.spacing(16),\n      height: theme.spacing(16),\n    },\n  },\n}));\n\nexport default function SimplePaper() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Paper elevation={0} />\n      <Paper />\n      <Paper elevation={3} />\n    </div>\n  );\n}\n"},3662:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(1319),i=n(227),c=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}}));function l(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"outlined"}),r.a.createElement(i.a,{variant:"outlined",square:!0}))}},3663:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n      width: theme.spacing(16),\n      height: theme.spacing(16),\n    },\n  },\n}));\n\nexport default function Variants() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Paper variant=\"outlined\" />\n      <Paper variant=\"outlined\" square />\n    </div>\n  );\n}\n"},4210:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1377),i=(n(144),n(191)),c=n(1344),l=n(1338),s=n(226),u=n(1319),d=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=d();return r.a.createElement(i.a,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(s.a,{variant:"h6"},"Paper")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/paper",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Paper"),r.a.createElement(s.a,{className:"description"},"In Material Design, the physical properties of paper are translated to the screen. "),r.a.createElement(s.a,{className:"mb-16",component:"div"},"The background of an application resembles the flat, opaque texture of a sheet of paper, and an application\u2019s behavior mimics paper\u2019s ability to be re-sized, shuffled, and bound together in multiple sheets."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3660).default,raw:n(3661)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Variants"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"If you need an outlined surface, use the ",r.a.createElement("code",null,"variant")," prop."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3662).default,raw:n(3663)})))})}}}]);