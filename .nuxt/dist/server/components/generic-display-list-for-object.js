exports.ids = [13];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("066f948e", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".DisplayBooleanList__outer-list-container{width:100%}.DisplayBooleanList__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayBooleanList__list-container{width:100%}.DisplayBooleanList__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayBooleanList__list__li{width:31%;margin-top:35px;text-align:left;font-size:.95em;font-weight:600}.DisplayBooleanList__list__li .icon{font-size:.8em;margin-right:15px}.DisplayListForObject__outer-list-container{width:100%}.DisplayListForObject__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayListForObject__list-container{width:100%}.DisplayListForObject__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayListForObject__list__li{width:31%;margin-top:35px;text-align:left}.DisplayListForObject__span-text,.DisplayListForObject__span-value{display:inline-block;text-align:left;font-size:.95em;font-weight:600}.DisplayListForObject__span-text{min-width:60%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/DisplayListForObject.vue?vue&type=template&id=7b737b0e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"DisplayListForObject__outer-list-container"},[_vm._ssrNode("<h2 class=\"DisplayListForObject__h2\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h2> <div class=\"DisplayListForObject__list-container\"><ul class=\"DisplayListForObject__list__ul\">"+(_vm._ssrList((_vm.input_list_keys),function(key){return ("<li class=\"DisplayListForObject__list__li\"><span class=\"DisplayListForObject__span-text\">"+_vm._ssrEscape(_vm._s(_vm.capitalize_replace_underscore(key)))+"</span> <span class=\"DisplayListForObject__span-value\">"+_vm._ssrEscape(_vm._s(_vm.replace_empty_string_with_hyphen(_vm.input_object_data[key])))+"</span></li>")}))+"</ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/generic/DisplayListForObject.vue?vue&type=template&id=7b737b0e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/DisplayListForObject.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DisplayListForObjectvue_type_script_lang_js_ = ({
  name: 'DisplayListForObject',
  props: ['input_object_data', 'heading'],
  computed: {
    input_list_object() {
      return this.input_object_data ? this.input_object_data : undefined;
    },

    input_list_keys() {
      return this.input_object_data ? Object.keys(this.input_object_data) : [];
    }

  },
  methods: {
    capitalize_replace_underscore(str) {
      const new_str = str[0].toUpperCase() + str.slice(1);
      return new_str.replace('_', ' ');
    },

    replace_empty_string_with_hyphen(str) {
      return str.length === 0 ? '-' : str;
    }

  }
});
// CONCATENATED MODULE: ./components/generic/DisplayListForObject.vue?vue&type=script&lang=js&
 /* harmony default export */ var generic_DisplayListForObjectvue_type_script_lang_js_ = (DisplayListForObjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/generic/DisplayListForObject.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  generic_DisplayListForObjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "70f3b79a"
  
)

/* harmony default export */ var DisplayListForObject = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=generic-display-list-for-object.js.map