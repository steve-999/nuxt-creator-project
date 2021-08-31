exports.ids = [16];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("66207756", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputListWithLabels_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputListWithLabels_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputListWithLabels_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputListWithLabels_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputListWithLabels_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input-list-with-labels-container{padding:0}.input-list-with-labels__h3{font-size:1.2em;font-weight:600;text-align:left;padding:5px 0;margin:5px 0}.input-list-with-labels__row{display:flex;flex-direction:row}.input-list-with-labels__input,.input-list-with-labels__label{display:inline-block;padding:5px 8px;margin:4px auto;font-family:\"Open Sans\",sans-serif;font-size:.8em;text-align:left;box-sizing:border-box;height:2em}.input-list-with-labels__label{width:50%}.input-list-with-labels__input{border:1px solid #ccc;border-radius:8px;width:50%}.input-list-with-labels__input:focus{outline:none;border:none;box-shadow:var(--orangey-red-color) 0 0 2px 2px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/InputListWithLabels.vue?vue&type=template&id=41ae3faa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.input_object)?_c('div',{staticClass:"input-list-with-labels-container"},[_vm._ssrNode(((_vm.heading)?("<h3 class=\"input-list-with-labels__h3\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h3>"):"<!---->")+" <form>"+(_vm._ssrList((_vm.keys_list),function(key){return ("<div class=\"input-list-with-labels__row\"><label class=\"input-list-with-labels__label\">"+_vm._ssrEscape(_vm._s(_vm.display_labels_object[key]))+"</label> <input type=\"text\""+(_vm._ssrAttr("name",key))+(_vm._ssrAttr("value",_vm.input_object[key]))+" class=\"input-list-with-labels__input\"></div>")}))+"</form>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/generic/InputListWithLabels.vue?vue&type=template&id=41ae3faa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/InputListWithLabels.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InputListWithLabelsvue_type_script_lang_js_ = ({
  name: 'InputListWithLabels',
  props: ['heading', 'input_object', 'display_labels_object', 'indices'],
  computed: {
    keys_list() {
      return this.display_labels_object ? Object.keys(this.display_labels_object) : [];
    }

  },
  methods: {
    handleInput(e) {
      this.$emit('handleInput', e.target.name, e.target.value, this.indices);
    }

  }
});
// CONCATENATED MODULE: ./components/generic/InputListWithLabels.vue?vue&type=script&lang=js&
 /* harmony default export */ var generic_InputListWithLabelsvue_type_script_lang_js_ = (InputListWithLabelsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/generic/InputListWithLabels.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  generic_InputListWithLabelsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e9c16f2"
  
)

/* harmony default export */ var InputListWithLabels = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=generic-input-list-with-labels.js.map