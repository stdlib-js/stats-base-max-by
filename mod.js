// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(l.call(r,e)||u.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};var c=e;function f(r){return r!=r}var _=Number.POSITIVE_INFINITY;function p(r){return 0===r&&1/r===_}function v(r,e,t,n,o){var a,i,l,u;if(r<=0)return NaN;if(1===r||0===t)return void 0===(l=n.call(o,e[0],0,0,e))?NaN:l;for(i=t<0?(1-r)*t:0,u=0;u<r&&void 0===(a=n.call(o,e[i],u,i,e));u++)i+=t;if(u===r)return NaN;for(u+=1;u<r;u++)if(i+=t,void 0!==(l=n.call(o,e[i],u,i,e))){if(f(l))return l;(l>a||l===a&&p(l))&&(a=l)}return a}c(v,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,t,n,o,a){var i,l,u,c;if(r<=0)return NaN;if(1===r||0===t)return void 0===(u=o.call(a,e[0],0,0,e))?NaN:u;for(l=n,c=0;c<r&&void 0===(i=o.call(a,e[l],c,l,e));c++)l+=t;if(c===r)return NaN;for(c+=1;c<r;c++)if(l+=t,void 0!==(u=o.call(a,e[l],c,l,e))){if(f(u))return u;(u>i||u===i&&p(u))&&(i=u)}return i}});export{v as default};
//# sourceMappingURL=mod.js.map
