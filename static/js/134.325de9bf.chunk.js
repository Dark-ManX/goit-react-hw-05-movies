(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{984:function(t,e,n){"use strict";n.d(e,{Bt:function(){return s},E3:function(){return c},Fn:function(){return r},Ny:function(){return u},U$:function(){return o},y:function(){return i}});var r="3178cfb99d9cb37cb3fd903fa9e819f6",o=function(t){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(t)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},u=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e)).then((function(t){if(t.ok)return t.json()}))},c=function(t,e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(t)).then((function(t){if(t.ok)return t.json()}))},i=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(e)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))},s=function(t,e){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(e)).then((function(t){return t.ok?t.json():Promise.rejected(new Error("not found"))}))}},134:function(t,e,n){"use strict";n.r(e);var r=n(885),o=n(791),u=n(501),c=n(871),i=n(429),s=n.n(i),a=n(699),f=n(984),h=n(251),l=n(184);e.default=function(){var t,e=(0,u.lr)(),n=(0,r.Z)(e,2),i=n[0],p=n[1];console.log(i);var d=(0,c.TH)(),g=(0,o.useState)(""),v=(0,r.Z)(g,2),m=v[0],x=v[1],w=(0,o.useState)(null!==(t=i.get("query"))&&void 0!==t?t:null),b=(0,r.Z)(w,2),j=b[0],k=b[1],y=(0,o.useState)(null),E=(0,r.Z)(y,2),Z=E[0],_=E[1],S=(0,o.useState)(null),M=(0,r.Z)(S,2),q=M[0],C=M[1];return(0,o.useEffect)((function(){j&&(0,f.E3)(j,f.Fn).then((function(t){if(0!==t.results.length)return C(null),_(t.results);C(t),_(null)})).catch((function(t){return console.log(t)}))}),[j,i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),k(m),console.log(d),p({query:m}),x("")},children:[(0,l.jsx)("input",{type:"text",value:m,onChange:function(t){return x(t.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),Z&&(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(a.gy,{color:"#00BFFF",height:80,width:80}),children:(0,l.jsx)("ul",{children:Z.map((function(t){var e=t.id,n=t.title;return(0,l.jsx)(h.Z,{search:j,children:(0,l.jsx)(u.rU,{to:"".concat(e),state:{from:d},children:n})},s().generate())}))})}),q&&(0,l.jsx)("p",{children:"Sorry but we do not have such film"})]})}},251:function(t,e,n){"use strict";var r,o=n(168),u=n(989).Z.li(r||(r=(0,o.Z)(["\nlist-style: none;\nmargin: 5px;\n"])));e.Z=u},429:function(t,e,n){"use strict";t.exports=n(274)},857:function(t,e,n){"use strict";var r,o,u,c=n(408),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){u=!1}function a(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==i&&(r=i,s())}function f(){return u||(u=function(){r||a(i);for(var t,e=r.split(""),n=[],o=c.nextValue();e.length>0;)o=c.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return a(t),r},seed:function(t){c.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return f()[t]},shuffled:f}},98:function(t,e,n){"use strict";var r,o,u=n(226);n(857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=u(7),e+=u(t),r>0&&(e+=u(r)),e+=u(n)}},226:function(t,e,n){"use strict";var r=n(857),o=n(139),u=n(483);t.exports=function(t){for(var e,n=0,c="";!e;)c+=u(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},274:function(t,e,n){"use strict";var r=n(857),o=n(98),u=n(46),c=n(347)||0;function i(){return o(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=u},46:function(t,e,n){"use strict";var r=n(857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},347:function(t){"use strict";t.exports=0},483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),u="";;)for(var c=t(o),i=o;i--;)if((u+=e[c[i]&r]||"").length===+n)return u}}}]);
//# sourceMappingURL=134.325de9bf.chunk.js.map