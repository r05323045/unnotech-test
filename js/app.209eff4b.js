(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},o={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-aa16d59a":"f796b8c2"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-aa16d59a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-aa16d59a":"318b8e59"}[e]+".css",o=c.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===i||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/unnotech-test/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03ee":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"255b":function(e,t,n){"use strict";var i=n("2fa3");t["a"]={getBooks:function(){return i["b"].get("/books")},getBook:function(e){return i["b"].get("/profile/".concat(e))},putBook:function(e,t){return i["b"].put("/profile/".concat(t.id),t)}}},"2dad":function(e,t,n){},"2fa3":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var i=n("bc3a"),r=n.n(i),o=n("3d20"),a=n.n(o),s="https://fe-interview-api.unnotech.com",c=r.a.create({baseURL:s}),l=a.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"35e1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("5c0b"),n("2877")),s={},c=Object(a["a"])(s,r,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"top-wrapper"},[n("div",{staticClass:"title-wrapper"},[n("span",{staticClass:"title",on:{click:function(t){e.$router.push("/books").catch((function(){}))}}},[e._v("書籍清單")])]),n("div",{staticClass:"description"},[e._v("多久沒看書了？ 點選書籍開始選購！")])]),n("div",{staticClass:"book-list-wrapper"},[e.windowWidth>=768&&this.books.length>0?n("book-list-desktop",{attrs:{books:e.books}}):e._e(),e.windowWidth<768&&this.books.length>0?n("book-list-Mobile",{attrs:{books:e.books}}):e._e()],1),n("div",{staticClass:"book-detail-wrapper"},[n("router-view",{attrs:{books:e.books}})],1)])},f=[],p=n("1da1"),b=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.books,(function(t){return n("div",{key:t.id,staticClass:"swiper-slide",class:{selected:e.$route.path==="/books/"+t.id},on:{click:function(n){e.$router.push("/books/"+t.id).catch((function(){}))}}},[n("div",{staticClass:"inner-wrapper"},[n("div",{staticClass:"background"},[n("div",{staticClass:"image",style:"background: url("+t.image+") no-repeat center / cover"})])]),n("div",{staticClass:"book-name"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"swiper-button-next"}),n("div",{staticClass:"swiper-button-prev"})])}),h=[],v=n("7de3"),_=n.n(v),m=(n("bbe3"),{props:{books:{type:Array}},mounted:function(){new _.a(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{992:{slidesPerView:4,spaceBetween:"18%"},768:{slidesPerView:3,spaceBetween:"15%"},576:{slidesPerView:2.1,spaceBetween:"15%"},375:{slidesPerView:1.5,spaceBetween:"15%",slidesPerGroup:1}}})}}),w=m,k=(n("75f7"),Object(a["a"])(w,b,h,!1,null,null,null)),g=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container"},[n("div",{staticClass:"card-wrapper"},[e._l(e.books,(function(t){return n("div",{key:t.id,staticClass:"card-slide",class:{selected:e.$route.path==="/books/"+t.id},on:{click:function(n){e.$router.push("/books/"+t.id).catch((function(){}))}}},[n("div",{staticClass:"inner-wrapper"},[n("div",{staticClass:"background"},[n("div",{staticClass:"image",style:"background: url("+t.image+") no-repeat center / cover"})])]),n("div",{staticClass:"book-name"},[e._v(e._s(t.name))])])})),e.books.length/2>0?n("div",{staticClass:"card-slide"}):e._e()],2)])},C=[],x={props:{books:{type:Array}}},O=x,j=(n("ce46"),Object(a["a"])(O,y,C,!1,null,null,null)),E=j.exports,B=n("255b"),P={components:{BookListDesktop:g,BookListMobile:E},data:function(){return{windowWidth:window.innerWidth,books:[]}},created:function(){this.fetchBooks()},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowWidth=window.innerWidth},fetchBooks:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B["a"].getBooks();case 3:n=t.sent,i=n.data,e.books=i,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},$=P,L=(n("21bb"),Object(a["a"])($,d,f,!1,null,null,null)),S=L.exports;i["a"].use(u["a"]);var T=[{path:"/books",component:S,children:[{path:"/books/:id",component:function(){return n.e("chunk-aa16d59a").then(n.bind(null,"ab6d"))}}]},{path:"*",redirect:"/books"}],z=new u["a"]({routes:T}),A=z,W=n("2f62");i["a"].use(W["a"]);var M=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R={code:"zh_TW",messages:{alpha:"{_field_} 須以英文組成",alpha_dash:"{_field_} 須以英數、斜線及底線組成",alpha_num:"{_field_} 須以英數組成",alpha_spaces:"{_field_} 須以英文及空格組成",between:"{_field_} 須介於 {min} 至 {max}之間",confirmed:" {_field_} 不一致",digits:"{_field_} 須為 {length} 位數字",dimensions:"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素",email:"{_field_} 須為有效的電子信箱",excluded:"{_field_} 的選項無效",ext:"{_field_} 須為有效的檔案",image:"{_field_} 須為圖片",oneOf:"{_field_} 的選項無效",integer:"{_field_} 須為整數",length:"{_field_} 的長度須為 {length}",max:"{_field_} 不能大於 {length} 個字元",max_value:"{_field_} 不得大於 {max}",mimes:"{_field_} 須為有效的檔案類型",min:"{_field_} 不能小於 {length} 個字元",min_value:"{_field_} 不得小於 {min}",numeric:"{_field_} 須為數字",regex:"{_field_} 的格式錯誤",required:"{_field_} 為必填",required_if:"{_field_} 為必填",size:"{_field_} 的檔案須小於 {size}KB"}},V=n("7bb1"),N=n("4c93");i["a"].config.productionTip=!1,Object.keys(N).forEach((function(e){Object(V["d"])(e,N[e])})),Object(V["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(V["e"])("tw",R),i["a"].component("ValidationProvider",V["b"]),i["a"].component("ValidationObserver",V["a"]),new i["a"]({router:A,store:M,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"75f7":function(e,t,n){"use strict";n("35e1")},"9c0c":function(e,t,n){},ce46:function(e,t,n){"use strict";n("03ee")}});
//# sourceMappingURL=app.209eff4b.js.map