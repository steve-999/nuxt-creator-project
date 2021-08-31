exports.ids = [23];
exports.modules = {

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("41c25ef5", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".room-details-container[data-v-6d5aa1b2]{width:39%;margin:2vh 1%}.room_name[data-v-6d5aa1b2]{font-size:1.2em;font-weight:600;background-color:#2e8b57;height:2em;padding:5px 6px;color:#fff;box-sizing:border-box;border-top-left-radius:10px;border-top-right-radius:10px}.room-details__ul[data-v-6d5aa1b2]{list-style-type:none;margin:0;padding:0}.room-details__li[data-v-6d5aa1b2]{width:100%;font-size:.8em;font-weight:600;background-color:#d3f8d2;border-left:1px solid #2e8b57;border-right:1px solid #2e8b57;padding:0 6px}.room-details__li[data-v-6d5aa1b2]:last-child{border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-bottom:1px solid #2e8b57;padding-bottom:4px}.room-details__div[data-v-6d5aa1b2]{display:flex;flex-direction:row}.room-details__li span[data-v-6d5aa1b2]{padding:7px 8px}.room-details__key[data-v-6d5aa1b2]{display:inline-block;width:50%;text-align:left}.room-details__value[data-v-6d5aa1b2]{display:inline-block;width:50%;text-align:right;padding-right:5%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RoomDetails.vue?vue&type=template&id=6d5aa1b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.room)?_c('div',{staticClass:"room-details-container"},[_vm._ssrNode("<div class=\"room_name\" data-v-6d5aa1b2>"+_vm._ssrEscape("Room "+_vm._s(_vm.room.room_name))+"</div> <ul class=\"room-details__ul\" data-v-6d5aa1b2>"+(_vm._ssrList((_vm.keys_list),function(key){return ("<li class=\"room-details__li\" data-v-6d5aa1b2><div class=\"room-details__div\""+(_vm._ssrStyle(null,null, { display: (_vm.room[key] !== null) ? '' : 'none' }))+" data-v-6d5aa1b2><span class=\"room-details__key\" data-v-6d5aa1b2>"+_vm._ssrEscape(_vm._s(_vm.display_keys[key]))+"</span> <span class=\"room-details__value\" data-v-6d5aa1b2>"+_vm._ssrEscape(_vm._s(_vm.room[key]))+"</span></div></li>")}))+"</ul>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RoomDetails.vue?vue&type=template&id=6d5aa1b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RoomDetails.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RoomDetailsvue_type_script_lang_js_ = ({
  name: 'RoomDetails',
  props: ['room_details', 'room_prices'],

  data() {
    return {
      room: undefined,
      keys_list: ['price_per_person_per_week', 'deposit_per_person', 'fee_per_person', 'ensuite', 'floor', 'floor_space', 'disabled_access'],
      display_keys: {
        'price_per_person_per_week': 'Rent',
        'deposit_per_person': 'Deposit',
        'fee_per_person': 'Fee',
        'ensuite': 'Ensuite',
        'floor': 'Floor',
        'floor_space': 'Floor space',
        'disabled_access': 'Disabled access'
      }
    };
  },

  mounted() {
    if (!this.room && this.room_details && this.room_prices) {
      this.create_room_obj();
    }
  },

  updated() {
    if (!this.room && this.room_details && this.room_prices) {
      this.create_room_obj();
    }
  },

  methods: {
    create_room_obj() {
      if (this.room_details && this.room_prices) {
        const room = {};
        const room_details = this.room_details;
        room.room_id = room_details.room_id;
        room.room_name = room_details.room_name;
        room.disabled_access = room_details.disabled_access ? 'Yes' : 'No';
        room.ensuite = room_details.ensuite ? 'Yes' : 'No';
        room.floor = room_details.floor ? room_details.floor : null;
        room.floor_space = parseFloat(room_details.floor_space) > 0 ? room_details.floor_space : null;
        const room_prices = this.room_prices;
        room.room_name = room_prices.room_name;
        room.deposit_per_person = '£' + Math.round(room_prices.deposit_per_person);
        room.price_per_person_per_week = `£${Math.round(52 / 12 * room_prices.price_per_person_per_week)} pcm`;
        room.fee_per_person = parseFloat(room_prices.fee_per_person) > 0 ? '£' + Math.round(room_prices.fee_per_person) : null;
        this.room = { ...room
        };
      }
    }

  }
});
// CONCATENATED MODULE: ./components/RoomDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoomDetailsvue_type_script_lang_js_ = (RoomDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RoomDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RoomDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d5aa1b2",
  "4d6113d1"
  
)

/* harmony default export */ var RoomDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=room-details.js.map