"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var d=q(function(I,y){
var P=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,e,v,o,t,s){var u,n,c,a,r,f;if(u=e.data,n=e.accessors[0],i===1||v===0)return r=t.call(s,n(u,o),0,o,u),r===void 0?NaN:r;for(a=o,f=0;f<i&&(c=t.call(s,n(u,a),f,a,u),c===void 0);f++)a+=v;if(f===i)return NaN;for(f+=1,f;f<i;f++)if(a+=v,r=t.call(s,n(u,a),f,a,u),r!==void 0){if(P(r))return r;(r>c||r===c&&Z(r))&&(c=r)}return c}y.exports=j
});var l=q(function(J,m){
var N=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=d();function z(i,e,v,o,t,s){var u,n,c,a,r;if(i<=0)return NaN;if(c=R(e),c.accessorProtocol)return w(i,c,v,o,t,s);if(i===1||v===0)return a=t.call(s,e[o],0,o,e),a===void 0?NaN:a;for(n=o,r=0;r<i&&(u=t.call(s,e[n],r,n,e),u===void 0);r++)n+=v;if(r===i)return NaN;for(r+=1,r;r<i;r++)if(n+=v,a=t.call(s,e[n],r,n,e),a!==void 0){if(N(a))return a;(a>u||a===u&&O(a))&&(u=a)}return u}m.exports=z
});var p=q(function(K,x){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,e,v,o,t){return D(i,e,v,C(i,v),o,t)}x.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=p(),G=l();F(B,"ndarray",G);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
