(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{271:function(t,e,l){var content=l(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(41).default)("066f948e",content,!0,{sourceMap:!1})},288:function(t,e,l){"use strict";l(271)},289:function(t,e,l){var n=l(40)(!1);n.push([t.i,".DisplayBooleanList__outer-list-container{width:100%}.DisplayBooleanList__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayBooleanList__list-container{width:100%}.DisplayBooleanList__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayBooleanList__list__li{width:31%;margin-top:35px;text-align:left;font-size:.95em;font-weight:600}.DisplayBooleanList__list__li .icon{font-size:.8em;margin-right:15px}.DisplayListForObject__outer-list-container{width:100%}.DisplayListForObject__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayListForObject__list-container{width:100%}.DisplayListForObject__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayListForObject__list__li{width:31%;margin-top:35px;text-align:left}.DisplayListForObject__span-text,.DisplayListForObject__span-value{display:inline-block;text-align:left;font-size:.95em;font-weight:600}.DisplayListForObject__span-text{min-width:60%}",""]),t.exports=n},292:function(t,e,l){"use strict";l.r(e);l(37),l(44),l(53),l(70);var n={name:"DisplayListForObject",props:["input_object_data","heading"],computed:{input_list_object:function(){return this.input_object_data?this.input_object_data:void 0},input_list_keys:function(){return this.input_object_data?Object.keys(this.input_object_data):[]}},methods:{capitalize_replace_underscore:function(t){return(t[0].toUpperCase()+t.slice(1)).replace("_"," ")},replace_empty_string_with_hyphen:function(t){return 0===t.length?"-":t}}},_=(l(288),l(32)),component=Object(_.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"DisplayListForObject__outer-list-container"},[l("h2",{staticClass:"DisplayListForObject__h2"},[t._v(t._s(t.heading))]),t._v(" "),l("div",{staticClass:"DisplayListForObject__list-container"},[l("ul",{staticClass:"DisplayListForObject__list__ul"},t._l(t.input_list_keys,(function(e){return l("li",{key:e,staticClass:"DisplayListForObject__list__li"},[l("span",{staticClass:"DisplayListForObject__span-text"},[t._v(t._s(t.capitalize_replace_underscore(e)))]),t._v(" "),l("span",{staticClass:"DisplayListForObject__span-value"},[t._v(t._s(t.replace_empty_string_with_hyphen(t.input_object_data[e])))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);