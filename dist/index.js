"use strict";var c=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var s=c(function(C,l){
var d=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-assert-is-positive-zero/dist');function x(u,e,f,t,o){var n,i,a,r;if(u<=0)return NaN;if(u===1||f===0)return a=t.call(o,e[0],0,0,e),a===void 0?NaN:a;for(f<0?i=(1-u)*f:i=0,r=0;r<u&&(n=t.call(o,e[i],r,i,e),n===void 0);r++)i+=f;if(r===u)return NaN;for(r+=1,r;r<u;r++)if(i+=f,a=t.call(o,e[i],r,i,e),a!==void 0){if(d(a))return a;(a>n||a===n&&N(a))&&(n=a)}return n}l.exports=x
});var y=c(function(D,q){
var P=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(u,e,f,t,o,n){var i,a,r,v;if(u<=0)return NaN;if(u===1||f===0)return r=o.call(n,e[0],0,0,e),r===void 0?NaN:r;for(a=t,v=0;v<u&&(i=o.call(n,e[a],v,a,e),i===void 0);v++)a+=f;if(v===u)return NaN;for(v+=1,v;v<u;v++)if(a+=f,r=o.call(n,e[a],v,a,e),r!==void 0){if(P(r))return r;(r>i||r===i&&Z(r))&&(i=r)}return i}q.exports=O
});var B=c(function(E,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=s(),j=y();R(m,"ndarray",j);p.exports=m
});var w=B();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
