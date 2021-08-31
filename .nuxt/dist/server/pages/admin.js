exports.ids = [26,4];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPropertyModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPropertyModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPropertyModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPropertyModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPropertyModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".select-property-container{width:90%;margin:0 auto 10px}.select-property__button{font-size:1.1em;font-weight:500;margin:.8em;padding:6px 20px;background-color:#2cb66a;color:#fff;outline:none;border:none;border-radius:7px;cursor:pointer;transition:.2s}.select-property__button:hover{background-color:#5fabf8}.modal-container{background:rgba(94,94,94,.678);position:absolute;left:0;top:0;height:100%;width:100%;z-index:99}.modal-content-container{background-color:#fff;width:80%;margin:20vh auto 0;padding:20px;border-radius:15px}.select-property__ul{list-style-type:none;padding:0;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center;width:100%;margin:0 auto}.select-property__li{display:inline-block;background-color:#d8f0f3;border:1px solid #ddd;width:31%;margin:5px;padding:5px 7px;box-sizing:border-box;border-radius:8px}.select-property__li:hover{background-color:#7debfa;cursor:pointer}.select-property__title{font-size:.75em;font-weight:700}.select-property__address{font-size:.6em;font-weight:600}.select-property__fa-icon{font-size:.9em;padding:2px 5px}.select-property__num-bathrooms,.select-property__num-bedrooms{display:inline-block;font-size:.7em;padding:2px 5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("563d3cd9", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/SelectPropertyModal.vue?vue&type=template&id=290b1b9d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show_modal)?_c('div',{staticClass:"modal-container"},[_vm._ssrNode("<div class=\"modal-content-container\">","</div>",[_vm._ssrNode("<h3 class=\"modal-content__h3\">Please select a property to edit</h3> "),_vm._ssrNode("<ul class=\"select-property__ul\">","</ul>",_vm._l((_vm.properties),function(property){return _vm._ssrNode("<li class=\"select-property__li\">","</li>",[_vm._ssrNode("<div class=\"select-property__card\">","</div>",[_vm._ssrNode("<div class=\"select-property__title\">"+_vm._ssrEscape(_vm._s(_vm.get_title(property)))+"</div> <div class=\"select-property__address\">"+_vm._ssrEscape(_vm._s(_vm.get_address_string(property)))+"</div> "),_vm._ssrNode("<div class=\"select-property__num-bedrooms-num-bathrooms\">","</div>",[_vm._ssrNode("<span class=\"select-property__fa-icon\">","</span>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon fa-sm",attrs:{"icon":"bed"}})],1),_vm._ssrNode(" <span class=\"select-property__num-bedrooms\">"+_vm._ssrEscape(_vm._s(_vm.get_num_bedrooms(property)))+"</span> "),_vm._ssrNode("<span class=\"select-property__fa-icon\">","</span>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon fa-sm",attrs:{"icon":"bath"}})],1),_vm._ssrNode(" <span class=\"select-property__num-bathrooms\">"+_vm._ssrEscape(_vm._s(_vm.get_num_bathrooms(property)))+"</span>")],2)],2)])}),0),_vm._ssrNode(" <button class=\"select-property__button\">Close</button>")],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/SelectPropertyModal.vue?vue&type=template&id=290b1b9d&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/SelectPropertyModal.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SelectPropertyModalvue_type_script_lang_js_ = ({
  name: 'SelectPropertyModal',
  props: ['propertiesData', 'show_modal'],

  data() {
    return {
      properties: undefined
    };
  },

  mounted() {
    document.addEventListener('click', this.handleClickForModal);
    this.properties = this.propertiesData ? this.propertiesData : undefined;
  },

  updated() {
    if (!this.properties && this.propertiesData) {
      this.properties = this.propertiesData ? this.propertiesData : undefined;
    }
  },

  destroyed() {
    document.removeEventListener('click', this.handleClickForModal);
  },

  methods: {
    get_title(property) {
      return property ? property.room_type : '';
    },

    get_address_string(property) {
      return Object(shared_code["b" /* create_address_string */])(property);
    },

    get_num_bedrooms(property) {
      return Object(shared_code["h" /* get_num_rooms */])(property);
    },

    get_num_bathrooms(property) {
      return Object(shared_code["g" /* get_num_bathrooms */])(property);
    },

    handleClickForModal(e) {
      if (e.target.className === 'modal-container' && this.show_modal === true) {
        this.$emit('closeModal');
      }
    },

    handleSelectPropertyClick(property_id) {
      this.$emit('handleSelectPropertyClick', property_id);
    },

    handleClickCloseModal() {
      this.$emit('closeModal');
    }

  }
});
// CONCATENATED MODULE: ./components/admin/SelectPropertyModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_SelectPropertyModalvue_type_script_lang_js_ = (SelectPropertyModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/admin/SelectPropertyModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_SelectPropertyModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4405e199"
  
)

