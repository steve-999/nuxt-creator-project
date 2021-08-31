exports.ids = [12];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/DisplayBooleanList.vue?vue&type=template&id=12a4b1a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"DisplayBooleanList__outer-list-container"},[_vm._ssrNode(((_vm.heading)?("<h2 class=\"DisplayBooleanList__h2\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h2>"):"<!---->")+" "),_vm._ssrNode("<div class=\"DisplayBooleanList__list-container\">","</div>",[_vm._ssrNode("<ul class=\"DisplayBooleanList__list__ul\">","</ul>",_vm._l((_vm.input_list_keys),function(item){return _vm._ssrNode("<li class=\"DisplayBooleanList__list__li\">","</li>",[_vm._ssrNode("<span class=\"DisplayBooleanList__span-icon\">","</span>",[_c('font-awesome-icon',{staticClass:"icon",style:({color: ("" + (_vm.input_list_object[item] ? 'green' : 'crimson'))}),attrs:{"icon":("" + (_vm.input_list_object[item] ? 'check' : 'times'))}})],1),_vm._ssrNode(" <span class=\"DisplayBooleanList__span-text\">"+_vm._ssrEscape(_vm._s(_vm.capitalize_replace_underscore(item)))+"</span>")],2)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/generic/DisplayBooleanList.vue?vue&type=template&id=12a4b1a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/DisplayBooleanList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DisplayBooleanListvue_type_script_lang_js_ = ({
  name: 'DisplayBooleanList',
  props: ['input_object_data', 'heading'],
  computed: {
    input_list_object() {
      return this.input_object_data ? this.input_object_data : undefined;
    },

    input_list_keys() {
      if (!this.input_object_data) return [];
      return Object.keys(this.input_object_data).length > 0 ? Object.keys(this.input_object_data) : [];
    }

  },
  methods: {
    capitalize_replace_underscore(str) {
      const new_str = str[0].toUpperCase() + str.slice(1);
      return new_str.replace('_', ' ');
    }

  }
});
// CONCATENATED MODULE: ./components/generic/DisplayBooleanList.vue?vue&type=script&lang=js&
 /* harmony default export */ var generic_DisplayBooleanListvue_type_script_lang_js_ = (DisplayBooleanListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/generic/DisplayBooleanList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  generic_DisplayBooleanListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3aa738ef"
  
)

/* harmony default export */ var DisplayBooleanList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=generic-display-boolean-list.js.map