(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{984:function(t,e,n){"use strict";n.d(e,{Bt:function(){return s},E3:function(){return i},Fn:function(){return r},Ny:function(){return u},U$:function(){return o},y:function(){return c}});var r="3178cfb99d9cb37cb3fd903fa9e819f6",o=function(t){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(t)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},u=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},i=function(t,e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(t)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},c=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(e)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},s=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(e)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))}},736:function(t,e,n){"use strict";n.r(e);var r=n(982),o=n(885),u=n(791),i=n(871),c=n(429),s=n.n(c),a=n(984),f=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,u.useState)(null),n=(0,o.Z)(e,2),c=n[0],h=n[1];return(0,u.useEffect)((function(){(0,a.Bt)(t,a.Fn).then((function(t){return h((0,r.Z)(t.results))}))}),[t]),(0,f.jsx)("ul",{children:c?c.map((function(t){var e=t.author,n=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",e]}),(0,f.jsx)("p",{children:n})]},s().generate())})):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})})}},429:function(t,e,n){"use strict";t.exports=n(274)},857:function(t,e,n){"use strict";var r,o,u,i=n(408),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){u=!1}function a(t){if(t){if(t!==r){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==c&&(r=c,s())}function f(){return u||(u=function(){r||a(c);for(var t,e=r.split(""),n=[],o=i.nextValue();e.length>0;)o=i.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||c},characters:function(t){return a(t),r},seed:function(t){i.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return f()[t]},shuffled:f}},98:function(t,e,n){"use strict";var r,o,u=n(226);n(857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=u(7),e+=u(t),r>0&&(e+=u(r)),e+=u(n)}},226:function(t,e,n){"use strict";var r=n(857),o=n(139),u=n(483);t.exports=function(t){for(var e,n=0,i="";!e;)i+=u(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return i}},274:function(t,e,n){"use strict";var r=n(857),o=n(98),u=n(46),i=n(347)||0;function c(){return o(i)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return i=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=u},46:function(t,e,n){"use strict";var r=n(857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},347:function(t){"use strict";t.exports=0},483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),u="";;)for(var i=t(o),c=o;c--;)if((u+=e[i[c]&r]||"").length===+n)return u}},982:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(907);var o=n(181);function u(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=736.9fe7f2e5.chunk.js.map