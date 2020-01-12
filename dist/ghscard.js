(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["ghscard"] = factory(require("jQuery"));
	else
		root["ghscard"] = factory(root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./src/card/base.ts":
/*!**************************!*\
  !*** ./src/card/base.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js"));
var AbstractCardGerator = (function () {
    function AbstractCardGerator(_doc, _cardData, _iframeWidth, _color, _emojiProcessor) {
        this._doc = _doc;
        this._cardData = _cardData;
        this._iframeWidth = _iframeWidth;
        this._color = _color;
        this._emojiProcessor = _emojiProcessor;
    }
    Object.defineProperty(AbstractCardGerator.prototype, "headerSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "htmlUrl", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "infoSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "popupSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "iframeWidth", {
        get: function () {
            return this._iframeWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCardGerator.prototype, "cardWidth", {
        get: function () {
            return this.iframeWidth - const_1.Margin.FRAME * 2;
        },
        enumerable: true,
        configurable: true
    });
    AbstractCardGerator.prototype.createCard = function (uniqueFrameNumber) {
        var cardFrame = this._doc.createElement("iframe");
        cardFrame.id = "__ghscard_iframe" + uniqueFrameNumber + "__";
        cardFrame.scrolling = "no";
        cardFrame.width = this.iframeWidth + "px";
        cardFrame.style.visibility = "hidden";
        cardFrame.style.border = "0px";
        var iframeBody = this._doc.createElement("body");
        iframeBody.appendChild(this.createCardElement());
        iframeBody.appendChild(this.createScriptElement());
        var html = this.createHeaderElement().outerHTML + iframeBody.outerHTML;
        cardFrame.srcdoc = html;
        return cardFrame;
    };
    AbstractCardGerator.prototype.isDisplayChart = function () {
        return false;
    };
    AbstractCardGerator.prototype.isDisplayCommitChart = function () {
        return false;
    };
    AbstractCardGerator.prototype.createCardElement = function () {
        var card = this.createElement("div", "ui " + this.getColor() + " card");
        card.id = const_1.CARD_ELEMENT_ID;
        card.style.margin = const_1.Margin.CARD_CONTENT + "px";
        card.appendChild(this.createCardContent());
        var extraCardContent = this.createExtraCardContent();
        if (extraCardContent !== null) {
            card.appendChild(extraCardContent);
        }
        return card;
    };
    AbstractCardGerator.prototype.getColor = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.getScript = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.createCardHeader = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.createCardContent = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.createExtraCardContent = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.createHeaderElement = function () {
        var header = this._doc.createElement("header");
        header.appendChild(this.createScriptSrcElement(const_1.JsUrl.JQUERY));
        header.appendChild(this.createStyleSheetLinkElement(this._doc, const_1.DEFAULT_SEMANTIC_UI_CSS_URL));
        header.appendChild(this.createScriptSrcElement(const_1.JsUrl.SEMANTIC_UI));
        if (this.isDisplayChart()) {
            header.appendChild(this.createScriptSrcElement(const_1.JsUrl.MOMENT));
            header.appendChild(this.createScriptSrcElement(const_1.JsUrl.CHART));
            header.appendChild(this.createScriptSrcElement(const_1.JsUrl.PLEASE));
        }
        header.appendChild(this.createCssElement(this._doc, ".ui.card { width: " + this.cardWidth + "px; }"));
        return header;
    };
    AbstractCardGerator.prototype.createCssElement = function (doc, cssText) {
        var css = doc.createElement("style");
        css.type = "text/css";
        css.appendChild(doc.createTextNode(cssText));
        return css;
    };
    AbstractCardGerator.prototype.createStyleSheetLinkElement = function (doc, href) {
        var link = doc.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        return link;
    };
    AbstractCardGerator.prototype.createElement = function (tagName, className) {
        var element = this._doc.createElement(tagName);
        element.className = className;
        return element;
    };
    AbstractCardGerator.prototype.createAnchorElement = function (href, className) {
        if (className === void 0) { className = null; }
        var element = this._doc.createElement("a");
        if (className) {
            element.className = className;
        }
        element.href = href;
        element.target = "__top";
        return element;
    };
    AbstractCardGerator.prototype.createImageElement = function (src, className) {
        if (className === void 0) { className = null; }
        var element = this._doc.createElement("img");
        if (className) {
            element.className = className;
        }
        element.src = src;
        return element;
    };
    AbstractCardGerator.prototype.createLabelElement = function (text, size) {
        var label = this.createElement("div", "ui circular horizontal " + size + " label");
        label.style.marginLeft = const_1.Margin.LABEL + "px";
        label.appendChild(this._doc.createTextNode(text));
        return label;
    };
    AbstractCardGerator.prototype.createElementWithChild = function (className, childNodeArray) {
        var element = this.createElement("div", className);
        Array.prototype.forEach.call(childNodeArray, function (childNode) {
            if (childNode) {
                element.appendChild(childNode);
            }
        });
        return element;
    };
    AbstractCardGerator.prototype.createContentElement = function (childNodeArray) {
        var content = this.createElement("div", "content");
        Array.prototype.forEach.call(childNodeArray, function (childNode) {
            if (childNode) {
                content.appendChild(childNode);
            }
        });
        return content;
    };
    AbstractCardGerator.prototype.createColumn = function (element, wide) {
        if (wide === void 0) { wide = ""; }
        var column = this.createElement("div", wide + " column");
        column.appendChild(element);
        return column;
    };
    AbstractCardGerator.prototype.createDescription = function (text) {
        if (!text) {
            return null;
        }
        var descElement = this.createElement("div", "description");
        descElement.innerHTML = this._emojiProcessor.processEmoji(this.escapeHtml(text));
        return descElement;
    };
    AbstractCardGerator.prototype.createDateTimeElement = function (key, prefix, iconName, className) {
        var datetime_value = this._cardData[key];
        if (!datetime_value) {
            return null;
        }
        var datetimeElement = this.createElement("div", className);
        datetimeElement.appendChild(this.createElement("i", iconName));
        datetimeElement.appendChild(this.createContentElement([
            this._doc.createTextNode(prefix + " " + dayjs_1.default(datetime_value).format("YYYY-MM-DD")),
        ]));
        return datetimeElement;
    };
    AbstractCardGerator.prototype.createPopup = function () {
        var popup = this.createElement("div", "ui special popup");
        popup.appendChild(this.createPopupInfoList());
        return popup;
    };
    AbstractCardGerator.prototype.createPopupInfoList = function () {
        throw Error("not implemented");
    };
    AbstractCardGerator.prototype.createScriptElement = function () {
        var scriptContent = ["$(window).on(\"load\", function() {", this.getScript(), "});"].join("\n");
        var scriptElement = this._doc.createElement("script");
        scriptElement.innerHTML = scriptContent;
        return scriptElement;
    };
    AbstractCardGerator.prototype.createScriptSrcElement = function (src, charset) {
        if (charset === void 0) { charset = null; }
        var script = this._doc.createElement("script");
        script.src = src;
        if (charset) {
            script.charset = charset;
        }
        return script;
    };
    AbstractCardGerator.prototype._createEmailElement = function (emailAddress, className) {
        if (!emailAddress) {
            return null;
        }
        var mailLink = this.createAnchorElement("mailto:" + emailAddress, "content");
        mailLink.appendChild(this._doc.createTextNode(this.escapeHtml(emailAddress)));
        var email = this.createElement("div", className);
        email.title = "email address";
        email.appendChild(this.createElement("i", "mail icon"));
        email.appendChild(mailLink);
        return email;
    };
    AbstractCardGerator.prototype.escapeHtml = function (text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };
    AbstractCardGerator.prototype.toUiColor = function (color) {
        var validColorArray = [
            "red",
            "orange",
            "yellow",
            "olive",
            "green",
            "teal",
            "blue",
            "violet",
            "purple",
            "pink",
            "brown",
            "grey",
            "black",
        ];
        var defaultColor = "grey";
        if (color == null) {
            return defaultColor;
        }
        color = color.toLowerCase();
        if (validColorArray.indexOf(color) >= 0) {
            return validColorArray[color];
        }
        console.warn("unexpected color: (" + color + ")");
        return defaultColor;
    };
    return AbstractCardGerator;
}());
exports.AbstractCardGerator = AbstractCardGerator;


/***/ }),

/***/ "./src/card/base_user_org.ts":
/*!***********************************!*\
  !*** ./src/card/base_user_org.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var base_1 = __webpack_require__(/*! ./base */ "./src/card/base.ts");
