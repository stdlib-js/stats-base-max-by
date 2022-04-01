// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(l.call(r,e)||u.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,v="set"in t,f&&(_||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),v&&i&&i.call(r,e,t.set),r},_=e()?c:f;var v=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},d=Number.POSITIVE_INFINITY;var b=function(r){return 0===r&&1/r===d},y=p,N=b;var s=p,j=b;var m=function(r,e,t,n,a){var o,i,l,u;if(r<=0)return NaN;if(1===r||0===t)return void 0===(l=n.call(a,e[0],0,0,e))?NaN:l;for(i=t<0?(1-r)*t:0,u=0;u<r&&void 0===(o=n.call(a,e[i],u,i,e));u++)i+=t;if(u===r)return NaN;for(u+=1;u<r;u++)if(i+=t,void 0!==(l=n.call(a,e[i],u,i,e))){if(y(l))return l;(l>o||l===o&&N(l))&&(o=l)}return o};v(m,"ndarray",(function(r,e,t,n,a,o){var i,l,u,c;if(r<=0)return NaN;if(1===r||0===t)return void 0===(u=a.call(o,e[0],0,0,e))?NaN:u;for(l=n,c=0;c<r&&void 0===(i=a.call(o,e[l],c,l,e));c++)l+=t;if(c===r)return NaN;for(c+=1;c<r;c++)if(l+=t,void 0!==(u=a.call(o,e[l],c,l,e))){if(s(u))return u;(u>i||u===i&&j(u))&&(i=u)}return i}));var g=m;export{g as default};
//# sourceMappingURL=mod.js.map
