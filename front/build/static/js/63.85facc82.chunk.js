(this.webpackJsonponepanman=this.webpackJsonponepanman||[]).push([[63],{1376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),i=(a=r)&&a.__esModule?a:{default:a};var o=void 0,c=void 0;"undefined"!==typeof document&&(o=document),"undefined"!==typeof window&&(c=window);var l=t.FrameContext=i.default.createContext({document:o,window:c}),s=l.Provider,d=l.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=d},1377:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(20),r=n(144),i=n(1364),o=n(1368),c=n(1338),l=n(1370),s=n(1371),d=n(0),u=n.n(d),m=n(13),f=n(11),h=n(64),p=n(65),b=n(94),g=n(95),v=n(1295),x=n(672),y=n(1330),C=n(1365),k=n(10),E=n(450),O=n(451),w=n(1378),j=n.n(w),I=Object(v.a)({productionPrefix:"iframe-"}),L=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(E.a)(Object(f.a)({},Object(x.a)(),{plugins:[].concat(Object(m.a)(Object(x.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return u.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(y.b,{jss:this.state.jss,generateClassName:I,sheetsManager:this.state.sheetsManager},u.a.createElement(C.a,{theme:a},u.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(u.a.Component),N=Object(k.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(L);function S(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],h=e.component,p=e.raw,b=e.iframe,g=e.className;return u.a.createElement(o.a,{className:g},u.a.createElement(i.a,{position:"static",color:"default",elevation:0},u.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},h&&u.a.createElement(l.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"remove_red_eye")}),p&&u.a.createElement(l.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:0===m?"flex flex-1":"hidden"},h&&(b?u.a.createElement(N,null,u.a.createElement(h,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},u.a.createElement(h,null)))),u.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},p&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},p.default)))))}S.defaultProps={currentTabIndex:0};var T=S},1378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1376);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,i=n(1379),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default},1379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=u(i),c=u(n(22)),l=u(n(2)),s=n(1376),d=u(n(1380));function u(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=!this._setInitialContent,i=o.default.createElement(d.default,{contentDidMount:t,contentDidUpdate:n},o.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},o.default.createElement("div",{className:"frame-content"},this.props.children)));r&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0);var l=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(i,l)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,o.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(i.Component);m.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(o(r),o(n(2)));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:i.default.element.isRequired,contentDidMount:i.default.func.isRequired,contentDidUpdate:i.default.func.isRequired},t.default=s},1450:function(e,t,n){"use strict";var a=n(5),r=n(1),i=n(0),o=n.n(i),c=(n(2),n(3)),l=n(10),s=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=o.a.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,h=e.container,p=void 0!==h&&h,b=e.direction,g=void 0===b?"row":b,v=e.item,x=void 0!==v&&v,y=e.justify,C=void 0===y?"flex-start":y,k=e.lg,E=void 0!==k&&k,O=e.md,w=void 0!==O&&O,j=e.sm,I=void 0!==j&&j,L=e.spacing,N=void 0===L?0:L,S=e.wrap,T=void 0===S?"wrap":S,_=e.xl,D=void 0!==_&&_,R=e.xs,M=void 0!==R&&R,P=e.zeroMinWidth,G=void 0!==P&&P,B=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(c.a)(d.root,u,p&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],x&&d.item,G&&d.zeroMinWidth,"row"!==g&&d["direction-xs-".concat(String(g))],"wrap"!==T&&d["wrap-xs-".concat(String(T))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==C&&d["justify-xs-".concat(String(C))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==w&&d["grid-md-".concat(String(w))],!1!==E&&d["grid-lg-".concat(String(E))],!1!==D&&d["grid-xl-".concat(String(D))]);return o.a.createElement(f,Object(r.a)({className:z,ref:t},B))})),f=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=f},1852:function(e,t,n){"use strict";var a=n(1),r=n(5),i=n(0),o=n.n(i),c=(n(2),n(3)),l=n(10),s=n(226),d=o.a.forwardRef((function(e,t){var n=e.action,i=e.avatar,l=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,f=e.disableTypography,h=void 0!==f&&f,p=e.subheader,b=e.subheaderTypographyProps,g=e.title,v=e.titleTypographyProps,x=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=g;null==y||y.type===s.a||h||(y=o.a.createElement(s.a,Object(a.a)({variant:i?"body2":"h5",className:l.title,component:"span",display:"block"},v),y));var C=p;return null==C||C.type===s.a||h||(C=o.a.createElement(s.a,Object(a.a)({variant:i?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},b),C)),o.a.createElement(m,Object(a.a)({className:Object(c.a)(l.root,d),ref:t},x),i&&o.a.createElement("div",{className:l.avatar},i),o.a.createElement("div",{className:l.content},y,C),n&&o.a.createElement("div",{className:l.action},n))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(d)},4065:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n(13),r=n(20),i=n(0),o=n.n(i),c=n(1319),l=n(1450),s=n(1300),d=n(1301),u=n(1366),m=n(1346),f=n(1350),h=n(1344),p=n(227),b=Object(c.a)((function(e){return{root:{margin:"auto"},paper:{width:200,height:230,overflow:"auto"},button:{margin:e.spacing(.5,0)}}}));function g(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function v(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function x(){var e=b(),t=o.a.useState([]),n=Object(r.a)(t,2),i=n[0],c=n[1],x=o.a.useState([0,1,2,3]),y=Object(r.a)(x,2),C=y[0],k=y[1],E=o.a.useState([4,5,6,7]),O=Object(r.a)(E,2),w=O[0],j=O[1],I=v(i,C),L=v(i,w),N=function(e){return function(){var t=i.indexOf(e),n=Object(a.a)(i);-1===t?n.push(e):n.splice(t,1),c(n)}},S=function(t){return o.a.createElement(p.a,{className:e.paper},o.a.createElement(s.a,{dense:!0,component:"div",role:"list"},t.map((function(e){var t="transfer-list-item-".concat(e,"-label");return o.a.createElement(d.a,{key:e,role:"listitem",button:!0,onClick:N(e)},o.a.createElement(u.a,null,o.a.createElement(f.a,{checked:-1!==i.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})),o.a.createElement(m.a,{id:t,primary:"List item ".concat(e+1)}))})),o.a.createElement(d.a,null)))};return o.a.createElement(l.a,{container:!0,spacing:2,justify:"center",alignItems:"center",className:e.root},o.a.createElement(l.a,{item:!0},S(C)),o.a.createElement(l.a,{item:!0},o.a.createElement(l.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(h.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){j(w.concat(C)),k([])},disabled:0===C.length,"aria-label":"move all right"},"\u226b"),o.a.createElement(h.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){j(w.concat(I)),k(g(C,I)),c(g(i,I))},disabled:0===I.length,"aria-label":"move selected right"},">"),o.a.createElement(h.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){k(C.concat(L)),j(g(w,L)),c(g(i,L))},disabled:0===L.length,"aria-label":"move selected left"},"<"),o.a.createElement(h.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){k(C.concat(w)),j([])},disabled:0===w.length,"aria-label":"move all left"},"\u226a"))),o.a.createElement(l.a,{item:!0},S(w)))}},4066:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Grid from \'@material-ui/core/Grid\';\nimport List from \'@material-ui/core/List\';\nimport ListItem from \'@material-ui/core/ListItem\';\nimport ListItemIcon from \'@material-ui/core/ListItemIcon\';\nimport ListItemText from \'@material-ui/core/ListItemText\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport Button from \'@material-ui/core/Button\';\nimport Paper from \'@material-ui/core/Paper\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    margin: \'auto\',\n  },\n  paper: {\n    width: 200,\n    height: 230,\n    overflow: \'auto\',\n  },\n  button: {\n    margin: theme.spacing(0.5, 0),\n  },\n}));\n\nfunction not(a, b) {\n  return a.filter(value => b.indexOf(value) === -1);\n}\n\nfunction intersection(a, b) {\n  return a.filter(value => b.indexOf(value) !== -1);\n}\n\nexport default function TransferList() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState([]);\n  const [left, setLeft] = React.useState([0, 1, 2, 3]);\n  const [right, setRight] = React.useState([4, 5, 6, 7]);\n\n  const leftChecked = intersection(checked, left);\n  const rightChecked = intersection(checked, right);\n\n  const handleToggle = value => () => {\n    const currentIndex = checked.indexOf(value);\n    const newChecked = [...checked];\n\n    if (currentIndex === -1) {\n      newChecked.push(value);\n    } else {\n      newChecked.splice(currentIndex, 1);\n    }\n\n    setChecked(newChecked);\n  };\n\n  const handleAllRight = () => {\n    setRight(right.concat(left));\n    setLeft([]);\n  };\n\n  const handleCheckedRight = () => {\n    setRight(right.concat(leftChecked));\n    setLeft(not(left, leftChecked));\n    setChecked(not(checked, leftChecked));\n  };\n\n  const handleCheckedLeft = () => {\n    setLeft(left.concat(rightChecked));\n    setRight(not(right, rightChecked));\n    setChecked(not(checked, rightChecked));\n  };\n\n  const handleAllLeft = () => {\n    setLeft(left.concat(right));\n    setRight([]);\n  };\n\n  const customList = items => (\n    <Paper className={classes.paper}>\n      <List dense component="div" role="list">\n        {items.map(value => {\n          const labelId = `transfer-list-item-${value}-label`;\n\n          return (\n            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>\n              <ListItemIcon>\n                <Checkbox\n                  checked={checked.indexOf(value) !== -1}\n                  tabIndex={-1}\n                  disableRipple\n                  inputProps={{ \'aria-labelledby\': labelId }}\n                />\n              </ListItemIcon>\n              <ListItemText id={labelId} primary={`List item ${value + 1}`} />\n            </ListItem>\n          );\n        })}\n        <ListItem />\n      </List>\n    </Paper>\n  );\n\n  return (\n    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>\n      <Grid item>{customList(left)}</Grid>\n      <Grid item>\n        <Grid container direction="column" alignItems="center">\n          <Button\n            variant="outlined"\n            size="small"\n            className={classes.button}\n            onClick={handleAllRight}\n            disabled={left.length === 0}\n            aria-label="move all right"\n          >\n            \u226b\n          </Button>\n          <Button\n            variant="outlined"\n            size="small"\n            className={classes.button}\n            onClick={handleCheckedRight}\n            disabled={leftChecked.length === 0}\n            aria-label="move selected right"\n          >\n            &gt;\n          </Button>\n          <Button\n            variant="outlined"\n            size="small"\n            className={classes.button}\n            onClick={handleCheckedLeft}\n            disabled={rightChecked.length === 0}\n            aria-label="move selected left"\n          >\n            &lt;\n          </Button>\n          <Button\n            variant="outlined"\n            size="small"\n            className={classes.button}\n            onClick={handleAllLeft}\n            disabled={right.length === 0}\n            aria-label="move all left"\n          >\n            \u226a\n          </Button>\n        </Grid>\n      </Grid>\n      <Grid item>{customList(right)}</Grid>\n    </Grid>\n  );\n}\n'},4067:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(20),r=n(13),i=n(0),o=n.n(i),c=n(1319),l=n(1450),s=n(1300),d=n(1368),u=n(1852),m=n(1301),f=n(1346),h=n(1366),p=n(1350),b=n(1344),g=n(1363),v=Object(c.a)((function(e){return{root:{margin:"auto"},cardHeader:{padding:e.spacing(1,2)},list:{width:200,height:230,backgroundColor:e.palette.background.paper,overflow:"auto"},button:{margin:e.spacing(.5,0)}}}));function x(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function y(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function C(){var e=v(),t=o.a.useState([]),n=Object(a.a)(t,2),i=n[0],c=n[1],C=o.a.useState([0,1,2,3]),k=Object(a.a)(C,2),E=k[0],O=k[1],w=o.a.useState([4,5,6,7]),j=Object(a.a)(w,2),I=j[0],L=j[1],N=y(i,E),S=y(i,I),T=function(e){return function(){var t=i.indexOf(e),n=Object(r.a)(i);-1===t?n.push(e):n.splice(t,1),c(n)}},_=function(e){return y(i,e).length},D=function(e){return function(){var t,n;_(e)===e.length?c(x(i,e)):c((t=i,n=e,[].concat(Object(r.a)(t),Object(r.a)(x(n,t)))))}},R=function(t,n){return o.a.createElement(d.a,null,o.a.createElement(u.a,{className:e.cardHeader,avatar:o.a.createElement(p.a,{onClick:D(n),checked:_(n)===n.length&&0!==n.length,indeterminate:_(n)!==n.length&&0!==_(n),disabled:0===n.length,inputProps:{"aria-label":"all items selected"}}),title:t,subheader:"".concat(_(n),"/").concat(n.length," selected")}),o.a.createElement(g.a,null),o.a.createElement(s.a,{className:e.list,dense:!0,component:"div",role:"list"},n.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return o.a.createElement(m.a,{key:e,role:"listitem",button:!0,onClick:T(e)},o.a.createElement(h.a,null,o.a.createElement(p.a,{checked:-1!==i.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})),o.a.createElement(f.a,{id:t,primary:"List item ".concat(e+1)}))})),o.a.createElement(m.a,null)))};return o.a.createElement(l.a,{container:!0,spacing:2,justify:"center",alignItems:"center",className:e.root},o.a.createElement(l.a,{item:!0},R("Choices",E)),o.a.createElement(l.a,{item:!0},o.a.createElement(l.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(b.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){L(I.concat(N)),O(x(E,N)),c(x(i,N))},disabled:0===N.length,"aria-label":"move selected right"},">"),o.a.createElement(b.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){O(E.concat(S)),L(x(I,S)),c(x(i,S))},disabled:0===S.length,"aria-label":"move selected left"},"<"))),o.a.createElement(l.a,{item:!0},R("Chosen",I)))}},4068:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Grid from '@material-ui/core/Grid';\nimport List from '@material-ui/core/List';\nimport Card from '@material-ui/core/Card';\nimport CardHeader from '@material-ui/core/CardHeader';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\nimport Checkbox from '@material-ui/core/Checkbox';\nimport Button from '@material-ui/core/Button';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    margin: 'auto',\n  },\n  cardHeader: {\n    padding: theme.spacing(1, 2),\n  },\n  list: {\n    width: 200,\n    height: 230,\n    backgroundColor: theme.palette.background.paper,\n    overflow: 'auto',\n  },\n  button: {\n    margin: theme.spacing(0.5, 0),\n  },\n}));\n\nfunction not(a, b) {\n  return a.filter(value => b.indexOf(value) === -1);\n}\n\nfunction intersection(a, b) {\n  return a.filter(value => b.indexOf(value) !== -1);\n}\n\nfunction union(a, b) {\n  return [...a, ...not(b, a)];\n}\n\nexport default function TransferList() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState([]);\n  const [left, setLeft] = React.useState([0, 1, 2, 3]);\n  const [right, setRight] = React.useState([4, 5, 6, 7]);\n\n  const leftChecked = intersection(checked, left);\n  const rightChecked = intersection(checked, right);\n\n  const handleToggle = value => () => {\n    const currentIndex = checked.indexOf(value);\n    const newChecked = [...checked];\n\n    if (currentIndex === -1) {\n      newChecked.push(value);\n    } else {\n      newChecked.splice(currentIndex, 1);\n    }\n\n    setChecked(newChecked);\n  };\n\n  const numberOfChecked = items => intersection(checked, items).length;\n\n  const handleToggleAll = items => () => {\n    if (numberOfChecked(items) === items.length) {\n      setChecked(not(checked, items));\n    } else {\n      setChecked(union(checked, items));\n    }\n  };\n\n  const handleCheckedRight = () => {\n    setRight(right.concat(leftChecked));\n    setLeft(not(left, leftChecked));\n    setChecked(not(checked, leftChecked));\n  };\n\n  const handleCheckedLeft = () => {\n    setLeft(left.concat(rightChecked));\n    setRight(not(right, rightChecked));\n    setChecked(not(checked, rightChecked));\n  };\n\n  const customList = (title, items) => (\n    <Card>\n      <CardHeader\n        className={classes.cardHeader}\n        avatar={\n          <Checkbox\n            onClick={handleToggleAll(items)}\n            checked={numberOfChecked(items) === items.length && items.length !== 0}\n            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}\n            disabled={items.length === 0}\n            inputProps={{ 'aria-label': 'all items selected' }}\n          />\n        }\n        title={title}\n        subheader={`${numberOfChecked(items)}/${items.length} selected`}\n      />\n      <Divider />\n      <List className={classes.list} dense component=\"div\" role=\"list\">\n        {items.map(value => {\n          const labelId = `transfer-list-all-item-${value}-label`;\n\n          return (\n            <ListItem key={value} role=\"listitem\" button onClick={handleToggle(value)}>\n              <ListItemIcon>\n                <Checkbox\n                  checked={checked.indexOf(value) !== -1}\n                  tabIndex={-1}\n                  disableRipple\n                  inputProps={{ 'aria-labelledby': labelId }}\n                />\n              </ListItemIcon>\n              <ListItemText id={labelId} primary={`List item ${value + 1}`} />\n            </ListItem>\n          );\n        })}\n        <ListItem />\n      </List>\n    </Card>\n  );\n\n  return (\n    <Grid container spacing={2} justify=\"center\" alignItems=\"center\" className={classes.root}>\n      <Grid item>{customList('Choices', left)}</Grid>\n      <Grid item>\n        <Grid container direction=\"column\" alignItems=\"center\">\n          <Button\n            variant=\"outlined\"\n            size=\"small\"\n            className={classes.button}\n            onClick={handleCheckedRight}\n            disabled={leftChecked.length === 0}\n            aria-label=\"move selected right\"\n          >\n            &gt;\n          </Button>\n          <Button\n            variant=\"outlined\"\n            size=\"small\"\n            className={classes.button}\n            onClick={handleCheckedLeft}\n            disabled={rightChecked.length === 0}\n            aria-label=\"move selected left\"\n          >\n            &lt;\n          </Button>\n        </Grid>\n      </Grid>\n      <Grid item>{customList('Chosen', right)}</Grid>\n    </Grid>\n  );\n}\n"},4230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1377),o=(n(144),n(191)),c=n(1344),l=n(1338),s=n(226),d=n(1319),u=Object(d.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=u();return r.a.createElement(o.a,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(s.a,{variant:"h6"},"Transfer List")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/transfer-list",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Transfer List"),r.a.createElement(s.a,{className:"description"},'A transfer list (or "shuttle") enables the user to move one or more list items between lists.'),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Transfer List"),r.a.createElement(s.a,{className:"mb-16",component:"div"},' For completeness, this example includes buttons for "move all", but not every transfer list needs these.'),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:n(4065).default,raw:n(4066)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Enhanced Transfer List"),r.a.createElement(s.a,{className:"mb-16",component:"div"},'This example exchanges the "move all" buttons for a "select all / select none" checkbox, and adds a counter.'),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:n(4067).default,raw:n(4068)})))})}}}]);