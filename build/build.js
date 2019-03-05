!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t){wp.i18n.__;var n=wp.data,r=n.select,o=n.subscribe,s="";o(function(){s="",function e(t){t.forEach(function(t){t.attributes.hasCustomCSS&&t.attributes.customCSS&&null!==t.attributes.customCSS&&(s+=t.attributes.customCSS+"\n"),void 0!==t.innerBlocks&&0<t.innerBlocks.length&&e(t.innerBlocks)})}(r("core/editor").getBlocks()),function(e){var t=document.getElementById("themeisle-css-editor-styles");null===t&&((t=document.createElement("style")).setAttribute("type","text/css"),t.setAttribute("id","themeisle-css-editor-styles"),document.getElementsByTagName("head")[0].appendChild(t)),t.textContent===e||(t.textContent=e)}(s)})},function(e,t,n){"use strict";n.r(t);n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=wp.i18n.__,u=wp.components,a=u.Button,p=u.Dashicon,m=u.KeyboardShortcuts,f=wp.element,d=f.Component,S=f.Fragment,b=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=s(t).apply(this,arguments))||"object"!==r(o)&&"function"!=typeof o?l(n):o).enableFullScreen=e.enableFullScreen.bind(l(e)),e.disableFullScreen=e.disableFullScreen.bind(l(e)),e.editor,e.customCSS="",e.state={isFullScreen:!1},e}var n,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,d),n=t,(u=[{key:"componentDidMount",value:function(){var e,t,n=this,r=this.props.clientId.substr(0,8);if(this.props.attributes.className?((e=this.props.attributes.className).includes("ticss-")||((e=e.split(" ")).push("ticss-".concat(r)),e=e.join(" ")),t=(t=e.split(" ")).find(function(e){return e.includes("ticss")})):(e="ticss-".concat(r),t=e),this.props.setAttributes({hasCustomCSS:!0,className:e}),this.props.attributes.customCSS){var o=this.props.attributes.customCSS.replace(/.ticss-[^#\s]*/g,"selector");this.customCSS=o}else this.customCSS="selector {\n}\n";this.editor=wp.CodeMirror(document.getElementById("themeisle-css-editor"),{value:this.customCSS,autoCloseBrackets:!0,continueComments:!0,lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,lint:!0,gutters:["CodeMirror-lint-markers"],styleActiveLine:!0,styleActiveSelected:!0,extraKeys:{"Ctrl-Space":"autocomplete","Ctrl-F":function(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)},"Alt-F":"findPersistent","Cmd-F":"findPersistent"}}),this.editor.on("change",function(){var e=new RegExp("selector","g"),r=n.editor.getValue().replace(e,".".concat(t));if(n.customCSS=r,"selector {\n}\n".replace(/\s+/g,"")===n.customCSS.replace(/\s+/g,""))return n.props.setAttributes({customCSS:null});n.props.setAttributes({customCSS:n.customCSS})})}},{key:"enableFullScreen",value:function(){this.editor.setOption("fullScreen",!0),this.setState({isFullScreen:!0})}},{key:"disableFullScreen",value:function(){this.editor.setOption("fullScreen",!1),this.setState({isFullScreen:!1})}},{key:"render",value:function(){return wp.element.createElement(S,null,wp.element.createElement("p",null,c("Add your custom CSS.")),wp.element.createElement("div",{id:"themeisle-css-editor",className:"themeisle-css-editor"}),wp.element.createElement("div",{className:"themeisle-css-editor-actions"},wp.element.createElement(a,{isDefault:!0,isLarge:!0,onClick:this.enableFullScreen},c("Full Screen Mode")),wp.element.createElement(m,{shortcuts:{"ctrl+f":this.enableFullScreen}}),wp.element.createElement("span",{className:"themeisle-css-editor__info"},c("(Ctrl + F)")),this.state.isFullScreen&&!0===this.editor.getOption("fullScreen")&&wp.element.createElement(a,{isDefault:!0,onClick:this.disableFullScreen,className:"themeisle-css-editor__close"},wp.element.createElement(p,{icon:"no-alt"}),c("Close"))),wp.element.createElement("p",null,c("Use")," ",wp.element.createElement("code",null,"selector")," ",c("to target block wrapper.")),wp.element.createElement("p",null,c("")),wp.element.createElement("p",null,c("Example:")),wp.element.createElement("pre",{className:"themeisle-css-editor-help"},"selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}"),wp.element.createElement("p",null,c("You can also use other CSS syntax here, such as media queries.")))}}])&&o(n.prototype,u),f&&o(n,f),t}(),h=(n(1),lodash.assign),y=wp.i18n.__,w=wp.blocks.hasBlockSupport,C=wp.components.PanelBody,g=wp.compose.createHigherOrderComponent,E=wp.editor.InspectorControls,v=wp.element.Fragment,O=wp.hooks.addFilter,_=g(function(e){return function(t){return w(t.name,"customClassName",!0)&&t.isSelected?wp.element.createElement(v,null,wp.element.createElement(e,t),wp.element.createElement(E,null,wp.element.createElement(C,{title:y("Custom CSS"),initialOpen:!1},wp.element.createElement(b,{clientId:t.clientId,setAttributes:t.setAttributes,attributes:t.attributes})))):wp.element.createElement(e,t)}},"withInspectorControl");O("blocks.registerBlockType","themeisle-custom-css/attribute",function(e){return w(e,"customClassName",!0)&&(e.attributes=h(e.attributes,{hasCustomCSS:{type:"boolean",default:!1},customCSS:{type:"string",default:null}})),e}),O("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",_)}]);