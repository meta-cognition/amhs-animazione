(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(3, {"theme_uploads":{"ad-go-pro-content-banner-01a":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/business7/uploads/plot/original/2X/b/bc5282902727bce76f092b1b61f69d597845d507.png"}});
  }
})();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-1009791370');


"use strict";
!function() {
 var t = window.driftt = window.drift = window.driftt || [];
 if (!t.init) {
   if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
   t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
   t.factory = function(e) {
     return function() {
       var n = Array.prototype.slice.call(arguments);
       return n.unshift(e), t.push(n), t;
     };
   }, t.methods.forEach(function(e) {
     t[e] = t.factory(e);
   }), t.load = function(t) {
     var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
     o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
     var i = document.getElementsByTagName("script")[0];
     i.parentNode.insertBefore(o, i);
   };
 }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('4t5t45cv8ey2');