var AbstractUserOrgCardGerator = (function (_super) {
    __extends(AbstractUserOrgCardGerator, _super);
    function AbstractUserOrgCardGerator(doc, cardData, iframeWidth, color, emojiProcessor) {
        return _super.call(this, doc, cardData, iframeWidth, color, emojiProcessor) || this;
    }
    Object.defineProperty(AbstractUserOrgCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserOrgCardGerator.prototype, "statsColumnWide", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserOrgCardGerator.prototype, "htmlUrl", {
        get: function () {
            return this.getCardData("html_url");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserOrgCardGerator.prototype, "publicRepos", {
        get: function () {
            return this.getCardData("public_repos");
        },
        enumerable: true,
        configurable: true
    });
    AbstractUserOrgCardGerator.prototype.createStatisticsElement = function () {
        throw Error("not implemented");
    };
    AbstractUserOrgCardGerator.prototype.getCardData = function (key) {
        return this._cardData[key];
    };
    AbstractUserOrgCardGerator.prototype.getScript = function () {
        return [
            "$('#" + const_1.AVATAR_ELEMENT_ID + ".ui.image').popup({",
            "  on: 'hover',",
            "  inline: true",
            "});",
            "$('.ui.images .image').popup();",
        ].join("\n");
    };
    AbstractUserOrgCardGerator.prototype.getColor = function () {
        return this.toUiColor(this.color);
    };
    AbstractUserOrgCardGerator.prototype.createCardContent = function () {
        return this._createCardContent();
    };
    AbstractUserOrgCardGerator.prototype._createCardContent = function () {
        var segmentClassName = "ui vertical basic compact segment";
        var content = this.createContentElement([this.createCardHeader()]);
        {
            var grid = this.createElement("div", "ui grid");
            {
                var avatarColumn = this.createElement("div", this.avatarColumnWide + " wide center aligned column");
                avatarColumn.appendChild(this.createAvatar());
                avatarColumn.appendChild(this.createPopup());
                grid.appendChild(avatarColumn);
            }
            {
                var statsColumn = this.createElement("div", this.statsColumnWide + " wide left aligned column");
                var statsElement = this.createStatisticsElement();
                if (statsElement) {
                    statsColumn.appendChild(statsElement);
                }
                grid.appendChild(statsColumn);
            }
            content.appendChild(this.createElementWithChild(segmentClassName, [grid]));
        }
        {
            var descriptionElement = this.createDescription(this.getCardData("description"));
            if (descriptionElement) {
                content.appendChild(this.createElementWithChild(segmentClassName, [descriptionElement]));
            }
        }
        {
            var userInfoList = this.createUserInfoList();
            if (userInfoList) {
                content.appendChild(this.createElementWithChild(segmentClassName, [userInfoList]));
            }
        }
        return content;
    };
    AbstractUserOrgCardGerator.prototype._createCardContentTiny = function () {
        var segment_style = "ui vertical basic compact segment";
        var content = this.createContentElement([this.createCardHeader()]);
        {
            var grid = this.createElement("div", "ui grid");
            {
                var avatarColumn = this.createElement("div", this.avatarColumnWide + " wide center aligned column");
                avatarColumn.appendChild(this.createAvatar());
                avatarColumn.appendChild(this.createPopup());
                grid.appendChild(avatarColumn);
            }
            {
                var userInfoColumn = this.createElement("div", "nine wide left aligned column");
                userInfoColumn.appendChild(this.createUserInfoList());
                grid.appendChild(userInfoColumn);
            }
            var segment = this.createElement("div", segment_style);
            segment.appendChild(grid);
            content.appendChild(segment);
        }
        {
            var bioElement = this.createDescription(this.getCardData("description"));
            if (bioElement) {
                var segment = this.createElement("div", segment_style);
                segment.appendChild(bioElement);
                content.appendChild(segment);
            }
        }
        return content;
    };
    AbstractUserOrgCardGerator.prototype.createExtraCardContent = function () {
        return null;
    };
    AbstractUserOrgCardGerator.prototype.createAvatar = function () {
        var avatar = this.createImageElement(this.getCardData("avatar_url"), "ui medium rounded image");
        avatar.id = const_1.AVATAR_ELEMENT_ID;
        return avatar;
    };
    AbstractUserOrgCardGerator.prototype.createPopupInfoList = function () {
        return this._createInfoList({
            created_at: true,
            updated_at: true,
        }, this.popupSize);
    };
    AbstractUserOrgCardGerator.prototype.createCompanyElement = function (className) {
        var companyName = this.getCardData("company");
        if (!companyName) {
            return null;
        }
        var company = this.createElement("div", className);
        company.title = "Company";
        company.appendChild(this.createElement("i", "users icon"));
        company.appendChild(this.createContentElement([this._doc.createTextNode(this.escapeHtml(companyName))]));
        return company;
    };
    AbstractUserOrgCardGerator.prototype.createLocationElement = function (className) {
        var locationName = this.getCardData("location");
        if (!locationName) {
            return null;
        }
        var location = this.createElement("div", className);
        location.title = "Location";
        location.appendChild(this.createElement("i", "marker icon"));
        location.appendChild(this.createContentElement([this._doc.createTextNode(this.escapeHtml(locationName))]));
        return location;
    };
    AbstractUserOrgCardGerator.prototype.createBlogElement = function (className) {
        var url = this.getCardData("blog");
        if (!url) {
            return null;
        }
        var blogLink = this.createAnchorElement(url, "content");
        blogLink.appendChild(this._doc.createTextNode(this.escapeHtml(url)));
        return this.createElementWithChild(className, [
            this.createElement("i", "linkify icon"),
            blogLink,
        ]);
    };
    AbstractUserOrgCardGerator.prototype.createEmailElement = function (className) {
        return _super.prototype._createEmailElement.call(this, this.getCardData("email"), className);
    };
    AbstractUserOrgCardGerator.prototype._createInfoList = function (displayMapping, size) {
        if (size === void 0) { size = null; }
        if (size === null) {
            size = this.infoSize;
        }
        var itemClassName = "item";
        var infoList = this.createElement("div", "ui " + size + " list");
        if (displayMapping["company"]) {
            var element = this.createCompanyElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["location"]) {
            var element = this.createLocationElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["email"]) {
            var element = this.createEmailElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["blog"]) {
            var element = this.createBlogElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["created_at"]) {
            infoList.appendChild(this.createDateTimeElement("created_at", "Joined on", "wait icon", itemClassName));
        }
        if (displayMapping["updated_at"]) {
            infoList.appendChild(this.createDateTimeElement("updated_at", "Updated at", "history icon", itemClassName));
        }
        if (infoList.children.length === 0) {
            infoList.appendChild(this.createDateTimeElement("created_at", "Joined on", "wait icon", itemClassName));
        }
        return infoList;
    };
    AbstractUserOrgCardGerator.prototype.createUserInfoList = function () {
        return this._createInfoList({
            company: true,
            location: true,
            email: true,
            blog: true,
        });
    };
    return AbstractUserOrgCardGerator;
}(base_1.AbstractCardGerator));
exports.AbstractUserOrgCardGerator = AbstractUserOrgCardGerator;


/***/ }),

/***/ "./src/card/organization/base_organization.ts":
/*!****************************************************!*\
  !*** ./src/card/organization/base_organization.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_user_org_1 = __webpack_require__(/*! ../base_user_org */ "./src/card/base_user_org.ts");
var AbstractOrgCardGerator = (function (_super) {
    __extends(AbstractOrgCardGerator, _super);
    function AbstractOrgCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractOrgCardGerator.prototype, "statsColumnWide", {
        get: function () {
            return "eight";
        },
        enumerable: true,
        configurable: true
    });
    AbstractOrgCardGerator.prototype.createCardHeader = function () {
        var header = this.createAnchorElement(this.htmlUrl, "ui " + this.headerSize + " dividing header");
        if (this.getCardData("name")) {
            header.appendChild(this._doc.createTextNode(this.getCardData("name")));
            var subheader = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(this.getCardData("id")));
            header.appendChild(subheader);
        }
        else {
            header.appendChild(this._doc.createTextNode(this.getCardData("id")));
        }
        return header;
    };
    AbstractOrgCardGerator.prototype.createStatisticsElement = function () {
        var items = this.createElement("div", "ui " + this.infoSize + " aligned selection list");
        if (Number(this.publicRepos) > 0) {
            var item = this.createAnchorElement(this.htmlUrl + "?tab=repositories", "item");
            item.appendChild(this._doc.createTextNode("Repositories"));
            item.appendChild(this.createLabelElement(this.publicRepos, this.infoSize));
            items.appendChild(item);
        }
        if (Number(this.getCardData("public_members_count")) > 0) {
            var item = this.createAnchorElement("//github.com/orgs/" + this.getCardData("id") + "/people", "item");
            item.appendChild(this._doc.createTextNode("People"));
            item.appendChild(this.createLabelElement(this.getCardData("public_members_count"), this.infoSize));
            items.appendChild(item);
        }
        return items;
    };
    return AbstractOrgCardGerator;
}(base_user_org_1.AbstractUserOrgCardGerator));
exports.AbstractOrgCardGerator = AbstractOrgCardGerator;


