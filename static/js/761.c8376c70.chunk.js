"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[761],{984:function(n,t,e){e.d(t,{Bt:function(){return a},E3:function(){return c},Fn:function(){return r},Ny:function(){return i},U$:function(){return o},y:function(){return u}});var r="3178cfb99d9cb37cb3fd903fa9e819f6",o=function(n){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(n)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("not found"))}))},i=function(n,t){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("not found"))}))},c=function(n,t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("not found"))}))},u=function(n,t){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("not found"))}))},a=function(n,t){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("not found"))}))}},761:function(n,t,e){e.r(t);var r=e(982),o=e(885),i=e(791),c=e(871),u=e(501),a=e(984),f=e(251),s=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,o.Z)(n,2),e=t[0],h=t[1],d=(0,c.TH)();return(0,i.useEffect)((function(){(0,a.U$)(a.Fn).then((function(n){var t=n.results;return h((0,r.Z)(t))})).catch((function(n){return alert(n)}))}),[]),(0,s.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,s.jsx)(f.Z,{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:d},children:e})},t)}))})}},251:function(n,t,e){var r,o=e(168),i=e(989).Z.li(r||(r=(0,o.Z)(["\nlist-style: none;\nmargin: 5px;\n"])));t.Z=i},982:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(907);var o=e(181);function i(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=761.c8376c70.chunk.js.map