!function(r){function e(e){r("div.lazyYT",e).each(function(){r(this).replaceWith("<p>https://youtube.com/watch?v="+r(this).data("youtube-id")+"</p>")}),(e=e).addClass("spoiler-blurred"),r("a",e).addClass("no-track-link")}r.fn.spoil=function(){return this.each(function(){var t;(t=r(this)).data("spoiler-state","blurred"),e(t),t.on("click",function(e){"blurred"===t.data("spoiler-state")?(t.data("spoiler-state","revealed"),t.removeClass("spoiler-blurred"),e.preventDefault()):(t.data("spoiler-state","blurred"),t.addClass("spoiler-blurred"))})})}}(jQuery),define("discourse/plugins/discourse-spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/lib/to-markdown","discourse/controllers/composer"],function(e,t,a,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(e=e,!(null!=(t=t)&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=n(r);return e=o?(e=n(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==i(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){$(".spoiler",e).removeClass("spoiler").addClass("spoiled").spoil()}function s(e){e.decorateCooked(o,{id:"spoiler-alert"}),e.addToolbarPopupMenuOptionsCallback(function(){return{action:"insertSpoiler",icon:"magic",label:"spoiler.title"}}),r.default.reopen({actions:{insertSpoiler:function(){this.get("toolbarEvent").applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}}),a.Tag&&(a.Tag.prototype.decorate=function(e){return"spoiled"===this.element.attributes.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]"),(this.prefix||this.suffix)&&(e=[this.prefix,e,this.suffix].join("")),this.inline&&(e=" "+e+" "),e},a.Tag.block=function(n,s,l){return function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,a.Tag);var e,t,r,o=f(i);function i(){var e;return u(this,i),(e=o.call(this,n,s,l)).gap="\n\n",e}return e=i,(t=[{key:"decorate",value:function(e){var t=this.element.attributes,r=this.element.parent;return"p"===this.name&&r&&"li"===r.name&&(this.gap=""),"div"===this.name&&"spoiled"===t.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]",e=e.trim()),"".concat(this.gap).concat(this.prefix).concat(e).concat(this.suffix).concat(this.gap)}}])&&c(e.prototype,t),r&&c(e,r),i}()})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={name:"apply-spoilers",initialize:function(e){e.lookup("site-settings:main").spoiler_enabled&&(0,t.withPluginApi)("0.5",s)}};e.default=l}),define("discourse/plugins/discourse-spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports","pretty-text/pretty-text"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.whiteList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(function(e,t){e.features["spoiler-alert"]=!!t.spoiler_enabled}),e.registerPlugin(function(e){e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})})}(e):e.addPreProcessor(i)},(0,t.registerOption)(function(e,t){t.features["spoiler-alert"]=!!e.spoiler_enabled});var o=/\n|<img|!\[[^\]]*\][(\[]/;function r(e,t){var r=o.test(t)?"div":"span";return"<".concat(r," class='spoiler'>").concat(t,"</").concat(r,">")}function i(e){for(e=e||"";e!==(e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,r)););return e}});
//# sourceMappingURL=https://sjc3.discourse-cdn.com/business7/assets/plugins/discourse-spoiler-alert-305835b7744ac91b71b49f93e6ecf8e63d83932ec3ac7034d94d00b2ab2e0c0c.js.map