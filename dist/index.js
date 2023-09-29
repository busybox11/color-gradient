!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>r});class o{constructor(e){const t=e.replace("#","");if(3!==t.length&&6!==t.length)throw new Error("Hex color is not valid");const r=3==t.length?/.{1}/g:/.{1,2}/g,s=t.match(r);if(3!==s.length)throw new Error("Could not get RGB parameters");this.r=o.hexToDec(s[0]),this.g=o.hexToDec(s[1]),this.b=o.hexToDec(s[2])}static isValidHex=e=>/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e);static hexToDec=e=>(1===e.length&&(e+=e),parseInt(e,16));static decToHex=e=>{let t=e.toString(16);return t.length<=1&&(t="0"+t),t}}const r=class{constructor(...e){this.colors=[];for(const t of e)o.isValidHex(t)&&this.colors.push(new o(t))}getSubGradient=e=>{e<0&&(e=0),e>100&&(e=100);const t=Math.min(Math.trunc(e*(this.colors.length-1)/100),this.colors.length-2),o=this.getColorsScale();return{from:{color:this.colors[t],value:o[t]},to:{color:this.colors[t+1],value:o[t+1]}}};getColorsScale=()=>this.colors.map(((e,t)=>100*t/(this.colors.length-1)));getWeightedAverage=(e,t,o,r)=>{const s=Math.pow(e,2)*t,l=Math.pow(o,2)*r;return Math.sqrt((s+l)/(t+r))};getColorFromValue=(e,t="hex")=>{const r=this.getSubGradient(e),s=r.to.value+r.from.value,l=s-Math.abs(r.from.value-e),c=s-Math.abs(r.to.value-e),a=Math.round(this.getWeightedAverage(r.from.color.r,l,r.to.color.r,c)),n=Math.round(this.getWeightedAverage(r.from.color.g,l,r.to.color.g,c)),i=Math.round(this.getWeightedAverage(r.from.color.b,l,r.to.color.b,c));return"hex"===t?`#${o.decToHex(a)}${o.decToHex(n)}${o.decToHex(i)}`:"rgb"===t?`rgb(${a}, ${n}, ${i})`:[a,n,i]}};return t})()));