/***/ }),

/***/ "./src/card/organization/medium.ts":
/*!*****************************************!*\
  !*** ./src/card/organization/medium.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_organization_1 = __webpack_require__(/*! ./base_organization */ "./src/card/organization/base_organization.ts");
var MediumOrgCardGerator = (function (_super) {
    __extends(MediumOrgCardGerator, _super);
    function MediumOrgCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediumOrgCardGerator.prototype, "headerSize", {
        get: function () {
            return "large";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumOrgCardGerator.prototype, "infoSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumOrgCardGerator.prototype, "popupSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumOrgCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "eight";
        },
        enumerable: true,
        configurable: true
    });
    return MediumOrgCardGerator;
}(base_organization_1.AbstractOrgCardGerator));
exports.MediumOrgCardGerator = MediumOrgCardGerator;


/***/ }),

/***/ "./src/card/organization/small.ts":
/*!****************************************!*\
  !*** ./src/card/organization/small.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_organization_1 = __webpack_require__(/*! ./base_organization */ "./src/card/organization/base_organization.ts");
var SmallOrgCardGerator = (function (_super) {
    __extends(SmallOrgCardGerator, _super);
    function SmallOrgCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SmallOrgCardGerator.prototype, "headerSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallOrgCardGerator.prototype, "infoSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallOrgCardGerator.prototype, "popupSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallOrgCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "six";
        },
        enumerable: true,
        configurable: true
    });
    return SmallOrgCardGerator;
}(base_organization_1.AbstractOrgCardGerator));
exports.SmallOrgCardGerator = SmallOrgCardGerator;


/***/ }),

/***/ "./src/card/organization/tiny.ts":
/*!***************************************!*\
  !*** ./src/card/organization/tiny.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_organization_1 = __webpack_require__(/*! ./base_organization */ "./src/card/organization/base_organization.ts");
var TinyOrgCardGerator = (function (_super) {
    __extends(TinyOrgCardGerator, _super);
    function TinyOrgCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TinyOrgCardGerator.prototype, "headerSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyOrgCardGerator.prototype, "infoSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyOrgCardGerator.prototype, "popupSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyOrgCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "four";
        },
        enumerable: true,
        configurable: true
    });
    TinyOrgCardGerator.prototype.createPopupInfoList = function () {
        return this._createInfoList({
            email: true,
            blog: true,
            created_at: true,
            updated_at: true,
        }, this.popupSize);
    };
    TinyOrgCardGerator.prototype.createCardContent = function () {
        return this._createCardContentTiny();
    };
    return TinyOrgCardGerator;
}(base_organization_1.AbstractOrgCardGerator));
exports.TinyOrgCardGerator = TinyOrgCardGerator;


/***/ }),

/***/ "./src/card/repository/base_repository.ts":
/*!************************************************!*\
  !*** ./src/card/repository/base_repository.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var base_1 = __webpack_require__(/*! ../base */ "./src/card/base.ts");
var dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js"));
var CanvasId;
(function (CanvasId) {
    CanvasId.COMMITS_CHART = "__commits_chart_canvas__";
    CanvasId.ISSUES_CHART = "__issues_chart_canvas__";
    CanvasId.LANGUAGES_CHART = "__language_chart_canvas__";
})(CanvasId || (CanvasId = {}));
var AbstractRepositoryCardGerator = (function (_super) {
    __extends(AbstractRepositoryCardGerator, _super);
    function AbstractRepositoryCardGerator(doc, cardData, iframeWidth, color, chartDisplay, topicDisplay, emojiProcessor) {
        var _this = _super.call(this, doc, cardData, iframeWidth, color, emojiProcessor) || this;
        _this.chartDisplay = chartDisplay;
        _this.topicDisplay = topicDisplay;
        _this.colorMap = {
            a: "red",
            b: "orange",
            c: "yellow",
            d: "olive",
            e: "green",
            f: "teal",
            g: "blue",
            h: "violet",
            i: "purple",
            j: "pink",
            k: "brown",
            l: "grey",
            m: "black",
            n: "red",
            o: "orange",
            p: "yellow",
            q: "olive",
            r: "green",
            s: "teal",
            t: "blue",
            u: "violet",
            v: "purple",
            w: "pink",
            x: "brown",
            y: "grey",
            z: "black",
        };
        _this.colorMap["C"] = "black";
        _this.colorMap["C++"] = "pink";
        _this.colorMap["Go"] = "teal";
        _this.colorMap["HTML"] = "red";
        _this.colorMap["Java"] = "brown";
        _this.colorMap["Swift"] = "orange";
        _this.colorMap["JavaScript"] = "yellow";
        _this.colorMap["Python"] = "blue";
        _this.colorMap["Ruby"] = "purple";
        _this.colorMap["Shell"] = "green";
        return _this;
    }
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "versionLabelSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "topicSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "htmlUrl", {
        get: function () {
            return this.getCardData("html_url");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "language", {
        get: function () {
            return this.getCardData("language");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "lineChartHeight", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "pieChartHeight", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "pieChartLegendFontSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "chartTitleFontSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "chartTickFontSize", {
        get: function () {
            throw Error("not implemented");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRepositoryCardGerator.prototype, "releaseTagColor", {
        get: function () {
            return "blue";
        },
        enumerable: true,
        configurable: true
    });
    AbstractRepositoryCardGerator.prototype.isDisplayChart = function () {
        if (this.chartDisplay === "none") {
            return false;
        }
        return true;
    };
    AbstractRepositoryCardGerator.prototype.isDisplayCommitChart = function () {
        return this.isDisplayChart() && Number(this.getCardData("commits_last_year")) > 0;
    };
    AbstractRepositoryCardGerator.prototype.isDisplayTopic = function () {
        if (this.topicDisplay === "none") {
            return false;
        }
        if (this.getCardData("topics") == null) {
            return false;
        }
        return this.getCardData("topics").length > 0;
    };
    AbstractRepositoryCardGerator.prototype.getScript = function () {
        var popupScript = [
            "$('#" + const_1.AVATAR_ELEMENT_ID + ".ui.image').popup({",
            "on: 'hover',",
            "inline: true,",
            "});",
        ].join("\n");
        var scriptArray = [popupScript];
        if (this.isDisplayChart()) {
            scriptArray.push("$('.ui.accordion').accordion();");
            scriptArray.push(this.getGlobalChartOption());
            scriptArray.push(this.createIssuesLabeChartScript());
            scriptArray.push(this.createLanguageLabeChartScript());
            if (this.isDisplayCommitChart()) {
                scriptArray.push(this.createCommitChartScript());
            }
        }
        return scriptArray.join("\n");
    };
    AbstractRepositoryCardGerator.prototype.getGlobalChartOption = function () {
        return "Chart.defaults.global.defaultFontSize = 10;";
    };
    AbstractRepositoryCardGerator.prototype.getPieChartOption = function () {
        return {
            responsive: false,
            legend: {
                position: "right",
                labels: {
                    fontSize: this.pieChartLegendFontSize,
                },
            },
        };
    };
    AbstractRepositoryCardGerator.prototype.createIssuesLabeChartScript = function () {
        var issuesLabelArray = [];
        if (this.getCardData("has_issues")) {
            for (var _i = 0, _a = this.getCardData("open_issues")["labels"]; _i < _a.length; _i++) {
                var issueLabel = _a[_i];
                issuesLabelArray.push("'" + issueLabel + "'");
            }
        }
        return "\nvar issuesCanvas = document.getElementById('" + CanvasId.ISSUES_CHART + "');\nif (issuesCanvas) {\n    issuesCanvas.width = " + this.getChartWidth() + ";\n    let myPieChart = new Chart(issuesCanvas, {\n        type: 'pie',\n        data: {\n            labels: [" + issuesLabelArray.join(", ") + "],\n            datasets: [{\n                data: [" + this.getCardData("open_issues")["data"] + "],\n                backgroundColor: Please.make_color({\n                    colors_returned: " + this.getCardData("open_issues_count") + ",\n                }),\n            }]\n        },\n        options: " + JSON.stringify(this.getPieChartOption()) + ",\n    });\n}";
    };
    AbstractRepositoryCardGerator.prototype.createLanguageLabeChartScript = function () {
        var languageLabelArray = [];
        for (var _i = 0, _a = this.getCardData("languages")["labels"]; _i < _a.length; _i++) {
            var languageLabel = _a[_i];
            languageLabelArray.push("'" + languageLabel + "'");
        }
        return "\nvar languageCanvas = document.getElementById('" + CanvasId.LANGUAGES_CHART + "');\n\nif (languageCanvas) {\n    languageCanvas.width = " + this.getChartWidth() + ";\n    let myPieChart = new Chart(languageCanvas, {\n        type: 'pie',\n        data: {\n            labels: [" + languageLabelArray.join(", ") + "],\n            datasets: [{\n                data: [" + this.getCardData("languages")["data"] + "],\n                backgroundColor: Please.make_color({\n                    colors_returned: " + this.getCardData("languages")["labels"].length + ",\n                }),\n            }]\n        },\n        options: " + JSON.stringify(this.getPieChartOption()) + ",\n    });\n}\n";
    };
    AbstractRepositoryCardGerator.prototype.createCommitChartScript = function () {
        var fetchDate = dayjs_1.default(this.getCardData("fetched_at"));
        var dateArray = [];
        for (var i = 0; i < 52; i++) {
            console.log(fetchDate.format("YYYY-MM-DD"));
            dateArray.push("moment('" + fetchDate.format("YYYY-MM-DD") + "').toDate()");
            fetchDate = fetchDate.subtract(1, "week");
        }
        dateArray.reverse();
        var script = "\nvar commitsCanvas = document.getElementById('" + CanvasId.COMMITS_CHART + "');\nif (commitsCanvas) {\n    commitsCanvas.width = " + this.getChartWidth() + ";\n    var commitsChart = new Chart(commitsCanvas, {\n        type: 'line',\n        data: {\n            labels: [" + dateArray.join(", ") + "],\n            datasets: [{\n                label: 'Commits',\n                data: [" + this.getCardData("participation") + "],\n                fill: true,\n                backgroundColor: 'rgba(136, 211, 161, 0.9)',\n                borderWidth: 0,\n                pointRadius: 0.5,\n                pointHitRadius: 8,\n                showLine: true,\n            }]\n        },\n        options: {\n            responsive: false,\n            title: {\n                display: true,\n                fontSize: " + this.chartTitleFontSize + ",\n                text: '" + this.getCardData("commits_last_year") + " commits in the last year'\n            },\n            legend: { display: false },\n            scales:{\n                xAxes: [{\n                    type: 'time',\n                    time: { parser: 'MM/YYYY', tooltipFormat: 'YYYY wo [week]' },\n                    gridLines: { display: false },\n                    ticks: { minRotation: 25, fontSize: " + this.chartTickFontSize + " },\n                }],\n                yAxes: [{\n                    ticks: { min: 0 },\n                    scaleLabel: { display: true, labelString: 'Commits' },\n                }],\n            },\n        }\n    });\n}";
        return script;
    };
    AbstractRepositoryCardGerator.prototype.createCardHeader = function () {
        var header = this.createElement("div", "ui dividing " + this.headerSize + " header");
        header.appendChild(this.createOwnerAvatar());
        header.appendChild(this.createPopup());
        var subheaderText = this.getCardData("owner_name");
        if (subheaderText == null) {
            subheaderText = this.getCardData("organization")["name"];
        }
        if (subheaderText != null) {
            var subheader = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(subheaderText));
            header.appendChild(this.createContentElement([this.createRepositoryName(), subheader]));
        }
        var latest_tag = this.getCardData("latest_tag");
        if (typeof latest_tag === "string" && latest_tag) {
            header.appendChild(this.createTagLabel());
        }
        return header;
    };
    AbstractRepositoryCardGerator.prototype.getChartWidth = function () {
        var marginWidth = 32;
        var cardWidth = this.cardWidth;
        var chartWidth = cardWidth - marginWidth;
        return chartWidth > marginWidth ? chartWidth : cardWidth;
    };
    AbstractRepositoryCardGerator.prototype.getCardData = function (key) {
        return this._cardData[key];
    };
    AbstractRepositoryCardGerator.prototype.getColor = function () {
        if (this.color != null) {
            return this.toUiColor(this.color);
        }
        var defaultColor = "grey";
        if (this.language == null) {
            return defaultColor;
        }
        var color = this.colorMap[this.language];
        if (typeof color !== "undefined") {
            return color;
        }
        color = this.colorMap[this.language.charAt(0).toLowerCase()];
        if (typeof color !== "undefined") {
            return color;
        }
        return defaultColor;
    };
    AbstractRepositoryCardGerator.prototype.getDescription = function () {
        var text = this.getCardData("description");
        if (text == null) {
            return "no description";
        }
        return text;
    };
    AbstractRepositoryCardGerator.prototype.createCardContent = function () {
        var segmentClassName = "ui vertical basic compact segment";
        var childArray = [
            this.createCardHeader(),
            this.createElementWithChild(segmentClassName, [
                this.createDescription(this.getDescription()),
            ]),
        ];
        {
            var infoArray = [];
            var cardInfoList = this.createCardInfoList();
            if (cardInfoList) {
                infoArray.push(cardInfoList);
            }
            var detailInfoList = this.createDetailInfoList();
            if (detailInfoList) {
                infoArray.push(detailInfoList);
            }
            if (infoArray.length > 0) {
                childArray.push(this.createElementWithChild(segmentClassName, infoArray));
            }
        }
        if (this.isDisplayCommitChart()) {
            childArray.push(this.createElementWithChild(segmentClassName, [this.createCommitChart()]));
        }
        if (this.isDisplayTopic()) {
            var topicsLabelList = [];
            for (var _i = 0, _a = this.getCardData("topics"); _i < _a.length; _i++) {
                var labelText = _a[_i];
                topicsLabelList.push(this.createTopicLabelElement(labelText, this.topicSize));
            }
            if (topicsLabelList.length > 0) {
                childArray.push(this.createElementWithChild(segmentClassName, topicsLabelList));
            }
        }
        return this.createContentElement(childArray);
    };
    AbstractRepositoryCardGerator.prototype.createCommitChart = function () {
        var canvas = this._doc.createElement("canvas");
        canvas.id = CanvasId.COMMITS_CHART;
        canvas.height = this.lineChartHeight;
        return canvas;
    };
    AbstractRepositoryCardGerator.prototype.createExtraCardContent = function () {
        var grid = this.createElement("div", "ui equal width center middle aligned grid");
        var languageLabel = this.createLanguageLabel();
        if (languageLabel) {
            grid.appendChild(this.createColumn(languageLabel, "six wide"));
        }
        grid.appendChild(this.createColumn(this.createStars()));
        grid.appendChild(this.createColumn(this.createForks()));
        var extraContent = this.createElement("div", "extra content");
        extraContent.appendChild(grid);
        return extraContent;
    };
    AbstractRepositoryCardGerator.prototype.createPopupInfoList = function () {
        var displayMapping = {
            subscribers_count: true,
            open_issues_count: true,
            branches_count: true,
            contributors_count: true,
            created_at: true,
            updated_at: true,
        };
        return this._createInfoList(displayMapping, this.popupSize);
    };
    AbstractRepositoryCardGerator.prototype.createCardInfoList = function () {
        var displayMapping = {
            repo_homepage: true,
            wiki: true,
            pulls_count: true,
            license: true,
        };
        if (!this.isDisplayChart()) {
            displayMapping["open_issues_count"] = true;
        }
        return this._createInfoList(displayMapping, this.infoSize);
    };
    AbstractRepositoryCardGerator.prototype.createDetailInfoList = function () {
        if (!this.isDisplayChart()) {
            return null;
        }
        var accordion = this.createElement("div", "ui accordion");
        if (this.getCardData("open_issues_count")) {
            var title = this.createElementWithChild("title", [
                this.createElement("i", "dropdown icon"),
                this._doc.createTextNode("Open issues"),
                this.createLabelElement(String(this.getCardData("open_issues_count")), this.infoSize),
            ]);
            accordion.appendChild(title);
            var canvas = this._doc.createElement("canvas");
            canvas.id = CanvasId.ISSUES_CHART;
            canvas.height = this.pieChartHeight;
            accordion.appendChild(this.createContentElement([canvas]));
        }
        if (Number(this.getCardData("languages_count")) > 1) {
            var title = this.createElementWithChild("title", [
                this.createElement("i", "dropdown icon"),
                this._doc.createTextNode("Languages"),
                this.createLabelElement(String(this.getCardData("languages_count")), this.infoSize),
            ]);
            accordion.appendChild(title);
            var canvas = this._doc.createElement("canvas");
            canvas.id = CanvasId.LANGUAGES_CHART;
            canvas.height = this.pieChartHeight;
            accordion.appendChild(this.createContentElement([canvas]));
        }
        if (accordion.children.length === 0) {
            return null;
        }
        return accordion;
    };
    AbstractRepositoryCardGerator.prototype._createInfoList = function (displayMapping, size) {
        if (size === void 0) { size = null; }
        if (size === null) {
            size = this.infoSize;
        }
        var itemClassName = "item";
        var infoList = this.createElement("div", "ui " + size + " list");
        if (displayMapping["repo_homepage"]) {
            var element = this.createHomepageElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["wiki"]) {
            var element = this.createWikiElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["subscribers_count"] &&
            Number(this.getCardData("subscribers_count")) > 0) {
            var element = this.createWatchersElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["open_issues_count"] &&
            Number(this.getCardData("open_issues_count")) > 0) {
            var element = this.createIssuesElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["pulls_count"] && Number(this.getCardData("pulls_count")) > 0) {
            var element = this.createPullsElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["branches_count"] && Number(this.getCardData("branches_count")) > 0) {
            var element = this.createBranchElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["contributors_count"] &&
            Number(this.getCardData("contributors_count")) > 0) {
            var element = this.createContributorsElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["license"]) {
            var element = this.createLicenseElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }
        if (displayMapping["created_at"]) {
            infoList.appendChild(this.createDateTimeElement("created_at", "Created at", "wait icon", itemClassName));
        }
        if (displayMapping["updated_at"]) {
            infoList.appendChild(this.createDateTimeElement("updated_at", "Updated at", "history icon", itemClassName));
        }
        if (infoList.children.length === 0) {
            infoList.appendChild(this.createDateTimeElement("created_at", "Created at", "wait icon", "item"));
        }
        return infoList;
    };
    AbstractRepositoryCardGerator.prototype.createTopicLabelElement = function (topic, size) {
        var label = this.createAnchorElement("//github.com/search?q=topic%3A" + topic + "&type=Repositories", "ui blue horizontal basic " + size + " label");
        label.appendChild(this._doc.createTextNode(topic));
        label.title = "topic: " + topic;
        return label;
    };
    AbstractRepositoryCardGerator.prototype.createHomepageElement = function (className) {
        var homepageUrl = this.getCardData("repo_homepage");
        if (homepageUrl == null) {
            console.debug("homepage not found in " + this.htmlUrl);
            return null;
        }
        var linkElement = this.createAnchorElement(homepageUrl, "content");
        linkElement.title = "Repository homepage";
        linkElement.appendChild(this._doc.createTextNode(this.escapeHtml(linkElement.hostname)));
        return this.createElementWithChild(className, [
            this.createElement("i", "home icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createWikiElement = function (className) {
        if (!this.getCardData("has_wiki")) {
            console.debug("wiki not found in " + this.htmlUrl);
            return null;
        }
        var linkElement = this.createAnchorElement(this.htmlUrl + "/wiki", "content");
        linkElement.title = "Repository wiki";
        linkElement.appendChild(this._doc.createTextNode("Wiki"));
        return this.createElementWithChild(className, [
            this.createElement("i", "book icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createWatchersElement = function (className) {
        var linkElement = this.createAnchorElement(this.htmlUrl + "/watchers", "content");
        linkElement.appendChild(this._doc.createTextNode("Watchers"));
        linkElement.appendChild(this.createLabelElement(String(this.getCardData("subscribers_count")), this.infoSize));
        return this.createElementWithChild(className, [
            this.createElement("i", "unhide icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createIssuesElement = function (className) {
        var linkElement = this.createAnchorElement(this.htmlUrl + "/issues", "content");
        linkElement.appendChild(this._doc.createTextNode("Issues"));
        linkElement.appendChild(this.createLabelElement(String(this.getCardData("open_issues_count")), this.infoSize));
        return this.createElementWithChild(className, [
            this.createElement("i", "warning circle icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createPullsElement = function (className) {
        var linkElement = this.createAnchorElement(this.htmlUrl + "/pulls", "content");
        linkElement.appendChild(this._doc.createTextNode("Pull requests"));
        linkElement.appendChild(this.createLabelElement(String(this.getCardData("pulls_count")), this.infoSize));
        return this.createElementWithChild(className, [
            this.createElement("i", "sign in icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createBranchElement = function (className) {
        var linkElement = this.createAnchorElement(this.htmlUrl + "/branches", "content");
        linkElement.appendChild(this._doc.createTextNode("Branches"));
        linkElement.appendChild(this.createLabelElement(String(this.getCardData("branches_count")), this.infoSize));
        return this.createElementWithChild(className, [
            this.createElement("i", "fork icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createContributorsElement = function (className) {
        var linkElement = this.createAnchorElement(this.htmlUrl + "/graphs/contributors", "content");
        linkElement.appendChild(this._doc.createTextNode("Contributors"));
        linkElement.appendChild(this.createLabelElement(String(this.getCardData("contributors_count")), this.infoSize));
        return this.createElementWithChild(className, [
            this.createElement("i", "users icon"),
            linkElement,
        ]);
    };
    AbstractRepositoryCardGerator.prototype.createLicenseElement = function (className) {
        var licenseData = this.getCardData("license");
        if (licenseData == null || licenseData["spdx_id"] == null) {
            return null;
        }
        var licenseElement = this.createElement("div", className);
        licenseElement.appendChild(this.createElement("i", "law icon"));
        licenseElement.appendChild(this.createContentElement([this._doc.createTextNode(licenseData["spdx_id"])]));
        licenseElement.title = licenseData["name"];
        return licenseElement;
    };
    AbstractRepositoryCardGerator.prototype.createRepositoryName = function () {
        var repoLink;
        if (this.htmlUrl) {
            repoLink = this.createAnchorElement(this.htmlUrl);
        }
        else {
            repoLink = this._doc.createElement("div");
        }
        repoLink.appendChild(this._doc.createTextNode(this.getCardData("name")));
        return repoLink;
    };
    AbstractRepositoryCardGerator.prototype.createOwnerAvatar = function () {
        var avatar = this.createImageElement(this.getCardData("avatar_url"), "ui avatar image");
        avatar.id = const_1.AVATAR_ELEMENT_ID;
        return avatar;
    };
    AbstractRepositoryCardGerator.prototype.createTagLabel = function () {
        var tagLabel = this.createAnchorElement(this.htmlUrl + "/releases", "ui " + this.releaseTagColor + " " + this.versionLabelSize + " label");
        tagLabel.title = "Latest tag";
        tagLabel.appendChild(this._doc.createTextNode(this.getCardData("latest_tag")));
        tagLabel.setAttribute("data-tooltip", this.getCardData("tags_count") + " releases");
        tagLabel.setAttribute("data-inverted", "");
        tagLabel.setAttribute("data-position", "bottom center");
        return tagLabel;
    };
    AbstractRepositoryCardGerator.prototype.createLanguageLabel = function () {
        if (!this.language) {
            return null;
        }
        var languageElement = this.createElement("div", "ui " + this.getColor() + " label");
        languageElement.title = "Language";
        languageElement.appendChild(this._doc.createTextNode(this.language));
        return languageElement;
    };
    AbstractRepositoryCardGerator.prototype.createStars = function () {
        var icon = this.createElement("i", "star black icon");
        icon.title = "Stargazers";
        var stargazersLink;
        if (this.htmlUrl) {
            stargazersLink = this.createAnchorElement(this.htmlUrl + "/stargazers");
        }
        else {
            stargazersLink = this._doc.createElement("div");
        }
        stargazersLink.title = "Stargazers count";
        stargazersLink.appendChild(icon);
        stargazersLink.appendChild(this._doc.createTextNode(this.getCardData("stargazers_count")));
        return stargazersLink;
    };
    AbstractRepositoryCardGerator.prototype.createForks = function () {
        var icon = this.createElement("i", "fork black icon");
        icon.title = "Forks";
        var forksLink;
        if (this.htmlUrl) {
            forksLink = this.createAnchorElement(this.htmlUrl + "/network");
        }
        else {
            forksLink = this._doc.createElement("div");
        }
        forksLink.title = "Forks count";
        forksLink.appendChild(icon);
        forksLink.appendChild(this._doc.createTextNode(this.getCardData("forks_count")));
        return forksLink;
    };
    return AbstractRepositoryCardGerator;
}(base_1.AbstractCardGerator));
exports.AbstractRepositoryCardGerator = AbstractRepositoryCardGerator;


/***/ }),

/***/ "./src/card/repository/medium.ts":
/*!***************************************!*\
  !*** ./src/card/repository/medium.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var base_repository_1 = __webpack_require__(/*! ./base_repository */ "./src/card/repository/base_repository.ts");
var MediumRepoCardGerator = (function (_super) {
    __extends(MediumRepoCardGerator, _super);
    function MediumRepoCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediumRepoCardGerator.prototype, "headerSize", {
        get: function () {
            return "large";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "infoSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "popupSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "versionLabelSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "topicSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "lineChartHeight", {
        get: function () {
            return const_1.ChartSize.Line.Medium.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "pieChartHeight", {
        get: function () {
            return const_1.ChartSize.Pie.Medium.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "pieChartLegendFontSize", {
        get: function () {
            return const_1.ChartSize.Pie.Medium.LEGEND_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "chartTitleFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Medium.TITLE_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumRepoCardGerator.prototype, "chartTickFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Medium.TICK_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    return MediumRepoCardGerator;
}(base_repository_1.AbstractRepositoryCardGerator));
exports.MediumRepoCardGerator = MediumRepoCardGerator;


/***/ }),

/***/ "./src/card/repository/small.ts":
/*!**************************************!*\
  !*** ./src/card/repository/small.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var base_repository_1 = __webpack_require__(/*! ./base_repository */ "./src/card/repository/base_repository.ts");
var SmallRepoCardGerator = (function (_super) {
    __extends(SmallRepoCardGerator, _super);
    function SmallRepoCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SmallRepoCardGerator.prototype, "headerSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "infoSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "popupSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "versionLabelSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "topicSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "lineChartHeight", {
        get: function () {
            return const_1.ChartSize.Line.Small.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "pieChartHeight", {
        get: function () {
            return const_1.ChartSize.Pie.Small.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "pieChartLegendFontSize", {
        get: function () {
            return const_1.ChartSize.Pie.Small.LEGEND_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "chartTitleFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Small.TITLE_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallRepoCardGerator.prototype, "chartTickFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Small.TICK_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    return SmallRepoCardGerator;
}(base_repository_1.AbstractRepositoryCardGerator));
exports.SmallRepoCardGerator = SmallRepoCardGerator;


/***/ }),

/***/ "./src/card/repository/tiny.ts":
/*!*************************************!*\
  !*** ./src/card/repository/tiny.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var base_repository_1 = __webpack_require__(/*! ./base_repository */ "./src/card/repository/base_repository.ts");
var TinyRepoCardGerator = (function (_super) {
    __extends(TinyRepoCardGerator, _super);
    function TinyRepoCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TinyRepoCardGerator.prototype, "headerSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "infoSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "popupSize", {
        get: function () {
            return "mini";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "versionLabelSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "topicSize", {
        get: function () {
            return "mini";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "lineChartHeight", {
        get: function () {
            return const_1.ChartSize.Line.Tiny.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "pieChartHeight", {
        get: function () {
            return const_1.ChartSize.Pie.Tiny.HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "pieChartLegendFontSize", {
        get: function () {
            return const_1.ChartSize.Pie.Tiny.LEGEND_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "chartTitleFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Tiny.TITLE_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyRepoCardGerator.prototype, "chartTickFontSize", {
        get: function () {
            return const_1.ChartSize.Line.Tiny.TICK_FONT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    TinyRepoCardGerator.prototype.isDisplayChart = function () {
        if (this.chartDisplay === "block") {
            return true;
        }
        return false;
    };
    TinyRepoCardGerator.prototype.createCardInfoList = function () {
        return null;
    };
    TinyRepoCardGerator.prototype.createPopupInfoList = function () {
        return this._createInfoList({
            repo_homepage: true,
            wiki: true,
            license: true,
            created_at: true,
        }, this.popupSize);
    };
    return TinyRepoCardGerator;
}(base_repository_1.AbstractRepositoryCardGerator));
exports.TinyRepoCardGerator = TinyRepoCardGerator;


/***/ }),

/***/ "./src/card/user/base_user.ts":
/*!************************************!*\
  !*** ./src/card/user/base_user.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_user_org_1 = __webpack_require__(/*! ../base_user_org */ "./src/card/base_user_org.ts");
var AbstractUserCardGerator = (function (_super) {
    __extends(AbstractUserCardGerator, _super);
    function AbstractUserCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractUserCardGerator.prototype, "statsColumnWide", {
        get: function () {
            return "seven";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserCardGerator.prototype, "followers", {
        get: function () {
            return this.getCardData("followers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserCardGerator.prototype, "following", {
        get: function () {
            return this.getCardData("following");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserCardGerator.prototype, "publicGists", {
        get: function () {
            return this.getCardData("public_gists");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractUserCardGerator.prototype, "stars", {
        get: function () {
            return this.getCardData("stars");
        },
        enumerable: true,
        configurable: true
    });
    AbstractUserCardGerator.prototype.createCardHeader = function () {
        var header = this.createAnchorElement(this.htmlUrl, "ui " + this.headerSize + " dividing header");
        if (this.getCardData("profile_name")) {
            header.appendChild(this._doc.createTextNode(this.getCardData("profile_name")));
            var subheader = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(this.getCardData("id")));
            header.appendChild(subheader);
        }
        else {
            header.appendChild(this._doc.createTextNode(this.getCardData("id")));
        }
        return header;
    };
    AbstractUserCardGerator.prototype.createExtraCardContent = function () {
        var organizationsContent = this.createOrganizations();
        var validContentCount = 0;
        if (organizationsContent) {
            validContentCount++;
        }
        if (validContentCount === 0) {
            return null;
        }
        var extraContent = this.createElement("div", "extra content");
        if (organizationsContent) {
            var header = this.createElement("div", "ui tiny header");
            header.appendChild(this._doc.createTextNode("Organizations"));
            var organizationSegment = this.createExtraContentSegment(validContentCount);
            organizationSegment.appendChild(header);
            organizationSegment.appendChild(organizationsContent);
            extraContent.appendChild(organizationSegment);
        }
        return extraContent;
    };
    AbstractUserCardGerator.prototype.createExtraContentSegment = function (contenetCount) {
        if (contenetCount <= 1) {
            return this.createElement("div", "ui vertical basic compact segment");
        }
        return this.createElement("div", "ui vertical segment");
    };
    AbstractUserCardGerator.prototype.createStatisticsElement = function () {
        var items = this.createElement("div", "ui " + this.infoSize + " aligned selection list");
        if (Number(this.publicRepos) > 0) {
            var item = this.createAnchorElement(this.htmlUrl + "?tab=repositories", "item");
            item.appendChild(this._doc.createTextNode("Repositories"));
            item.appendChild(this.createLabelElement(this.publicRepos, this.infoSize));
            items.appendChild(item);
        }
        if (Number(this.stars) > 0) {
            var item = this.createAnchorElement(this.htmlUrl + "?tab=stars", "item");
            item.appendChild(this._doc.createTextNode("Stars"));
            item.appendChild(this.createLabelElement(this.stars, this.infoSize));
            items.appendChild(item);
        }
        if (Number(this.followers) > 0) {
            var item = this.createAnchorElement(this.htmlUrl + "?tab=followers", "item");
            item.appendChild(this._doc.createTextNode("Followers"));
            item.appendChild(this.createLabelElement(this.followers, this.infoSize));
            items.appendChild(item);
        }
        if (Number(this.following) > 0) {
            var item = this.createAnchorElement(this.htmlUrl + "?tab=following", "item");
            item.appendChild(this._doc.createTextNode("Following"));
            item.appendChild(this.createLabelElement(this.following, this.infoSize));
            items.appendChild(item);
        }
        if (Number(this.publicGists) > 0) {
            var item = this.createAnchorElement("//gist.github.com/" + this.getCardData("id"), "item");
            item.appendChild(this._doc.createTextNode("Gists"));
            item.appendChild(this.createLabelElement(this.publicGists, this.infoSize));
            items.appendChild(item);
        }
        return items;
    };
    AbstractUserCardGerator.prototype.createOrganizations = function () {
        var _this = this;
        var orgList = this.createElement("div", "ui mini rounded images");
        Array.prototype.forEach.call(this.getCardData("organizations"), function (organizationData) {
            var orgLink = _this.createAnchorElement(organizationData["html_url"], "ui image");
            orgLink.setAttribute("data-content", organizationData["name"]);
            orgLink.setAttribute("data-position", "top center");
            orgLink.setAttribute("data-variation", "inverted mini");
            orgLink.appendChild(_this.createImageElement(organizationData["avatar_url"]));
            orgList.appendChild(orgLink);
        });
        if (orgList.children.length === 0) {
            return null;
        }
        return orgList;
    };
    return AbstractUserCardGerator;
}(base_user_org_1.AbstractUserOrgCardGerator));
exports.AbstractUserCardGerator = AbstractUserCardGerator;


/***/ }),

/***/ "./src/card/user/medium.ts":
/*!*********************************!*\
  !*** ./src/card/user/medium.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_user_1 = __webpack_require__(/*! ./base_user */ "./src/card/user/base_user.ts");
var MediumUserCardGerator = (function (_super) {
    __extends(MediumUserCardGerator, _super);
    function MediumUserCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediumUserCardGerator.prototype, "headerSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumUserCardGerator.prototype, "infoSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumUserCardGerator.prototype, "popupSize", {
        get: function () {
            return "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediumUserCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "nine";
        },
        enumerable: true,
        configurable: true
    });
    return MediumUserCardGerator;
}(base_user_1.AbstractUserCardGerator));
exports.MediumUserCardGerator = MediumUserCardGerator;


/***/ }),

/***/ "./src/card/user/small.ts":
/*!********************************!*\
  !*** ./src/card/user/small.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_user_1 = __webpack_require__(/*! ./base_user */ "./src/card/user/base_user.ts");
var SmallUserCardGerator = (function (_super) {
    __extends(SmallUserCardGerator, _super);
    function SmallUserCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SmallUserCardGerator.prototype, "headerSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallUserCardGerator.prototype, "infoSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallUserCardGerator.prototype, "popupSize", {
        get: function () {
            return "small";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmallUserCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "eight";
        },
        enumerable: true,
        configurable: true
    });
    return SmallUserCardGerator;
}(base_user_1.AbstractUserCardGerator));
exports.SmallUserCardGerator = SmallUserCardGerator;


/***/ }),

/***/ "./src/card/user/tiny.ts":
/*!*******************************!*\
  !*** ./src/card/user/tiny.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_user_1 = __webpack_require__(/*! ./base_user */ "./src/card/user/base_user.ts");
var TinyUserCardGerator = (function (_super) {
    __extends(TinyUserCardGerator, _super);
    function TinyUserCardGerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TinyUserCardGerator.prototype, "headerSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyUserCardGerator.prototype, "infoSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyUserCardGerator.prototype, "popupSize", {
        get: function () {
            return "tiny";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyUserCardGerator.prototype, "avatarColumnWide", {
        get: function () {
            return "four";
        },
        enumerable: true,
        configurable: true
    });
    TinyUserCardGerator.prototype.createUserInfoList = function () {
        return this._createInfoList({
            company: true,
            location: true,
        });
    };
    TinyUserCardGerator.prototype.createPopupInfoList = function () {
        return this._createInfoList({
            email: true,
            blog: true,
            created_at: true,
            updated_at: true,
        }, this.popupSize);
    };
    TinyUserCardGerator.prototype.createCardContent = function () {
        return this._createCardContentTiny();
    };
    TinyUserCardGerator.prototype.createOrganizations = function () {
        return null;
    };
    return TinyUserCardGerator;
}(base_user_1.AbstractUserCardGerator));
exports.TinyUserCardGerator = TinyUserCardGerator;


/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AVATAR_ELEMENT_ID = "__avatar_id__";
exports.CARD_ELEMENT_ID = "__card_id__";
var Margin;
(function (Margin) {
    Margin.CARD_CONTENT = 4;
    Margin.FRAME = 6;
    Margin.LABEL = 4;
})(Margin = exports.Margin || (exports.Margin = {}));
var CDNJS_PREFIX = "//cdnjs.cloudflare.com/ajax/libs";
var JSDELIVR_PREFIX = "//cdn.jsdelivr.net/npm";
var UI_VERSION = "2.8.3";
var JsUrl;
(function (JsUrl) {
    JsUrl.CHART = JSDELIVR_PREFIX + "/chart.js@2.9.3/dist/Chart.min.js";
    JsUrl.JQUERY = CDNJS_PREFIX + "/jquery/3.4.1/jquery.min.js";
    JsUrl.MOMENT = CDNJS_PREFIX + "/moment.js/2.24.0/moment.min.js";
    JsUrl.PLEASE = CDNJS_PREFIX + "/pleasejs/0.4.2/Please.min.js";
    JsUrl.SEMANTIC_UI = JSDELIVR_PREFIX + "/fomantic-ui@" + UI_VERSION + "/dist/semantic.min.js";
})(JsUrl = exports.JsUrl || (exports.JsUrl = {}));
exports.DEFAULT_SEMANTIC_UI_CSS_URL = JSDELIVR_PREFIX + "/fomantic-ui@" + UI_VERSION + "/dist/semantic.min.css";
var Emoji;
(function (Emoji) {
    Emoji.WIDTH = 16;
    Emoji.HEIGHT = 16;
})(Emoji = exports.Emoji || (exports.Emoji = {}));
var STEP_HEIGHT = 20;
var BaseChartSize;
(function (BaseChartSize) {
    var Line;
    (function (Line) {
        Line.HEIGHT = 110;
        Line.TITLE_FONT_SIZE = 10;
        Line.TICK_FONT_SIZE = 8;
    })(Line = BaseChartSize.Line || (BaseChartSize.Line = {}));
    var Pie;
    (function (Pie) {
        Pie.HEIGHT = 160;
        Pie.LEGEND_FONT_SIZE = 10;
    })(Pie = BaseChartSize.Pie || (BaseChartSize.Pie = {}));
})(BaseChartSize || (BaseChartSize = {}));
var ChartSize;
(function (ChartSize) {
    var Line;
    (function (Line) {
        var Medium;
        (function (Medium) {
            Medium.HEIGHT = BaseChartSize.Line.HEIGHT + STEP_HEIGHT * 2;
            Medium.TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE + 2;
            Medium.TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE + 2;
        })(Medium = Line.Medium || (Line.Medium = {}));
        var Small;
        (function (Small) {
            Small.HEIGHT = BaseChartSize.Line.HEIGHT + STEP_HEIGHT * 1;
            Small.TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE + 1;
            Small.TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE + 1;
        })(Small = Line.Small || (Line.Small = {}));
        var Tiny;
        (function (Tiny) {
            Tiny.HEIGHT = BaseChartSize.Line.HEIGHT;
            Tiny.TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE;
            Tiny.TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE;
        })(Tiny = Line.Tiny || (Line.Tiny = {}));
    })(Line = ChartSize.Line || (ChartSize.Line = {}));
    var Pie;
    (function (Pie) {
        var Medium;
        (function (Medium) {
            Medium.HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT * 2;
            Medium.LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE + 2;
        })(Medium = Pie.Medium || (Pie.Medium = {}));
        var Small;
        (function (Small) {
            Small.HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT * 1;
            Small.LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE + 1;
        })(Small = Pie.Small || (Pie.Small = {}));
        var Tiny;
        (function (Tiny) {
            Tiny.HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT;
            Tiny.LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE;
        })(Tiny = Pie.Tiny || (Pie.Tiny = {}));
    })(Pie = ChartSize.Pie || (ChartSize.Pie = {}));
})(ChartSize = exports.ChartSize || (exports.ChartSize = {}));


/***/ }),

/***/ "./src/emoji.ts":
/*!**********************!*\
  !*** ./src/emoji.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/const.ts");
var AbstractEmojiProcessor = (function () {
    function AbstractEmojiProcessor() {
        this._regexpEmoji = new RegExp(":[a-zA-Z0-9_-]+:", "gm");
    }
    AbstractEmojiProcessor.prototype.processEmoji = function (text) {
        throw new Error("not implemented");
    };
    return AbstractEmojiProcessor;
}());
var EmojiNop = (function (_super) {
    __extends(EmojiNop, _super);
    function EmojiNop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiNop.prototype.processEmoji = function (text) {
        return text;
    };
    return EmojiNop;
}(AbstractEmojiProcessor));
var EmojiRemover = (function (_super) {
    __extends(EmojiRemover, _super);
    function EmojiRemover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiRemover.prototype.processEmoji = function (text) {
        return text.replace(this._regexpEmoji, "");
    };
    return EmojiRemover;
}(AbstractEmojiProcessor));
var EmojiResolver = (function (_super) {
    __extends(EmojiResolver, _super);
    function EmojiResolver(emojiMapping) {
        var _this = _super.call(this) || this;
        _this.emojiMapping = emojiMapping;
        return _this;
    }
    EmojiResolver.prototype.processEmoji = function (text) {
        var matchList = text.match(this._regexpEmoji);
        if (matchList === null) {
            return text;
        }
        var replaceMapping = new Object();
        for (var _i = 0, matchList_1 = matchList; _i < matchList_1.length; _i++) {
            var emojiText = matchList_1[_i];
            var emojiId = emojiText.substr(1, emojiText.length - 2);
            var tag = "<img src='" + this.emojiMapping[emojiId] + "' width='" + const_1.Emoji.WIDTH + "' height='" + const_1.Emoji.HEIGHT + "'>";
            replaceMapping[emojiText] = tag;
        }
        for (var emojiText in replaceMapping) {
            text = text.replace(new RegExp(emojiText, "g"), replaceMapping[emojiText]);
        }
        return text;
    };
    return EmojiResolver;
}(AbstractEmojiProcessor));
var EmojiProcessorFactory = (function () {
    function EmojiProcessorFactory() {
    }
    EmojiProcessorFactory.create = function (processorType, emojiMapping) {
        console.debug("emoji processor type: " + processorType);
        if (processorType === null) {
            return new EmojiResolver(emojiMapping);
        }
        if (processorType === "nop") {
            return new EmojiNop();
        }
        if (processorType === "remove") {
            return new EmojiRemover();
        }
        if (processorType === "resolve") {
            return new EmojiResolver(emojiMapping);
        }
        console.error("unknown emoji processor type: " + processorType);
        return new EmojiNop();
    };
    return EmojiProcessorFactory;
}());
exports.EmojiProcessorFactory = EmojiProcessorFactory;


/***/ }),

/***/ "./src/factory.ts":
/*!************************!*\
  !*** ./src/factory.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var medium_1 = __webpack_require__(/*! ./card/organization/medium */ "./src/card/organization/medium.ts");
var small_1 = __webpack_require__(/*! ./card/organization/small */ "./src/card/organization/small.ts");
var tiny_1 = __webpack_require__(/*! ./card/organization/tiny */ "./src/card/organization/tiny.ts");
var medium_2 = __webpack_require__(/*! ./card/repository/medium */ "./src/card/repository/medium.ts");
var small_2 = __webpack_require__(/*! ./card/repository/small */ "./src/card/repository/small.ts");
var tiny_2 = __webpack_require__(/*! ./card/repository/tiny */ "./src/card/repository/tiny.ts");
var medium_3 = __webpack_require__(/*! ./card/user/medium */ "./src/card/user/medium.ts");
var small_3 = __webpack_require__(/*! ./card/user/small */ "./src/card/user/small.ts");
var tiny_3 = __webpack_require__(/*! ./card/user/tiny */ "./src/card/user/tiny.ts");
function createCardGenerator(doc, cardStyle, cardData, iframeWidth, color, chartDisplay, topicDisplay, emojiProcessor) {
    var cardType = cardData["card_type"].toLowerCase();
    console.debug([
        "createCardGenerator:",
        "  chartDisplay: " + chartDisplay,
        "  topicDisplay: " + topicDisplay,
    ]);
    switch (cardType) {
        case "organization": {
            switch (cardStyle) {
                case "medium": {
                    return new medium_1.MediumOrgCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                case "small": {
                    return new small_1.SmallOrgCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                case "tiny": {
                    return new tiny_1.TinyOrgCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                default: {
                    console.error("invalid card style: type=" + cardType + ", style=" + cardStyle);
                    return null;
                }
            }
        }
        case "repository": {
            switch (cardStyle) {
                case "medium": {
                    return new medium_2.MediumRepoCardGerator(doc, cardData, iframeWidth, color, chartDisplay, topicDisplay, emojiProcessor);
                }
                case "small": {
                    return new small_2.SmallRepoCardGerator(doc, cardData, iframeWidth, color, chartDisplay, topicDisplay, emojiProcessor);
                }
                case "tiny": {
                    return new tiny_2.TinyRepoCardGerator(doc, cardData, iframeWidth, color, chartDisplay, topicDisplay, emojiProcessor);
                }
                default: {
                    console.error("invalid card style: type=" + cardType + ", style=" + cardStyle);
                    return null;
                }
            }
        }
        case "user": {
            switch (cardStyle) {
                case "medium": {
                    return new medium_3.MediumUserCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                case "small": {
                    return new small_3.SmallUserCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                case "tiny": {
                    return new tiny_3.TinyUserCardGerator(doc, cardData, iframeWidth, color, emojiProcessor);
                }
                default: {
                    console.error("invalid card style: type=" + cardType + ", style=" + cardStyle);
                    return null;
                }
            }
        }
        default: {
            console.error("invalid card type: " + cardType);
            return null;
        }
    }
}
exports.createCardGenerator = createCardGenerator;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = __webpack_require__(/*! ./manager */ "./src/manager.ts");
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
(function (window, $) {
    $(window).on("load", function () {
        var generator_card = new manager_1.CardGeneratorManager(document);
        generator_card.generateCards();
    });
})(window, jquery_1.default);


/***/ }),

/***/ "./src/manager.ts":
/*!************************!*\
  !*** ./src/manager.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/const.ts");
var emoji_1 = __webpack_require__(/*! ./emoji */ "./src/emoji.ts");
var factory_1 = __webpack_require__(/*! ./factory */ "./src/factory.ts");
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
var CardAttr;
(function (CardAttr) {
    var Display;
    (function (Display) {
        Display.CHART = "chart-display";
        Display.TOPICS = "topic-display";
    })(Display = CardAttr.Display || (CardAttr.Display = {}));
    CardAttr.EMOJI = "emoji";
    CardAttr.FRAME_COLOR = "color";
    CardAttr.STYLE = "card-style";
    CardAttr.WIDTH = "card-width";
})(CardAttr || (CardAttr = {}));
var DEFAULT_CARD_WIDTH_MAPPING = {
    medium: 420,
    small: 380,
    tiny: 340,
};
var DEFAULT_CARD_STYLE = "medium";
var CardGeneratorManager = (function () {
    function CardGeneratorManager(_doc) {
        this._doc = _doc;
    }
    CardGeneratorManager.prototype.generateCards = function () {
        var _this = this;
        console.debug(navigator.userAgent);
        var frameCount = 0;
        Array.prototype.forEach.call(this._doc.getElementsByClassName("ghscard"), function (cardElement) {
            var dataSourcePath = cardElement.getAttribute("src");
            var cardStyle;
            if (cardElement.getAttribute(CardAttr.STYLE) !== null) {
                cardStyle = cardElement.getAttribute(CardAttr.STYLE);
            }
            else {
                console.debug(CardAttr.STYLE + " attribute not found");
                cardStyle = DEFAULT_CARD_STYLE;
            }
            jquery_1.default.getJSON(dataSourcePath, function (cardData) {
                console.info("--- creating a GitHub card from " + dataSourcePath + " ---");
                console.debug(cardData);
                var cardGenerator = factory_1.createCardGenerator(_this._doc, cardStyle, cardData, _this.getIframeWidth(cardElement.getAttribute(CardAttr.WIDTH), cardStyle), cardElement.getAttribute(CardAttr.FRAME_COLOR), cardElement.getAttribute(CardAttr.Display.CHART), cardElement.getAttribute(CardAttr.Display.TOPICS), emoji_1.EmojiProcessorFactory.create(cardElement.getAttribute(CardAttr.EMOJI), cardData["emojis"]));
                if (cardGenerator == null) {
                    console.error("skip invalid card data: " + dataSourcePath);
                    return;
                }
                var cardFrame = cardGenerator.createCard(frameCount);
                frameCount++;
                cardElement.parentNode.insertBefore(cardFrame, cardElement);
                jquery_1.default(cardFrame).on("load", function () {
                    var card = cardFrame.contentWindow.document.getElementsByTagName("div")[0];
                    if (card === undefined) {
                        return;
                    }
                    cardFrame.height = card.getBoundingClientRect().height + const_1.Margin.FRAME + "px";
                    cardFrame.style.visibility = "visible";
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.error([
                    "failed to execute getJSON: " + textStatus,
                    "path: " + dataSourcePath,
                    "error: " + errorThrown,
                    "response\uFF1A" + jqXHR.responseText,
                ].join("\n"));
            });
        });
    };
    CardGeneratorManager.prototype.getIframeWidth = function (cardWidth, cardStyle) {
        var iframeWidth;
        if (cardWidth === null) {
            iframeWidth = DEFAULT_CARD_WIDTH_MAPPING[cardStyle];
        }
        else {
            iframeWidth = Number(cardWidth);
        }
        return iframeWidth;
    };
    return CardGeneratorManager;
}());
exports.CardGeneratorManager = CardGeneratorManager;


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=ghscard.js.map