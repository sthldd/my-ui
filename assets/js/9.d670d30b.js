(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{138:function(t,n,s){"use strict";var r=s(3),c=s(14),e=s(18),a=s(66),i=s(64),o=s(6),p=s(86).f,l=s(87).f,v=s(8).f,d=s(139).trim,u=r.Number,_=u,g=u.prototype,m="Number"==e(s(65)(g)),b="trim"in String.prototype,f=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var s,r,c,e=(n=b?n.trim():d(n,3)).charCodeAt(0);if(43===e||45===e){if(88===(s=n.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(n.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+n}for(var a,o=n.slice(2),p=0,l=o.length;p<l;p++)if((a=o.charCodeAt(p))<48||a>c)return NaN;return parseInt(o,r)}}return+n};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof u&&(m?o(function(){g.valueOf.call(s)}):"Number"!=e(s))?a(new _(f(n)),s,u):f(n)};for(var h,w=s(7)?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)c(_,h=w[C])&&!c(u,h)&&v(u,h,l(_,h));u.prototype=g,g.constructor=u,s(11)(r,"Number",u)}},139:function(t,n,s){var r=s(10),c=s(17),e=s(6),a=s(140),i="["+a+"]",o=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),l=function(t,n,s){var c={},i=e(function(){return!!a[t]()||"​"!="​"[t]()}),o=c[t]=i?n(v):a[t];s&&(c[s]=o),r(r.P+r.F*i,"String",c)},v=l.trim=function(t,n){return t=String(c(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(p,"")),t};t.exports=l},140:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},144:function(t,n,s){"use strict";var r=s(10),c=s(88)(!0);r(r.P,"Array",{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),s(89)("includes")},145:function(t,n,s){"use strict";var r=s(10),c=s(146);r(r.P+r.F*s(147)("includes"),"String",{includes:function(t){return!!~c(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},146:function(t,n,s){var r=s(67),c=s(17);t.exports=function(t,n,s){if(r(n))throw TypeError("String#"+s+" doesn't accept regex!");return String(c(t))}},147:function(t,n,s){var r=s(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(s){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},158:function(t,n,s){},159:function(t,n,s){},160:function(t,n,s){},210:function(t,n,s){"use strict";var r=s(158);s.n(r).a},211:function(t,n,s){"use strict";var r=s(159);s.n(r).a},212:function(t,n,s){"use strict";var r=s(160);s.n(r).a},249:function(t,n,s){"use strict";s.r(n);s(23);var r=s(141),c=s(195),e=(s(13),s(138),{name:"MRow",props:{gutter:{type:[Number,String]}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}}),a=(s(210),s(1)),i=Object(a.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",style:this.rowStyle},[this._t("default")],2)},[],!1,null,"71421f81",null);i.options.__file="row.vue";var o=i.exports,p=s(9),l=(s(144),s(145),s(20),s(29),function(t){var n=Object.keys(t),s=!0;return n.forEach(function(t){["span","offset"].includes(t)||(s=!1)}),s}),v={name:"MCol",data:function(){return{gutter:0}},props:{span:{type:[String,Number]},offset:{type:[String,Number]},ipad:{type:Object,validator:l},narrowPc:{type:Object,validator:l},pc:{type:Object,validator:l},widePc:{type:Object,validator:l}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,r=this.narrowPc,c=this.pc,e=this.widePc,a=this.createClasses;return Object(p.a)(a({span:t,offset:n})).concat(Object(p.a)(a(s,"ipad-")),Object(p.a)(a(r,"narrow-pc-")),Object(p.a)(a(c,"pc-")),Object(p.a)(a(e,"wide-pc-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}}},d=(s(211),Object(a.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"dfb9b366",null));d.options.__file="col.vue";var u=d.exports,_={components:{"m-button":r.a,"m-button-group":c.a,"m-row":o,"m-col":u},data:function(){return{code1:'<m-row>\n                <m-col span="24"><div class="grid-content bg-purple-dark"></div></m-col>\n                </m-row>\n                <m-row>\n                  <m-col span="12"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="12"><div class="grid-content bg-purple-light"></div></m-col>\n                </m-row>\n                <m-row>\n                  <m-col span="8"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="8"><div class="grid-content bg-purple-light"></div></m-col>\n                  <m-col span="8"><div class="grid-content bg-purple"></div></m-col>\n                </m-row>\n                <m-row>\n                  <m-col span="6"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>\n                  <m-col span="6"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>\n                </m-row>\n                <m-row>\n                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>\n                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>\n                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>\n                </m-row>\n '.replace(/^ {8}/gm,"").trim(),code2:' <m-row :gutter="20">\n                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>\n            </m-row>\n '.replace(/^ {8}/gm,"").trim(),code3:'\n                <m-row :gutter="20">\n                <m-col span="16"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>\n            </m-row>\n            <m-row :gutter="20">\n                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n            </m-row>\n            <m-row :gutter="20">\n                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="16"><div class="grid-content bg-purple"></div></m-col>\n                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>\n            </m-row>\n                ',code4:'\n            <m-row :gutter="20">\n    <m-col span="2" :phone="{span:24}" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">\n        <div class="grid-content bg-purple"></div>\n    </m-col>\n    <m-col span="22" :phone="{span:24}" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">\n        <div class="grid-content bg-purple"></div>\n    </m-col>\n</m-row>\n                '.trim()}}},g=(s(212),Object(a.a)(_,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("h3",{staticClass:"section"},[t._v("基础用法")]),t._v(" "),s("p",[t._v("使用单一分栏创建基础的栅格布局。")]),t._v(" "),s("div",{staticClass:"demo-wrapper"},[s("m-row",[s("m-col",{attrs:{span:"24"}},[s("div",{staticClass:"grid-content bg-purple-dark"})])],1),t._v(" "),s("m-row",[s("m-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-content bg-purple-light"})])],1),t._v(" "),s("m-row",[s("m-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),s("m-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("m-row",[s("m-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),s("m-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"6"}},[s("div",{staticClass:"grid-content bg-purple-light"})])],1),t._v(" "),s("m-row",[s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:"4"}},[s("div",{staticClass:"grid-content bg-purple-light"})])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.code1))])])],1),t._v(" "),s("h3",{staticClass:"section"},[t._v("分栏间隔")]),t._v(" "),s("p",[t._v("分栏之间存在间隔。")]),t._v(" "),s("div",{staticClass:"demo-wrapper"},[s("m-row",{attrs:{gutter:20}},[s("m-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.code2))])])],1),t._v(" "),s("h3",{staticClass:"section"},[t._v("混合布局")]),t._v(" "),s("p",[t._v("通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。")]),t._v(" "),s("div",{staticClass:"demo-wrapper"},[s("m-row",{attrs:{gutter:20}},[s("m-col",{attrs:{span:16}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("m-row",{attrs:{gutter:20}},[s("m-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("m-row",{attrs:{gutter:20}},[s("m-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:16}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.code3))])])],1),t._v(" "),s("h3",{staticClass:"section"},[t._v("响应式布局")]),t._v(" "),s("p",[t._v("预设了五个响应尺寸：phone、ipad、narrow-pc、pc 和 wide-pc。")]),t._v(" "),s("div",{staticClass:"demo-wrapper"},[s("m-row",{attrs:{gutter:20}},[s("m-col",{attrs:{span:"",phone:{span:24},ipad:{span:8},"narrow-pc":{span:4},pc:{span:2},"wide-pc":{span:1}}},[s("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),s("m-col",{attrs:{span:22,phone:{span:24},ipad:{span:16},"narrow-pc":{span:20},pc:{span:22},"wide-pc":{span:23}}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.code4))])])],1),t._v(" "),s("h3",{staticClass:"section"},[t._v("Row Attributes")]),t._v(" "),t._m(0),t._v(" "),s("h3",{staticClass:"section"},[t._v("Col Attributes")]),t._v(" "),t._m(1)])},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("gutter")]),t._v(" "),s("td",[t._v("栅格间隔")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("0")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("span")]),t._v(" "),s("td",[t._v("栅格占据的列数")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("24")])]),t._v(" "),s("tr",[s("td",[t._v("offset")]),t._v(" "),s("td",[t._v("栅格左侧的间隔格数")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("<768px响应式栅格数或者栅格属性对象")]),t._v(" "),s("td",[t._v("number/object (例如： {span: 4, offset: 4})")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("ipad")]),t._v(" "),s("td",[t._v("≥768px响应式栅格数或者栅格属性对象")]),t._v(" "),s("td",[t._v("number/object (例如： {span: 4, offset: 4})")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("narrow-pc")]),t._v(" "),s("td",[t._v("≥992px 响应式栅格数或者栅格属性对象")]),t._v(" "),s("td",[t._v("number/object (例如： {span: 4, offset: 4})")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("pc")]),t._v(" "),s("td",[t._v("≥1200px 响应式栅格数或者栅格属性对象")]),t._v(" "),s("td",[t._v("number/object (例如： {span: 4, offset: 4})")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("wide-pc")]),t._v(" "),s("td",[t._v("≥1920px 响应式栅格数或者栅格属性对象")]),t._v(" "),s("td",[t._v("number/object (例如： {span: 4, offset: 4})")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,"34bd0fa4",null));g.options.__file="grid-demo.vue";n.default=g.exports}}]);