/* harmony default export */ var SelectPropertyModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_49fb327e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_49fb327e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_49fb327e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_49fb327e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_49fb327e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-heading-table[data-v-49fb327e],.page-heading-table td[data-v-49fb327e]{border:1px solid grey}.admin-page-container[data-v-49fb327e]{width:100%}.admin-content-container[data-v-49fb327e]{width:90%;margin:0 auto}.select-property-container[data-v-49fb327e]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.select-property__button[data-v-49fb327e]{background-color:#5b8eec;margin:20px auto;text-align:center}.selected-property__div[data-v-49fb327e]{font-size:1.05em;font-weight:600;color:#444;padding:8px 0;margin:0 auto 10px;text-align:center;height:40px}.tabs-container[data-v-49fb327e]{margin:0 auto}.tabs__ul[data-v-49fb327e]{list-style-type:none;display:flex;flex-direction:row;justify-content:center;padding:0;margin:0;position:relative;top:-5px}.tabs__li[data-v-49fb327e]{display:inline-block}.tabs__li a[data-v-49fb327e]{margin:0 1px;padding:5px 12px;background-color:#7669cf;border-top-left-radius:12px;border-top-right-radius:12px;color:#fff;font-size:1em;font-weight:600;cursor:pointer;transition:.2s;text-decoration:none}.tabs__li a[data-v-49fb327e]:hover{background-color:#ba55d3}.tabs__li a.nuxt-link-active[data-v-49fb327e]{background-color:var(--orangey-red-color)}.admin-edit-container[data-v-49fb327e]{width:90%;margin:0 auto 60px;padding:20px 0;border:2px solid #dcdcdc;border-radius:15px;background-color:#f4f4f4;min-height:500px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=template&id=49fb327e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.properties)?_c('div',{staticClass:"admin-page-container fadeInAnimation"},[_vm._ssrNode("<div class=\"select-property-container\" data-v-49fb327e>","</div>",[_vm._ssrNode("<button class=\"select-property__button\" data-v-49fb327e>Select a property to edit</button> "),_c('SelectPropertyModal',{attrs:{"propertiesData":_vm.properties,"show_modal":_vm.show_modal},on:{"handleSelectPropertyClick":_vm.handleSelectPropertyClick,"closeModal":_vm.closeModal}}),_vm._ssrNode(" <div class=\"selected-property__div\""+(_vm._ssrStyle(null,null, { display: (_vm.selected_property_id) ? '' : 'none' }))+" data-v-49fb327e>"+_vm._ssrEscape("Selected property: "+_vm._s(_vm.selected_property_string))+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"admin-content-container\" data-v-49fb327e>","</div>",[(!_vm.show_modal)?_vm._ssrNode("<div class=\"tabs-container\" data-v-49fb327e>","</div>",[_vm._ssrNode("<ul class=\"tabs__ul\" data-v-49fb327e>","</ul>",_vm._l((_vm.tabs.length),function(idx){return _vm._ssrNode("<div data-v-49fb327e>","</div>",[_vm._ssrNode("<li class=\"tabs__li\" data-v-49fb327e>","</li>",[_c('NuxtLink',{ref:_vm.tabs[idx-1].route_name,refInFor:true,staticClass:"tab",attrs:{"to":("/admin/" + (_vm.tabs[idx-1].route_name))},on:{"click":function($event){return _vm.handleClickTab(_vm.tabs[idx-1].route_name)}}},[_vm._v("\n                            "+_vm._s(_vm.tabs[idx-1].text)+"\n                        ")])],1)])}),0)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"admin-edit-container\" data-v-49fb327e>","</div>",[_c('NuxtChild',{attrs:{"propertiesData":_vm.properties,"property_id":_vm.selected_property_id}})],1)],2)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin.vue?vue&type=template&id=49fb327e&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);

// EXTERNAL MODULE: ./environment/environment.js
var environment = __webpack_require__(44);

// EXTERNAL MODULE: ./components/admin/SelectPropertyModal.vue + 4 modules
var SelectPropertyModal = __webpack_require__(148);

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=script&lang=js&
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




/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  name: 'Admin',

  data() {
    return {
      properties: undefined,
      show_modal: true,
      selected_property_id: undefined,
      tabs: [{
        text: 'Property Info',
        route_name: 'property_info'
      }, {
        text: 'Room Details',
        route_name: 'room_details'
      }, {
        text: 'Contracts',
        route_name: 'contracts'
      }, {
        text: 'Media',
        route_name: 'media'
      }]
    };
  },

  components: {
    SelectPropertyModal: SelectPropertyModal["default"]
  },

  fetch() {
    const url = `${environment["a" /* BASE_API_URL */]}/properties`;
    fetch(url).then(res => res.json()).then(data => {
      this.properties = data;
    });
  },

  computed: {
    selected_property_string() {
      if (!this.selected_property_id) return undefined;
      const property = this.properties.find(property => property.property_id == this.selected_property_id);
      const address_string = Object(shared_code["b" /* create_address_string */])(property);
      const property_title = property.room_type;
      const num_bedrooms = Object(shared_code["h" /* get_num_rooms */])(property);
      const num_bathrooms = Object(shared_code["g" /* get_num_bathrooms */])(property);
      const num_bedrooms_string = Object(shared_code["i" /* pluralise_word_for_num */])('bedroom', num_bedrooms);
      const num_bathrooms_string = Object(shared_code["i" /* pluralise_word_for_num */])('bathroom', num_bathrooms);
      return `${property_title}, ${address_string}, ${num_bedrooms} ${num_bedrooms_string}, ${num_bathrooms} ${num_bathrooms_string}`;
    }

  },
  methods: {
    handleSelectPropertyClick(property_id) {
      this.selected_property_id = property_id;
      this.show_modal = false;
      this.$router.push({
        path: '/admin/property_info'
      });
    },

    handleClickOpenModal() {
      this.show_modal = true;
    },

    handleClickTab(route_name) {
      if (!this.selected_property_id) {
        alert('Please select a property to edit');
        return;
      }

      this.$router.push({
        path: `/admin/${route_name}`
      });
    },

    closeModal() {
      this.show_modal = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49fb327e",
  "0f5f3697"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create_address_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return get_num_bathrooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return get_min_start_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convert_yyyy_mm_dd_to_readable_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get_min_price_contract_idx; });
/* unused harmony export isPlural */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pluralise_word_for_num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return get_num_rooms; });
/* unused harmony export isNumber */
/* unused harmony export get_num_contracts */
/* unused harmony export get_contract_total_monthly_price */
/* unused harmony export get_contract_total_deposit */
/* unused harmony export get_min_total_amount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return get_min_total_monthly_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return get_min_total_deposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return update_mongodb; });
/* unused harmony export DEBOUNCE_MS */
/* unused harmony export debounce */
/* harmony import */ var _environment_environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function create_address_string(propertyObj) {
  try {
    const a = propertyObj.address;
    const optional_property_name = a.property_name ? `${a.property_name}, ` : '';
    return `${optional_property_name}${a.property_number} ${a.road_name}, ${a.city},  ${a.postcode},  ${a.country} `;
  } catch (e) {
    return undefined;
  }
}
const get_num_bathrooms = propertyObj => {
  try {
    return propertyObj.bathrooms;
  } catch (e) {
    return null;
  }
};
function get_min_start_date(propertyObj) {
  if (!propertyObj || !('contracts' in propertyObj) || propertyObj.contracts.length === 0) return undefined;
  return propertyObj.contracts.map(c => c.start_date).sort()[0];
}
function convert_yyyy_mm_dd_to_readable_date(datestr) {
  const [year, month, day] = datestr.split('-');
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const readable_str = `${parseInt(day)} ${months[parseInt(month)]} ${year}`;
  return readable_str;
}
function get_min_price_contract_idx(propertyObj) {
  if (!propertyObj || !('contracts' in propertyObj) || propertyObj.contracts.length === 0) return undefined;
  const key = 'price_per_person_per_week';
  const contracts = propertyObj.contracts;
  let min_val = 9999999;
  let min_contract_idx = 999999;
  contracts.forEach((contract, contract_idx) => {
    contract.prices.forEach(priceObj => {
      const price = parseInt(priceObj[key]);

      if (price < min_val && price !== 0) {
        min_val = price;
        min_contract_idx = contract_idx;
      }
    });
  });
  if (min_val === 9999999) return undefined;
  return min_contract_idx;
}
const isPlural = num => Number(num) !== 1;
const pluralise_word_for_num = (singular_word, num) => `${singular_word}${isPlural(num) ? 's' : ''}`;
function get_num_rooms(propertyObj) {
  const p = propertyObj;
  const num_room_details = 'room_details' in p ? p.room_details.length : 0;
  let num_room_prices;

  if ('contracts' in p && p.contracts.length > 0 && 'prices' in p.contracts[0]) {
    num_room_prices = p.contracts[0].prices.length;
  }

  return Math.max(num_room_details, num_room_prices);
}
const isNumber = value => typeof value === 'number' && isFinite(value);
const get_num_contracts = propertyObj => {
  try {
    return propertyObj.contracts.length;
  } catch (e) {
    return null;
  }
};
const get_contract_total_monthly_price = (propertyObj, contract_idx) => {
  try {
    const prices_per_week_array = propertyObj.contracts[contract_idx].prices.map(obj => Number(obj.price_per_person_per_week));
    return Math.round(Math.ceil(52 / 12 * prices_per_week_array.reduce((acc, val) => acc + val, 0)));
  } catch (e) {
    return undefined;
  }
};
const get_contract_total_deposit = (propertyObj, contract_idx) => {
  try {
    const deposits_array = propertyObj.contracts[contract_idx].prices.map(obj => Number(obj.deposit_per_person));
    return Math.round(deposits_array.reduce((acc, val) => acc + val, 0));
  } catch (e) {
    return undefined;
  }
};
function get_min_total_amount(propertyObj, calculation_fn) {
  const num_contracts = get_num_contracts(propertyObj);
  let min_total_amount = 99999;

  for (let i = 0; i < num_contracts; i++) {
    const contract_total = calculation_fn(propertyObj, i);

    if (isNumber(contract_total) && contract_total < min_total_amount) {
      min_total_amount = contract_total;
    }
  }

  if (min_total_amount === 99999) {
    return undefined;
  }

  return min_total_amount;
}
const get_min_total_monthly_price = propertyObj => get_min_total_amount(propertyObj, get_contract_total_monthly_price);
const get_min_total_deposit = propertyObj => get_min_total_amount(propertyObj, get_contract_total_deposit);
const update_mongodb = (property_id, update_key, update_val) => {
  const url = `${_environment_environment_js__WEBPACK_IMPORTED_MODULE_0__[/* BASE_API_URL */ "a"]}/properties/${property_id}`;
  const body = {
    update_key,
    update_val
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(url, body).then(resp => console.log(resp.data)).catch(err => console.log(err.message));
};
const DEBOUNCE_MS = 2000;
function debounce(fn, ms = 300) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), ms);
  };
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_API_URL; });
const BASE_API_URL = 'http://localhost:5000/api'; //export const BASE_API_URL = 'https://creator-project-e5c73.ondigitalocean.app/api'

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9eef29aa", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=admin.js.map