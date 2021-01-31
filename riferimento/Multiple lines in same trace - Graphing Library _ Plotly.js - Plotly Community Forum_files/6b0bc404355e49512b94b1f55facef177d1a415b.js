(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(5, {"Custom_header_links":"Gallery, Gallery,https://dash-gallery.plotly.host/Portal/|Dash Docs, Dash Docs, https://dash.plotly.com,vdo,blank,remove|Show \u0026 Tell, Show \u0026 Tell, https://community.plotly.com/tag/show-and-tell,vdo|Announcements, Announcements, https://community.plotly.com/tag/announcements?ascending=false\u0026order=created,vdo","links_position":"right"});
  }
})();
define("discourse/initializers/discourse-custom-header-links", ["exports", "virtual-dom", "discourse/lib/plugin-api"], function (_exports, _virtualDom, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var __theme_name__ = "Custom Header Links";

  var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(5);

  var themePrefix = function themePrefix(key) {
    return "theme_translations.5.".concat(key);
  };

  var _default = {
    name: "discourse-custom-header-links",
    initialize: function initialize() {
      (0, _pluginApi.withPluginApi)("0.8.20", function (api) {
        var customHeaderLinks = settings.Custom_header_links;

        if (!customHeaderLinks.length) {
          return;
        }

        var linksPosition = settings.links_position === "right" ? "header-buttons:before" : "home-logo:after";
        var headerLinks = [];
        customHeaderLinks.split("|").filter(Boolean).map(function (customHeaderLinksArray) {
          var _customHeaderLinksArr = customHeaderLinksArray.split(",").filter(Boolean).map(function (x) {
            return x.trim();
          }),
              _customHeaderLinksArr2 = _slicedToArray(_customHeaderLinksArr, 6),
              linkText = _customHeaderLinksArr2[0],
              linkTitle = _customHeaderLinksArr2[1],
              linkHref = _customHeaderLinksArr2[2],
              device = _customHeaderLinksArr2[3],
              target = _customHeaderLinksArr2[4],
              keepOnScroll = _customHeaderLinksArr2[5];

          var deviceClass = ".".concat(device);
          var linkTarget = target === "self" ? "" : "_blank";
          var keepOnScrollClass = keepOnScroll === "keep" ? ".keep" : "";
          var linkClass = ".".concat(linkText.toLowerCase().replace(/\s/gi, "-"), "-custom-header-links");
          var anchorAttributes = {
            title: linkTitle,
            href: linkHref
          };

          if (linkTarget) {
            anchorAttributes.target = linkTarget;
          }

          headerLinks.push((0, _virtualDom.h)("li.headerLink".concat(deviceClass).concat(keepOnScrollClass).concat(linkClass), (0, _virtualDom.h)("a", anchorAttributes, linkText)));
        });
        api.decorateWidget(linksPosition, function (helper) {
          return helper.h("ul.custom-header-links", headerLinks);
        });
        api.decorateWidget("home-logo:after", function (helper) {
          var dHeader = document.querySelector(".d-header");

          if (!dHeader) {
            return;
          }

          var isTitleVisible = helper.attrs.minimized;

          if (isTitleVisible) {
            dHeader.classList.add("hide-menus");
          } else {
            dHeader.classList.remove("hide-menus");
          }
        });
      });
    }
  };
  _exports.default = _default;
});
