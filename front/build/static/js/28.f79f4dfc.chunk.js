(this.webpackJsonponepanman=this.webpackJsonponepanman||[]).push([[28],{1310:function(e,t,n){"use strict";n.r(t);var a=n(452);n.d(t,"default",(function(){return a.a}))},1375:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default.memo(o.default.forwardRef((function(t,n){return o.default.createElement(i.default,(0,r.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var r=a(n(173)),o=a(n(0)),i=a(n(1310))},1376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,c=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(c=window);var l=t.FrameContext=o.default.createContext({document:i,window:c}),s=l.Provider,m=l.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=m},1377:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(20),r=n(144),o=n(1364),i=n(1368),c=n(1338),l=n(1370),s=n(1371),m=n(0),u=n.n(m),d=n(13),p=n(11),f=n(64),h=n(65),b=n(94),y=n(95),v=n(1295),k=n(672),g=n(1330),E=n(1365),C=n(10),x=n(450),L=n(451),N=n(1378),w=n.n(N),j=Object(v.a)({productionPrefix:"iframe-"}),O=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(x.a)(Object(p.a)({},Object(k.a)(),{plugins:[].concat(Object(d.a)(Object(k.a)().plugins),[Object(L.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return u.a.createElement(w.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(g.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},u.a.createElement(E.a,{theme:a},u.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(u.a.Component),M=Object(C.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(O);function B(e){var t=Object(m.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],p=n[1],f=e.component,h=e.raw,b=e.iframe,y=e.className;return u.a.createElement(i.a,{className:y},u.a.createElement(o.a,{position:"static",color:"default",elevation:0},u.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){p(t)}},f&&u.a.createElement(l.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"remove_red_eye")}),h&&u.a.createElement(l.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:0===d?"flex flex-1":"hidden"},f&&(b?u.a.createElement(M,null,u.a.createElement(f,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},u.a.createElement(f,null)))),u.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},h&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}B.defaultProps={currentTabIndex:0};var T=B},1378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1376);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1379),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=u(o),c=u(n(22)),l=u(n(2)),s=n(1376),m=u(n(1380));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=!this._setInitialContent,o=i.default.createElement(m.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));r&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0);var l=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,l)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);d.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(2)));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=s},1469:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},1850:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},2202:function(e,t,n){"use strict";var a=n(1),r=n(5),o=n(0),i=n.n(o),c=(n(2),n(3)),l=n(12),s=n(10),m=n(272),u=n(23),d=n(226),p=i.a.forwardRef((function(e,t){var n=e.classes,o=e.className,s=e.color,p=void 0===s?"primary":s,f=e.component,h=void 0===f?"a":f,b=e.onBlur,y=e.onFocus,v=e.TypographyClasses,k=e.underline,g=void 0===k?"hover":k,E=e.variant,C=void 0===E?"inherit":E,x=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),L=Object(m.a)(),N=L.isFocusVisible,w=L.onBlurVisible,j=L.ref,O=i.a.useState(!1),M=O[0],B=O[1],T=Object(u.a)(t,j);return i.a.createElement(d.a,Object(a.a)({className:Object(c.a)(n.root,n["underline".concat(Object(l.a)(g))],o,M&&n.focusVisible,{button:n.button}[h]),classes:v,color:p,component:h,onBlur:function(e){M&&(w(),B(!1)),b&&b(e)},onFocus:function(e){N(e)&&B(!0),y&&y(e)},ref:T,variant:C},x))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},2203:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=o},3388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),o=n(226),i=n(4146),c=n(2202);function l(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function s(){return r.a.createElement(i.a,{"aria-label":"breadcrumb"},r.a.createElement(c.a,{color:"inherit",href:"/",onClick:l},"Material-UI"),r.a.createElement(c.a,{color:"inherit",href:"/getting-started/installation/",onClick:l},"Core"),r.a.createElement(o.a,{color:"textPrimary"},"Breadcrumb"))}},3389:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Link from \'@material-ui/core/Link\';\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info(\'You clicked a breadcrumb.\');\n}\n\nexport default function SimpleBreadcrumbs() {\n  return (\n    <Breadcrumbs aria-label="breadcrumb">\n      <Link color="inherit" href="/" onClick={handleClick}>\n        Material-UI\n      </Link>\n      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n        Core\n      </Link>\n      <Typography color="textPrimary">Breadcrumb</Typography>\n    </Breadcrumbs>\n  );\n}\n'},3390:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(4146),i=n(2202);function c(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function l(){return r.a.createElement(o.a,{"aria-label":"breadcrumb"},r.a.createElement(i.a,{color:"inherit",href:"/",onClick:c},"Material-UI"),r.a.createElement(i.a,{color:"inherit",href:"/getting-started/installation/",onClick:c},"Core"),r.a.createElement(i.a,{color:"textPrimary",href:"/components/breadcrumbs/",onClick:c,"aria-current":"page"},"Breadcrumb"))}},3391:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Link from \'@material-ui/core/Link\';\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info(\'You clicked a breadcrumb.\');\n}\n\nexport default function ActiveLastBreadcrumb() {\n  return (\n    <Breadcrumbs aria-label="breadcrumb">\n      <Link color="inherit" href="/" onClick={handleClick}>\n        Material-UI\n      </Link>\n      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n        Core\n      </Link>\n      <Link\n        color="textPrimary"\n        href="/components/breadcrumbs/"\n        onClick={handleClick}\n        aria-current="page"\n      >\n        Breadcrumb\n      </Link>\n    </Breadcrumbs>\n  );\n}\n'},3392:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(0),r=n.n(a),o=n(1319),i=n(4146),c=n(226),l=n(2202),s=n(3393),m=n.n(s),u=Object(o.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function d(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function p(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{separator:"\u203a","aria-label":"breadcrumb"},r.a.createElement(l.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(l.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb")),r.a.createElement(i.a,{separator:"-","aria-label":"breadcrumb"},r.a.createElement(l.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(l.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb")),r.a.createElement(i.a,{separator:r.a.createElement(m.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(l.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(l.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb")))}},3393:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},3394:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Link from \'@material-ui/core/Link\';\nimport NavigateNextIcon from \'@material-ui/icons/NavigateNext\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    \'& > * + *\': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info(\'You clicked a breadcrumb.\');\n}\n\nexport default function CustomSeparator() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Breadcrumbs separator="\u203a" aria-label="breadcrumb">\n        <Link color="inherit" href="/" onClick={handleClick}>\n          Material-UI\n        </Link>\n        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n          Core\n        </Link>\n        <Typography color="textPrimary">Breadcrumb</Typography>\n      </Breadcrumbs>\n      <Breadcrumbs separator="-" aria-label="breadcrumb">\n        <Link color="inherit" href="/" onClick={handleClick}>\n          Material-UI\n        </Link>\n        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n          Core\n        </Link>\n        <Typography color="textPrimary">Breadcrumb</Typography>\n      </Breadcrumbs>\n      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">\n        <Link color="inherit" href="/" onClick={handleClick}>\n          Material-UI\n        </Link>\n        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n          Core\n        </Link>\n        <Typography color="textPrimary">Breadcrumb</Typography>\n      </Breadcrumbs>\n    </div>\n  );\n}\n'},3395:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(0),r=n.n(a),o=n(1319),i=n(226),c=n(4146),l=n(2202),s=n(2203),m=n.n(s),u=n(3396),d=n.n(u),p=n(3397),f=n.n(p),h=Object(o.a)((function(e){return{link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20}}}));function b(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function y(){var e=h();return r.a.createElement(c.a,{"aria-label":"breadcrumb"},r.a.createElement(l.a,{color:"inherit",href:"/",onClick:b,className:e.link},r.a.createElement(m.a,{className:e.icon}),"Material-UI"),r.a.createElement(l.a,{color:"inherit",href:"/getting-started/installation/",onClick:b,className:e.link},r.a.createElement(d.a,{className:e.icon}),"Core"),r.a.createElement(i.a,{color:"textPrimary",className:e.link},r.a.createElement(f.a,{className:e.icon}),"Breadcrumb"))}},3396:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"}),"Whatshot");t.default=o},3397:function(e,t,n){"use strict";var a=n(674);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(1375)).default)(r.default.createElement("path",{d:"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"Grain");t.default=o},3398:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Typography from '@material-ui/core/Typography';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport Link from '@material-ui/core/Link';\nimport HomeIcon from '@material-ui/icons/Home';\nimport WhatshotIcon from '@material-ui/icons/Whatshot';\nimport GrainIcon from '@material-ui/icons/Grain';\n\nconst useStyles = makeStyles(theme => ({\n  link: {\n    display: 'flex',\n  },\n  icon: {\n    marginRight: theme.spacing(0.5),\n    width: 20,\n    height: 20,\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info('You clicked a breadcrumb.');\n}\n\nexport default function IconBreadcrumbs() {\n  const classes = useStyles();\n\n  return (\n    <Breadcrumbs aria-label=\"breadcrumb\">\n      <Link color=\"inherit\" href=\"/\" onClick={handleClick} className={classes.link}>\n        <HomeIcon className={classes.icon} />\n        Material-UI\n      </Link>\n      <Link\n        color=\"inherit\"\n        href=\"/getting-started/installation/\"\n        onClick={handleClick}\n        className={classes.link}\n      >\n        <WhatshotIcon className={classes.icon} />\n        Core\n      </Link>\n      <Typography color=\"textPrimary\" className={classes.link}>\n        <GrainIcon className={classes.icon} />\n        Breadcrumb\n      </Typography>\n    </Breadcrumbs>\n  );\n}\n"},3399:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),o=n(4146),i=n(226),c=n(2202);function l(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function s(){return r.a.createElement(o.a,{maxItems:2,"aria-label":"breadcrumb"},r.a.createElement(c.a,{color:"inherit",href:"#",onClick:l},"Home"),r.a.createElement(c.a,{color:"inherit",href:"#",onClick:l},"Catalog"),r.a.createElement(c.a,{color:"inherit",href:"#",onClick:l},"Accessories"),r.a.createElement(c.a,{color:"inherit",href:"#",onClick:l},"New Collection"),r.a.createElement(i.a,{color:"textPrimary"},"Belts"))}},3400:function(e,t,n){"use strict";n.r(t),t.default='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from \'react\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Link from \'@material-ui/core/Link\';\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info(\'You clicked a breadcrumb.\');\n}\n\nexport default function CollapsedBreadcrumbs() {\n  return (\n    <Breadcrumbs maxItems={2} aria-label="breadcrumb">\n      <Link color="inherit" href="#" onClick={handleClick}>\n        Home\n      </Link>\n      <Link color="inherit" href="#" onClick={handleClick}>\n        Catalog\n      </Link>\n      <Link color="inherit" href="#" onClick={handleClick}>\n        Accessories\n      </Link>\n      <Link color="inherit" href="#" onClick={handleClick}>\n        New Collection\n      </Link>\n      <Typography color="textPrimary">Belts</Typography>\n    </Breadcrumbs>\n  );\n}\n'},3401:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(0),r=n.n(a),o=n(10),i=n(21),c=n(4146),l=n(1352),s=n(2203),m=n.n(s),u=n(1469),d=n.n(u),p=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.grey[100],height:e.spacing(3),color:e.palette.grey[800],fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.grey[300]},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(i.c)(e.palette.grey[300],.12)}}}}))(l.a);function f(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function h(){return r.a.createElement(c.a,{"aria-label":"breadcrumb"},r.a.createElement(p,{component:"a",href:"#",label:"Home",icon:r.a.createElement(m.a,{fontSize:"small"}),onClick:f}),r.a.createElement(p,{component:"a",href:"#",label:"Catalog",onClick:f}),r.a.createElement(p,{label:"Accessories",deleteIcon:r.a.createElement(d.a,null),onClick:f,onDelete:f}))}},3402:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { emphasize, withStyles } from '@material-ui/core/styles';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport Chip from '@material-ui/core/Chip';\nimport HomeIcon from '@material-ui/icons/Home';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst StyledBreadcrumb = withStyles(theme => ({\n  root: {\n    backgroundColor: theme.palette.grey[100],\n    height: theme.spacing(3),\n    color: theme.palette.grey[800],\n    fontWeight: theme.typography.fontWeightRegular,\n    '&:hover, &:focus': {\n      backgroundColor: theme.palette.grey[300],\n    },\n    '&:active': {\n      boxShadow: theme.shadows[1],\n      backgroundColor: emphasize(theme.palette.grey[300], 0.12),\n    },\n  },\n}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591\n\nfunction handleClick(event) {\n  event.preventDefault();\n  console.info('You clicked a breadcrumb.');\n}\n\nexport default function CustomizedBreadcrumbs() {\n  return (\n    <Breadcrumbs aria-label=\"breadcrumb\">\n      <StyledBreadcrumb\n        component=\"a\"\n        href=\"#\"\n        label=\"Home\"\n        icon={<HomeIcon fontSize=\"small\" />}\n        onClick={handleClick}\n      />\n      <StyledBreadcrumb component=\"a\" href=\"#\" label=\"Catalog\" onClick={handleClick} />\n      <StyledBreadcrumb\n        label=\"Accessories\"\n        deleteIcon={<ExpandMoreIcon />}\n        onClick={handleClick}\n        onDelete={handleClick}\n      />\n    </Breadcrumbs>\n  );\n}\n"},3403:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n(20),r=n(193),o=n(0),i=n.n(o),c=n(1319),l=n(1300),s=n(2202),m=n(1301),u=n(1347),d=n(1346),p=n(226),f=n(1850),h=n.n(f),b=n(1469),y=n.n(b),v=n(4146),k=n(92),g=n(30),E={"/inbox":"Inbox","/inbox/important":"Important","/trash":"Trash","/spam":"Spam","/drafts":"Drafts"};function C(e){var t=e.to,n=e.open,a=Object(r.a)(e,["to","open"]),o=E[t];return i.a.createElement("li",null,i.a.createElement(m.a,Object.assign({button:!0,component:g.a,to:t},a),i.a.createElement(d.a,{primary:o}),null!=n?n?i.a.createElement(h.a,null):i.a.createElement(y.a,null):null))}var x=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",width:360},lists:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(1)},nested:{paddingLeft:e.spacing(4)}}})),L=function(e){return i.a.createElement(s.a,Object.assign({},e,{component:g.a}))};function N(){var e=x(),t=i.a.useState(!0),n=Object(a.a)(t,2),r=n[0],o=n[1];return i.a.createElement(k.a,{initialEntries:["/inbox"],initialIndex:0},i.a.createElement("div",{className:e.root},i.a.createElement(k.c,null,(function(e){var t=e.location.pathname.split("/").filter((function(e){return e}));return i.a.createElement(v.a,{"aria-label":"breadcrumb"},i.a.createElement(L,{color:"inherit",to:"/"},"Home"),t.map((function(e,n){var a=n===t.length-1,r="/".concat(t.slice(0,n+1).join("/"));return a?i.a.createElement(p.a,{color:"textPrimary",key:r},E[r]):i.a.createElement(L,{color:"inherit",to:r,key:r},E[r])})))})),i.a.createElement("nav",{className:e.lists,"aria-label":"mailbox folders"},i.a.createElement(l.a,null,i.a.createElement(C,{to:"/inbox",open:r,onClick:function(){o((function(e){return!e}))}}),i.a.createElement(u.a,{component:"li",in:r,timeout:"auto",unmountOnExit:!0},i.a.createElement(l.a,{disablePadding:!0},i.a.createElement(C,{to:"/inbox/important",className:e.nested}))),i.a.createElement(C,{to:"/trash"}),i.a.createElement(C,{to:"/spam"})))))}},3404:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable no-nested-ternary */\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport Link from '@material-ui/core/Link';\nimport ListItem from '@material-ui/core/ListItem';\nimport Collapse from '@material-ui/core/Collapse';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandLess from '@material-ui/icons/ExpandLess';\nimport ExpandMore from '@material-ui/icons/ExpandMore';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport { Route, MemoryRouter } from 'react-router';\nimport { Link as RouterLink } from 'react-router-dom';\n\nconst breadcrumbNameMap = {\n  '/inbox': 'Inbox',\n  '/inbox/important': 'Important',\n  '/trash': 'Trash',\n  '/spam': 'Spam',\n  '/drafts': 'Drafts',\n};\n\nfunction ListItemLink(props) {\n  const { to, open, ...other } = props;\n  const primary = breadcrumbNameMap[to];\n\n  return (\n    <li>\n      <ListItem button component={RouterLink} to={to} {...other}>\n        <ListItemText primary={primary} />\n        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}\n      </ListItem>\n    </li>\n  );\n}\n\nListItemLink.propTypes = {\n  open: PropTypes.bool,\n  to: PropTypes.string.isRequired,\n};\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    width: 360,\n  },\n  lists: {\n    backgroundColor: theme.palette.background.paper,\n    marginTop: theme.spacing(1),\n  },\n  nested: {\n    paddingLeft: theme.spacing(4),\n  },\n}));\n\nconst LinkRouter = props => <Link {...props} component={RouterLink} />;\n\nexport default function RouterBreadcrumbs() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(true);\n\n  const handleClick = () => {\n    setOpen(prevOpen => !prevOpen);\n  };\n\n  return (\n    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>\n      <div className={classes.root}>\n        <Route>\n          {({ location }) => {\n            const pathnames = location.pathname.split('/').filter(x => x);\n\n            return (\n              <Breadcrumbs aria-label=\"breadcrumb\">\n                <LinkRouter color=\"inherit\" to=\"/\">\n                  Home\n                </LinkRouter>\n                {pathnames.map((value, index) => {\n                  const last = index === pathnames.length - 1;\n                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;\n\n                  return last ? (\n                    <Typography color=\"textPrimary\" key={to}>\n                      {breadcrumbNameMap[to]}\n                    </Typography>\n                  ) : (\n                    <LinkRouter color=\"inherit\" to={to} key={to}>\n                      {breadcrumbNameMap[to]}\n                    </LinkRouter>\n                  );\n                })}\n              </Breadcrumbs>\n            );\n          }}\n        </Route>\n        <nav className={classes.lists} aria-label=\"mailbox folders\">\n          <List>\n            <ListItemLink to=\"/inbox\" open={open} onClick={handleClick} />\n            <Collapse component=\"li\" in={open} timeout=\"auto\" unmountOnExit>\n              <List disablePadding>\n                <ListItemLink to=\"/inbox/important\" className={classes.nested} />\n              </List>\n            </Collapse>\n            <ListItemLink to=\"/trash\" />\n            <ListItemLink to=\"/spam\" />\n          </List>\n        </nav>\n      </div>\n    </MemoryRouter>\n  );\n}\n"},4146:function(e,t,n){"use strict";var a=n(1),r=n(72),o=n(5),i=n(0),c=n.n(i),l=(n(122),n(2),n(3)),s=n(10),m=n(226),u=n(21),d=n(69),p=Object(d.a)(c.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var f=Object(s.a)((function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=Object(o.a)(e,["classes"]);return c.a.createElement("li",Object(a.a)({className:t.root},n),c.a.createElement(p,{className:t.icon}))}));var h=c.a.forwardRef((function(e,t){var n=e.children,i=e.classes,s=e.className,u=e.component,d=void 0===u?"nav":u,p=e.itemsAfterCollapse,h=void 0===p?1:p,b=e.itemsBeforeCollapse,y=void 0===b?1:b,v=e.maxItems,k=void 0===v?8:v,g=e.separator,E=void 0===g?"/":g,C=Object(o.a)(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),x=c.a.useState(!1),L=x[0],N=x[1],w=c.a.Children.toArray(n).filter((function(e){return c.a.isValidElement(e)})).map((function(e,t){return c.a.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.a.createElement(m.a,Object(a.a)({ref:t,component:d,color:"textSecondary",className:Object(l.a)(i.root,s)},C),c.a.createElement("ol",{className:i.ol},function(e,t,n){return e.reduce((function(a,r,o){return o<e.length-1?a=a.concat(r,c.a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},n)):a.push(r),a}),[])}(L||k&&w.length<=k?w:function(e){return y+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[c.a.createElement(f,{key:"ellipsis",onClick:function(){N(!0)}})],Object(r.a)(e.slice(e.length-h,e.length)))}(w),i.separator,E)))}));t.a=Object(s.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},4188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1377),i=(n(144),n(191)),c=n(1344),l=n(1338),s=n(226),m=n(1319),u=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=u();return r.a.createElement(i.a,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(s.a,{variant:"h6"},"Breadcrumbs")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/breadcrumbs",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Breadcrumbs"),r.a.createElement(s.a,{className:"description"},"Breadcrumbs allow users to make selections from a range of values."),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple breadcrumbs"),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3388).default,raw:n(3389)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Active last breadcrumb"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"Keep the last breadcrumb interactive."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3390).default,raw:n(3391)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Custom separator"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"In the following examples, we are using two string separators, and an SVG icon."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3392).default,raw:n(3394)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breadcrumbs with icons"),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3395).default,raw:n(3398)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Collapsed breadcrumbs"),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3399).default,raw:n(3400)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized breadcrumbs"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",r.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3401).default,raw:n(3402)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Integration with react-router"),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(3403).default,raw:n(3404)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",r.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"},"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"),")"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"Be sure to add a ",r.a.createElement("code",null,"aria-label")," description on the ",r.a.createElement("code",null,"Breadcrumbs")," component."),r.a.createElement(s.a,{className:"mb-16",component:"div"},"The accessibility of this component relies on:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The set of links is structured using an ordered list (",r.a.createElement("code",null,"<ol>")," element)."),r.a.createElement("li",null,"To prevent screen reader announcement of the visual separators between links, they are hidden with ",r.a.createElement("code",null,"aria-hidden"),"."),r.a.createElement("li",null,"A nav element labeled with ",r.a.createElement("code",null,"aria-label")," identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.")))})}}}]);