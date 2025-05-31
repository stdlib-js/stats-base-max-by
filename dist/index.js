"use strict";var q=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var d=q(function(I,y){
var x=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,a,n,o,t,s){var v,u,c,e,r,f;if(v=a.data,u=a.accessors[0],i===1||n===0)return r=t.call(s,u(v,o),0,o,a),r===void 0?NaN:r;for(e=o,f=0;f<i&&(c=t.call(s,u(v,e),f,e,a),c===void 0);f++)e+=n;if(f===i)return NaN;for(f+=1,f;f<i;f++)if(e+=n,r=t.call(s,u(v,e),f,e,a),r!==void 0){if(x(r))return r;(r>c||r===c&&Z(r))&&(c=r)}return c}y.exports=j
});var l=q(function(J,m){
var N=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=d();function z(i,a,n,o,t,s){var v,u,c,e,r;if(i<=0)return NaN;if(c=R(a),c.accessorProtocol)return w(i,c,n,o,t,s);if(i===1||n===0)return e=t.call(s,a[o],0,o,a),e===void 0?NaN:e;for(u=o,r=0;r<i&&(v=t.call(s,a[u],r,u,a),v===void 0);r++)u+=n;if(r===i)return NaN;for(r+=1,r;r<i;r++)if(u+=n,e=t.call(s,a[u],r,u,a),e!==void 0){if(N(e))return e;(e>v||e===v&&O(e))&&(v=e)}return v}m.exports=z
});var B=q(function(K,p){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,a,n,o,t){return D(i,a,n,C(i,n),o,t)}p.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=B(),G=l();F(P,"ndarray",G);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
