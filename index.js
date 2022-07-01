// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},d=r()?f:c,_=function(e,r,t){d(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=function(e){return e!=e},b=Number.POSITIVE_INFINITY,y=function(e){return 0===e&&1/e===b};function s(e,r,t,n,o){var i,a,l,u;if(e<=0)return NaN;if(1===e||0===t)return void 0===(l=n.call(o,r[0],0,0,r))?NaN:l;for(a=t<0?(1-e)*t:0,u=0;u<e&&void 0===(i=n.call(o,r[a],u,a,r));u++)a+=t;if(u===e)return NaN;for(u+=1;u<e;u++)if(a+=t,void 0!==(l=n.call(o,r[a],u,a,r))){if(p(l))return l;(l>i||l===i&&y(l))&&(i=l)}return i}return _(s,"ndarray",(function(e,r,t,n,o,i){var a,l,u,f;if(e<=0)return NaN;if(1===e||0===t)return void 0===(u=o.call(i,r[0],0,0,r))?NaN:u;for(l=n,f=0;f<e&&void 0===(a=o.call(i,r[l],f,l,r));f++)l+=t;if(f===e)return NaN;for(f+=1;f<e;f++)if(l+=t,void 0!==(u=o.call(i,r[l],f,l,r))){if(p(u))return u;(u>a||u===a&&y(u))&&(a=u)}return a})),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).maxBy=r();
//# sourceMappingURL=index.js.map
