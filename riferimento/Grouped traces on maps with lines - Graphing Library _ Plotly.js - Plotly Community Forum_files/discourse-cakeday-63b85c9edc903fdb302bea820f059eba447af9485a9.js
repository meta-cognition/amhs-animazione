Ember.TEMPLATES["javascripts/cakeday"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","container cakeday"],[8],[0,"\\n  "],[7,"ul",true],[10,"class","nav-pills"],[8],[0,"\\n"],[4,"if",[[24,["cakedayEnabled"]]],null,{"statements":[[0,"      "],[7,"li",true],[10,"class","nav-item-anniversaries"],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.anniversaries"]],{"statements":[[0,"          "],[1,[28,"i18n",["anniversaries.title"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[24,["cakedayBirthdayEnabled"]]],null,{"statements":[[0,"      "],[7,"li",true],[10,"class","nav-item-birthdays"],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.birthdays"]],{"statements":[[0,"          "],[1,[28,"i18n",["birthdays.title"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday"}}),Ember.TEMPLATES["javascripts/components/emoji-images"]=Ember.HTMLBars.template({id:null,block:'{"symbols":["html"],"statements":[[4,"if",[[24,["siteSettings","enable_emoji"]]],null,{"statements":[[0,"  "],[7,"div",true],[11,"title",[22,"titleText"]],[8],[0,"\\n"],[4,"each",[[24,["emojiHTML"]]],null,{"statements":[[0,"      "],[1,[23,1,[]],true],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[1,[28,"fa-icon",["birthday-cake"],[["title"],[[24,["titleText"]]]]],false],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/components/emoji-images"}}),Ember.TEMPLATES["javascripts/components/user-info-list"]=Ember.HTMLBars.template({id:null,block:'{"symbols":["user","&default"],"statements":[[7,"ul",true],[10,"class","user-info-list"],[8],[0,"\\n"],[4,"each",[[24,["users"]]],null,{"statements":[[0,"    "],[7,"li",true],[10,"class","user-info-item"],[8],[0,"\\n"],[4,"user-info",null,[["user"],[[23,1,[]]]],{"statements":[[0,"        "],[7,"div",true],[8],[1,[28,"cakeday-date",[[23,1,["cakeday_date"]]],[["isBirthday"],[[24,["isBirthday"]]]]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[1]},{"statements":[[0,"    "],[7,"div",true],[10,"class","user-info-empty-message"],[8],[7,"h4",true],[8],[14,2],[9],[9],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/components/user-info-list"}}),Ember.TEMPLATES["javascripts/cakeday/birthdays/upcoming"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users","isBirthday"],[[24,["model"]],true]],{"statements":[[0,"      "],[1,[28,"i18n",["birthdays.upcoming.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/birthdays/upcoming"}}),Ember.TEMPLATES["javascripts/cakeday/birthdays/tomorrow"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users","isBirthday"],[[24,["model"]],true]],{"statements":[[0,"      "],[1,[28,"i18n",["birthdays.tomorrow.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/birthdays/tomorrow"}}),Ember.TEMPLATES["javascripts/cakeday/birthdays/today"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users","isBirthday"],[[24,["model"]],true]],{"statements":[[0,"      "],[1,[28,"i18n",["birthdays.today.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/birthdays/today"}}),Ember.TEMPLATES["javascripts/cakeday/birthdays/all"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[0,"  "],[7,"div",true],[10,"class","cakeday-months"],[8],[0,"\\n    "],[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[28,"i18n",["birthdays.month.title"],null],false],[9],[0,"\\n    "],[1,[28,"combo-box",null,[["content","value","valueAttribute","none"],[[24,["months"]],[24,["month"]],"value","cakeday.none"]]],false],[0,"\\n  "],[9],[0,"\\n\\n"],[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users","isBirthday"],[[24,["model"]],true]],{"statements":[[0,"      "],[1,[28,"i18n",["birthdays.month.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/birthdays/all"}}),Ember.TEMPLATES["javascripts/cakeday/anniversaries"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","anniversaries"],[8],[0,"\\n  "],[7,"ul",true],[10,"class","nav-pills"],[8],[0,"\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.anniversaries.today"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.today"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.anniversaries.tomorrow"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.tomorrow"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.anniversaries.upcoming"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.upcoming"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.anniversaries.all"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.all"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/anniversaries"}}),Ember.TEMPLATES["javascripts/cakeday/anniversaries/upcoming"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users"],[[24,["model"]]]],{"statements":[[0,"      "],[1,[28,"i18n",["anniversaries.upcoming.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/anniversaries/upcoming"}}),Ember.TEMPLATES["javascripts/cakeday/anniversaries/tomorrow"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users"],[[24,["model"]]]],{"statements":[[0,"      "],[1,[28,"i18n",["anniversaries.tomorrow.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/anniversaries/tomorrow"}}),Ember.TEMPLATES["javascripts/cakeday/anniversaries/today"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n"],[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users"],[[24,["model"]]]],{"statements":[[0,"      "],[1,[28,"i18n",["anniversaries.today.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/anniversaries/today"}}),Ember.TEMPLATES["javascripts/cakeday/anniversaries/all"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"load-more",null,[["selector","action"],[".user-info",[28,"action",[[23,0,[]],"loadMore"],null]]],{"statements":[[0,"  "],[7,"div",true],[10,"class","cakeday-months"],[8],[0,"\\n    "],[7,"h2",true],[10,"class","cakeday-header"],[8],[1,[28,"i18n",["anniversaries.month.title"],null],false],[9],[0,"\\n    "],[1,[28,"combo-box",null,[["content","value","valueAttribute","none"],[[24,["months"]],[24,["month"]],"value","cakeday.none"]]],false],[0,"\\n  "],[9],[0,"\\n\\n"],[4,"conditional-loading-spinner",null,[["condition"],[[24,["model","loading"]]]],{"statements":[[4,"user-info-list",null,[["users"],[[24,["model"]]]],{"statements":[[0,"      "],[1,[28,"i18n",["anniversaries.month.empty"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[28,"conditional-loading-spinner",null,[["condition"],[[24,["model","loadingMore"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/anniversaries/all"}}),Ember.TEMPLATES["javascripts/cakeday/birthdays"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","birthdays"],[8],[0,"\\n  "],[7,"ul",true],[10,"class","nav-pills"],[8],[0,"\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.birthdays.today"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.today"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.birthdays.tomorrow"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.tomorrow"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.birthdays.upcoming"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.upcoming"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"li",true],[8],[0,"\\n"],[4,"link-to",null,[["route"],["cakeday.birthdays.all"]],{"statements":[[0,"        "],[1,[28,"i18n",["cakeday.all"],null],false],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/cakeday/birthdays"}}),Ember.TEMPLATES["javascripts/connectors/user-card-post-names/user-card-cakeday"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"if",[[24,["siteSettings","cakeday_birthday_enabled"]]],null,{"statements":[[4,"if",[[24,["isUserBirthday"]]],null,{"statements":[[0,"    "],[1,[28,"emoji-images",null,[["list","title"],[[24,["siteSettings","cakeday_birthday_emoji"]],[24,["cakedayBirthdayTitle"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n"],[4,"if",[[24,["siteSettings","cakeday_enabled"]]],null,{"statements":[[4,"if",[[24,["isCakeday"]]],null,{"statements":[[0,"    "],[1,[28,"emoji-images",null,[["list","title"],[[24,["siteSettings","cakeday_emoji"]],[24,["cakedayTitle"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/connectors/user-card-post-names/user-card-cakeday"}}),Ember.TEMPLATES["javascripts/connectors/user-custom-preferences/user-date-of-birth-input"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"if",[[24,["siteSettings","cakeday_birthday_enabled"]]],null,{"statements":[[0,"  "],[7,"div",true],[10,"class","control-group"],[8],[0,"\\n    "],[7,"label",true],[10,"class","control-label"],[8],[1,[28,"i18n",["user.date_of_birth.label"],null],false],[9],[0,"\\n    "],[7,"div",true],[10,"class","controls"],[8],[0,"\\n      "],[1,[28,"combo-box",null,[["content","value","valueAttribute","valueProperty","none","options","onChange"],[[24,["months"]],[24,["userBirthdayMonth"]],"value","value","cakeday.none",[28,"hash",null,[["clearable","autoInsertNoneItem"],[true,false]]],[28,"action",[[23,0,[]],[28,"mut",[[24,["userBirthdayMonth"]]],null]],null]]]],false],[0,"\\n\\n      "],[1,[28,"combo-box",null,[["content","value","valueProperty","nameProperty","none","options","onChange"],[[24,["days"]],[24,["userBirthdayDay"]],null,null,"cakeday.none",[28,"hash",null,[["clearable","autoInsertNoneItem"],[true,false]]],[28,"action",[[23,0,[]],[28,"mut",[[24,["userBirthdayDay"]]],null]],null]]]],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/connectors/user-custom-preferences/user-date-of-birth-input"}}),Ember.TEMPLATES["javascripts/connectors/user-post-names/user-cakeday"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"if",[[24,["siteSettings","cakeday_birthday_enabled"]]],null,{"statements":[[4,"if",[[24,["isUserBirthday"]]],null,{"statements":[[0,"    "],[1,[28,"emoji-images",null,[["list","title"],[[24,["siteSettings","cakeday_birthday_emoji"]],"birthdays.title"]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n"],[4,"if",[[24,["siteSettings","cakeday_enabled"]]],null,{"statements":[[4,"if",[[24,["isCakeday"]]],null,{"statements":[[0,"    "],[1,[28,"emoji-images",null,[["list","title"],[[24,["siteSettings","cakeday_emoji"]],"anniversaries.title"]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/connectors/user-post-names/user-cakeday"}}),define("discourse/plugins/discourse-cakeday/discourse/initializers/cakeday",["exports","I18n","discourse-common/utils/decorators","discourse/controllers/preferences","discourse/controllers/user-card","discourse/controllers/user","discourse/lib/plugin-api","discourse/plugins/discourse-cakeday/discourse/lib/cakeday","discourse-common/lib/helpers"],function(e,m,f,y,p,b,v,h,k){"use strict";function g(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function _(a,r,e,t,i){var s={};return Object.keys(t).forEach(function(e){s[e]=t[e]}),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=e.slice().reverse().reduce(function(e,t){return t(a,r,e)||e},s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(a,r,s),s=null),s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"cakeday",initialize:function(e){var t,a,r,i,s,n,o,l,u,d,c;e.lookup("current-user:main")&&(c=e.lookup("site-settings:main"),e.lookup("store:main").addPluralization("anniversary","anniversaries"),y.default.reopen((t=(0,f.observes)("userBirthdayMonth","userBirthdayDay"),a=(0,f.default)("model.date_of_birth"),r=(0,f.default)("model.date_of_birth"),_(i={days:g(Array(32).keys()).splice(1),months:function(){return moment.months().map(function(e,t){return{name:e,value:t+1}})},_setUserDateOfBirth:function(){var e=this.get("userBirthdayMonth"),t=this.get("userBirthdayDay"),a=this.get("model"),r="";""!==e&&""!==t&&(r="1904-".concat(this.get("userBirthdayMonth"),"-").concat(this.get("userBirthdayDay"))),a.set("date_of_birth",r)},userBirthdayMonth:function(e){return moment(e,"YYYY-MM-DD").month()+1},userBirthdayDay:function(e){return moment(e,"YYYY-MM-DD").date()}},"months",[f.default],Object.getOwnPropertyDescriptor(i,"months"),i),_(i,"_setUserDateOfBirth",[t],Object.getOwnPropertyDescriptor(i,"_setUserDateOfBirth"),i),_(i,"userBirthdayMonth",[a],Object.getOwnPropertyDescriptor(i,"userBirthdayMonth"),i),_(i,"userBirthdayDay",[r],Object.getOwnPropertyDescriptor(i,"userBirthdayDay"),i),i)),p.default.reopen((s=(0,f.default)("model.created_at"),n=(0,f.default)("model.date_of_birth"),_(o={isCakeday:function(e){return(0,h.cakeday)(e)},isUserBirthday:function(e){return(0,h.cakedayBirthday)(e)}},"isCakeday",[s],Object.getOwnPropertyDescriptor(o,"isCakeday"),o),_(o,"isUserBirthday",[n],Object.getOwnPropertyDescriptor(o,"isUserBirthday"),o),o)),b.default.reopen((l=(0,f.default)("model.created_at"),u=(0,f.default)("model.date_of_birth"),_(d={isCakeday:function(e){return(0,h.cakeday)(e)},isUserBirthday:function(e){return(0,h.cakedayBirthday)(e)}},"isCakeday",[l],Object.getOwnPropertyDescriptor(d,"isCakeday"),d),_(d,"isUserBirthday",[u],Object.getOwnPropertyDescriptor(d,"isUserBirthday"),d),d)),(0,v.withPluginApi)("0.1",function(e){return s=e,o=(n=c).enable_emoji,t=n.cakeday_enabled,a=n.cakeday_birthday_enabled,t&&(s.includePostAttributes("user_created_at"),s.includePostAttributes("user_date_of_birth"),s.addPosterIcon(function(e,t){var a=t.user_created_at;if(!Ember.isEmpty(a)&&(0,h.isSameDay)(a,{anniversary:!0})){var r={};o?r.emoji=n.cakeday_emoji:r.icon="birthday-cake";var i=s.getCurrentUser();return i&&t.user_id===i.get("id")?r.title=m.default.t("user.anniversary.user_title"):r.title=m.default.t("user.anniversary.title"),r.emojiTitle=!1,r}})),a&&s.addPosterIcon(function(e,t){var a=t.user_date_of_birth;if(!Ember.isEmpty(a)&&(0,h.isSameDay)(a)){var r={};o?r.emoji=n.cakeday_birthday_emoji:r.icon="birthday-cake";var i=s.getCurrentUser();return i&&t.user_id===i.get("id")?r.title=m.default.t("user.date_of_birth.user_title"):r.title=m.default.t("user.date_of_birth.title"),r.emojiTitle=!1,r}}),void((t||a)&&((0,k.registerUnbound)("cakeday-date",function(e,t){var a=moment(e);return t.isBirthday?a.format(m.default.t("dates.full_no_year_no_time")):a.format(m.default.t("dates.full_with_year_no_time"))}),s.decorateWidget("hamburger-menu:generalLinks",function(){var e;return t?e="cakeday.anniversaries.today":a&&(e="cakeday.birthdays.today"),{route:e,label:"cakeday.title",className:"cakeday-link"}})));var s,n,o,t,a}))}};e.default=t}),define("discourse/plugins/discourse-cakeday/discourse/discourse-cakeday-route-map",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.route("cakeday",{path:"/cakeday",resetNamespace:!0},function(){this.route("birthdays",{path:"/birthdays"},function(){this.route("today",{path:"/today"}),this.route("tomorrow",{path:"/tomorrow"}),this.route("upcoming",{path:"/upcoming"}),this.route("all",{path:"/all"})}),this.route("anniversaries",{path:"/anniversaries"},function(){this.route("today",{path:"/today"}),this.route("tomorrow",{path:"/tomorrow"}),this.route("upcoming",{path:"/upcoming"}),this.route("all",{path:"/all"})})})}}),define("discourse/plugins/discourse-cakeday/discourse/components/emoji-images",["exports","discourse-common/utils/decorators","discourse/lib/text","I18n"],function(e,t,a,r){"use strict";var i,s,n;function o(a,r,e,t,i){var s={};return Object.keys(t).forEach(function(e){s[e]=t[e]}),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=e.slice().reverse().reduce(function(e,t){return t(a,r,e)||e},s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(a,r,s),s=null),s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=Ember.Component.extend((i=(0,t.default)("list"),s=(0,t.default)("title"),o(n={classNames:["emoji-images"],emojiHTML:function(e){return e.split("|").map(function(e){return(0,a.emojiUnescape)(":".concat(e,":"),{skipTitle:!0})})},titleText:function(e){return r.default.t(e)}},"emojiHTML",[i],Object.getOwnPropertyDescriptor(n,"emojiHTML"),n),o(n,"titleText",[s],Object.getOwnPropertyDescriptor(n,"titleText"),n),n));e.default=l}),define("discourse/plugins/discourse-cakeday/discourse/connectors/user-card-post-names/user-card-cakeday",["exports","discourse/plugins/discourse-cakeday/discourse/lib/cakeday"],function(e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={setupComponent:function(e,t){t.set("isCakeday",(0,a.cakeday)(e.user.get("created_at"))),t.set("isUserBirthday",(0,a.cakedayBirthday)(e.user.get("date_of_birth"))),t.set("cakedayTitle",(0,a.cakedayTitle)(e.user,this.currentUser)),t.set("cakedayBirthdayTitle",(0,a.cakedayBirthdayTitle)(e.user,this.currentUser))}};e.default=t}),define("discourse/plugins/discourse-cakeday/discourse/connectors/user-custom-preferences/user-date-of-birth-input",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={setupComponent:function(t,a){var e=moment.months().map(function(e,t){return{name:e,value:t+1}}),r=Array.from(Array(31).keys()).map(function(e){return(e+1).toString()}),i=t.model.get("date_of_birth"),s=i?moment(i,"YYYY-MM-DD").month()+1:null,n=i?moment(i,"YYYY-MM-DD").date().toString():null;a.setProperties({months:e,days:r,userBirthdayMonth:s,userBirthdayDay:n});function o(){var e="";a.userBirthdayMonth&&a.userBirthdayDay&&(e="1904-".concat(a.userBirthdayMonth,"-").concat(a.userBirthdayDay)),t.model.set("date_of_birth",e)}a.addObserver("userBirthdayMonth",o),a.addObserver("userBirthdayDay",o)}};e.default=t}),define("discourse/plugins/discourse-cakeday/discourse/connectors/user-post-names/user-cakeday",["exports","discourse/plugins/discourse-cakeday/discourse/lib/cakeday"],function(e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={setupComponent:function(e,t){t.set("isCakeday",(0,a.cakeday)(e.model.get("created_at"))),t.set("isUserBirthday",(0,a.cakedayBirthday)(e.model.get("date_of_birth")))}};e.default=t}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-anniversaries-today",["exports","I18n","discourse-common/utils/decorators"],function(e,t,a){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){return t.default.t("anniversaries.today.title",{date:moment().format(t.default.t("dates.full_no_year_no_time"))})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[a.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-anniversaries-tomorrow",["exports","I18n","discourse-common/utils/decorators"],function(e,t,a){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){return t.default.t("anniversaries.today.title",{date:moment().add(1,"day").format(t.default.t("dates.full_no_year_no_time"))})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[a.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-birthdays-tomorrow",["exports","I18n","discourse-common/utils/decorators"],function(e,t,a){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){return t.default.t("birthdays.today.title",{date:moment().add(1,"day").format(t.default.t("dates.full_no_year_no_time"))})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[a.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-birthdays-upcoming",["exports","I18n","discourse-common/utils/decorators"],function(e,a,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){var e=moment(),t=a.default.t("dates.full_no_year_no_time");return a.default.t("birthdays.upcoming.title",{start_date:e.add(2,"days").format(t),end_date:e.add(7,"days").format(t)})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[t.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-anniversaries-upcoming",["exports","I18n","discourse-common/utils/decorators"],function(e,a,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){var e=moment(),t=a.default.t("dates.full_no_year_no_time");return a.default.t("anniversaries.upcoming.title",{start_date:e.add(2,"days").format(t),end_date:e.add(7,"days").format(t)})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[t.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-birthdays-all",["exports","discourse-common/utils/decorators"],function(e,t){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,i,s,n,o,l,u=Ember.Controller.extend((a={queryParams:["month"],month:moment().month()+1,months:function(){return moment.months().map(function(e,t){return{name:e,value:t+1}})},actions:{loadMore:function(){this.get("model").loadMore()}}},r=a,i="months",s=[t.default],n=Object.getOwnPropertyDescriptor(a,"months"),o=a,l={},Object.keys(n).forEach(function(e){l[e]=n[e]}),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=s.slice().reverse().reduce(function(e,t){return t(r,i,e)||e},l),o&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(o):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(r,i,l),l=null),a));e.default=u}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-anniversaries-all",["exports","discourse-common/utils/decorators"],function(e,t){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,i,s,n,o,l,u=Ember.Controller.extend((a={queryParams:["month"],month:moment().month()+1,months:function(){return moment.months().map(function(e,t){return{name:e,value:t+1}})},actions:{loadMore:function(){this.get("model").loadMore()}}},r=a,i="months",s=[t.default],n=Object.getOwnPropertyDescriptor(a,"months"),o=a,l={},Object.keys(n).forEach(function(e){l[e]=n[e]}),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=s.slice().reverse().reduce(function(e,t){return t(r,i,e)||e},l),o&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(o):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(r,i,l),l=null),a));e.default=u}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday-birthdays-today",["exports","I18n","discourse-common/utils/decorators"],function(e,t,a){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s,n,o,l,u,d=Ember.Controller.extend((i=r={title:function(){return t.default.t("birthdays.today.title",{date:moment().format(t.default.t("dates.full_no_year_no_time"))})},actions:{loadMore:function(){this.get("model").loadMore()}}},s="title",n=[a.default],o=Object.getOwnPropertyDescriptor(r,"title"),l=r,u={},Object.keys(o).forEach(function(e){u[e]=o[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(e,t){return t(i,s,e)||e},u),l&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(l):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(i,s,u),u=null),r));e.default=d}),define("discourse/plugins/discourse-cakeday/discourse/controllers/cakeday",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Ember.Controller.extend({cakedayEnabled:Ember.computed.alias("siteSettings.cakeday_enabled"),cakedayBirthdayEnabled:Ember.computed.alias("siteSettings.cakeday_birthday_enabled")});e.default=t}),define("discourse/plugins/discourse-cakeday/discourse/lib/cakeday",["exports"],function(e){"use strict";function t(e,t){var a="YYYY",r=moment(),i=moment(e);return!(t&&t.anniversary&&r.format(a)<=i.format(a))&&(a="MMDD",r.format(a)===i.format(a))}function a(e,t){return t&&e.get("id")===t.get("id")}Object.defineProperty(e,"__esModule",{value:!0}),e.isSameDay=t,e.cakeday=function(e){if(Ember.isEmpty(e))return!1;return t(e,{anniversary:!0})},e.cakedayBirthday=function(e){if(Ember.isEmpty(e))return!1;return t(e)},e.cakedayTitle=function(e,t){return a(e,t)?"user.anniversary.user_title":"user.anniversary.title"},e.cakedayBirthdayTitle=function(e,t){return a(e,t)?"user.date_of_birth.user_title":"user.date_of_birth.title"}}),define("discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route",["exports","discourse/routes/discourse"],function(e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(t,a){return r.default.extend({model:function(e){return e.timezone_offset=(new Date).getTimezoneOffset(),a&&(e.filter=a),this.store.find(t,e)}})}}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries-today",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("anniversary","today");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries-index",["exports","discourse/routes/discourse"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.default.extend({beforeModel:function(){this.replaceWith("cakeday.anniversaries.today")}});e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries-tomorrow",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("anniversary","tomorrow");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays-tomorrow",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("birthday","tomorrow");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays-index",["exports","discourse/routes/discourse"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.default.extend({beforeModel:function(){this.replaceWith("cakeday.birthdays.today")}});e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays-upcoming",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("birthday","upcoming");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries-upcoming",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("anniversary","upcoming");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays-all",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("birthday").extend({queryParams:{month:{refreshModel:!0}},refreshQueryWithoutTransition:!0});e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries",["exports","I18n","discourse/routes/discourse"],function(e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a.default.extend({beforeModel:function(){this.siteSettings.cakeday_enabled||this.transitionTo("unknown",window.location.pathname.replace(/^\//,""))},titleToken:function(){return t.default.t("anniversaries.title")}});e.default=r}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-anniversaries-all",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("anniversary").extend({queryParams:{month:{refreshModel:!0}},refreshQueryWithoutTransition:!0});e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays-today",["exports","discourse/plugins/discourse-cakeday/discourse/routes/build-cakeday-route"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(e.default=void 0,t.default)("birthday","today");e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/routes/cakeday-birthdays",["exports","I18n","discourse/routes/discourse"],function(e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a.default.extend({beforeModel:function(){this.siteSettings.cakeday_birthday_enabled||this.transitionTo("unknown",window.location.pathname.replace(/^\//,""))},titleToken:function(){return t.default.t("birthdays.title")}});e.default=r}),define("discourse/plugins/discourse-cakeday/discourse/adapters/birthday",["exports","discourse/plugins/discourse-cakeday/discourse/adapters/cakeday"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.default;e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/adapters/anniversary",["exports","discourse/plugins/discourse-cakeday/discourse/adapters/cakeday"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.default;e.default=a}),define("discourse/plugins/discourse-cakeday/discourse/adapters/cakeday",["exports","discourse/adapters/rest"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.default.extend({basePath:function(){return"/cakeday/"}});e.default=a});
//# sourceMappingURL=https://sjc3.discourse-cdn.com/business7/assets/plugins/discourse-cakeday-63b85c9edc903fdb302bea820f059eba447af9485a966e6a697d5a3e52ef1d8b.js.map