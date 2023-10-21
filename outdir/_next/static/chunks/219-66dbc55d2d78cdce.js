"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{6977:function(e,t,n){n.d(t,{y1:function(){return g}});var o=n(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n(5893);var i=["shift","alt","meta","mod","ctrl"],s={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function a(e){return(s[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function u(e,t){return void 0===t&&(t=","),e.split(t)}function l(e,t,n){void 0===t&&(t="+");var o=e.toLocaleLowerCase().split(t).map(function(e){return a(e)});return r({},{alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},{keys:o.filter(function(e){return!i.includes(e)}),description:n})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&d([a(e.key),a(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&f([a(e.key),a(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){c.clear()});var c=new Set;function p(e){return Array.isArray(e)}function d(e){var t=Array.isArray(e)?e:[e];c.has("meta")&&c.forEach(function(e){return!i.includes(e)&&c.delete(e.toLowerCase())}),t.forEach(function(e){return c.add(e.toLowerCase())})}function f(e){var t=Array.isArray(e)?e:[e];"meta"===e?c.clear():t.forEach(function(e){return c.delete(e.toLowerCase())})}function v(e,t){var n=e.target;void 0===t&&(t=!1);var o=n&&n.tagName;return p(t)?Boolean(o&&t&&t.some(function(e){return e.toLowerCase()===o.toLowerCase()})):Boolean(o&&t&&!0===t)}var h=function(e,t,n){void 0===n&&(n=!1);var o,r=t.alt,i=t.meta,s=t.mod,u=t.shift,l=t.ctrl,d=t.keys,f=e.key,v=e.code,h=e.ctrlKey,E=e.metaKey,m=e.shiftKey,y=e.altKey,x=a(v),g=f.toLowerCase();if(!n){if(!y===r&&"alt"!==g||!m===u&&"shift"!==g)return!1;if(s){if(!E&&!h)return!1}else if(!E===i&&"meta"!==g&&"os"!==g||!h===l&&"ctrl"!==g&&"control"!==g)return!1}return!!(d&&1===d.length&&(d.includes(g)||d.includes(x)))||(d?(void 0===o&&(o=","),(p(d)?d:d.split(o)).every(function(e){return c.has(e.trim().toLowerCase())})):!d)},E=(0,o.createContext)(void 0),m=(0,o.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),y=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},x="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function g(e,t,n,r){var i,s=(0,o.useRef)(null),c=(0,o.useRef)(!1),g=n instanceof Array?r instanceof Array?void 0:r:n,b=p(e)?e.join(null==g?void 0:g.splitKey):e,C=n instanceof Array?n:r instanceof Array?r:void 0,k=(0,o.useCallback)(t,null!=C?C:[]),N=(0,o.useRef)(k);C?N.current=k:N.current=t;var O=(!function e(t,n){return t&&n&&"object"==typeof t&&"object"==typeof n?Object.keys(t).length===Object.keys(n).length&&Object.keys(t).reduce(function(o,r){return o&&e(t[r],n[r])},!0):t===n}((i=(0,o.useRef)(void 0)).current,g)&&(i.current=g),i.current),L=(0,o.useContext)(m).enabledScopes,S=(0,o.useContext)(E);return x(function(){if((null==O?void 0:O.enabled)!==!1&&(e=L,t=null==O?void 0:O.scopes,0===e.length&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!t||e.some(function(e){return t.includes(e)})||e.includes("*")))){var e,t,n=function(e,t){var n;if(void 0===t&&(t=!1),!(v(e,["input","textarea","select"])&&!v(e,null==O?void 0:O.enableOnFormTags)||null!=O&&null!=O.ignoreEventWhen&&O.ignoreEventWhen(e))){if(null!==s.current&&document.activeElement!==s.current&&!s.current.contains(document.activeElement)){y(e);return}(null==(n=e.target)||!n.isContentEditable||null!=O&&O.enableOnContentEditable)&&u(b,null==O?void 0:O.splitKey).forEach(function(n){var o,r,i,s=l(n,null==O?void 0:O.combinationKey);if(h(e,s,null==O?void 0:O.ignoreModifiers)||null!=(i=s.keys)&&i.includes("*")){if(t&&c.current)return;if(("function"==typeof(o=null==O?void 0:O.preventDefault)&&o(e,s)||!0===o)&&e.preventDefault(),"function"==typeof(r=null==O?void 0:O.enabled)?!r(e,s):!0!==r&&void 0!==r){y(e);return}N.current(e,s),t||(c.current=!0)}})}},o=function(e){void 0!==e.key&&(d(a(e.code)),((null==O?void 0:O.keydown)===void 0&&(null==O?void 0:O.keyup)!==!0||null!=O&&O.keydown)&&n(e))},r=function(e){void 0!==e.key&&(f(a(e.code)),c.current=!1,null!=O&&O.keyup&&n(e,!0))},i=s.current||(null==g?void 0:g.document)||document;return i.addEventListener("keyup",r),i.addEventListener("keydown",o),S&&u(b,null==O?void 0:O.splitKey).forEach(function(e){return S.addHotkey(l(e,null==O?void 0:O.combinationKey,null==O?void 0:O.description))}),function(){i.removeEventListener("keyup",r),i.removeEventListener("keydown",o),S&&u(b,null==O?void 0:O.splitKey).forEach(function(e){return S.removeHotkey(l(e,null==O?void 0:O.combinationKey,null==O?void 0:O.description))})}}},[b,O,L]),s}},6701:function(e,t,n){function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}function a(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n.d(t,{Z:function(){return C}});var u=n(7294),l=n(3935),c={disabled:!1},p=u.createContext(null),d=function(e){return e.scrollTop},f="unmounted",v="exited",h="entering",E="entered",m="exiting",y=function(e){function t(t,n){o=e.call(this,t,n)||this;var o,r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=v,o.appearStatus=h):r=E:r=t.unmountOnExit||t.mountOnEnter?f:v,o.state={status:r},o.nextCallback=null,o}s(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:v}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==h&&n!==E&&(t=h):(n===h||n===E)&&(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this);n&&d(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[l.findDOMNode(this),o],i=r[0],s=r[1],a=this.getTimeouts(),u=o?a.appear:a.enter;if(!e&&!n||c.disabled){this.safeSetState({status:E},function(){t.props.onEntered(i)});return}this.props.onEnter(i,s),this.safeSetState({status:h},function(){t.props.onEntering(i,s),t.onTransitionEnd(u,function(){t.safeSetState({status:E},function(){t.props.onEntered(i,s)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:l.findDOMNode(this);if(!t||c.disabled){this.safeSetState({status:v},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:m},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:v},function(){e.props.onExited(o)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,r(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.createElement(p.Provider,{value:null},"function"==typeof n?n(e,o):u.cloneElement(u.Children.only(n),o))},t}(u.Component);function x(){}y.contextType=p,y.propTypes={},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},y.UNMOUNTED=f,y.EXITED=v,y.ENTERING=h,y.ENTERED=E,y.EXITING=m;var g=function(e,t){return e&&t&&t.split(" ").forEach(function(t){var n;(n=e).classList?n.classList.remove(t):"string"==typeof n.className?n.className=a(n.className,t):n.setAttribute("class",a(n.className&&n.className.baseVal||"",t))})},b=function(e){function t(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1];t.addClass(r,i?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,r=o?(o&&n?n+"-":"")+e:n[e],i=o?r+"-active":n[e+"Active"],s=o?r+"-done":n[e+"Done"];return{baseClassName:r,activeClassName:i,doneClassName:s}},t}s(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var o,r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&d(e),r&&(this.appliedClasses[t][n]=r,o=r,e&&o&&o.split(" ").forEach(function(t){var n,o;return n=e,o=t,void(n.classList?n.classList.add(o):(n.classList?o&&n.classList.contains(o):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+o+" "))||("string"==typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)))}))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],o=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},o&&g(e,o),r&&g(e,r),i&&g(e,i)},n.render=function(){var e=this.props,t=(e.classNames,r(e,["classNames"]));return u.createElement(y,o({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(u.Component);b.defaultProps={classNames:""},b.propTypes={};var C=b}}]);