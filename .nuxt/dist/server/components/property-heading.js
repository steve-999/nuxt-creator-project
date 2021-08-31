exports.ids = [20];
exports.modules = {

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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("dc22cba4", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHeading.vue?vue&type=template&id=96bc51e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.propertyData)?_c('div',{staticClass:"page-heading-container"},[_vm._ssrNode("<table class=\"page-heading-table\" data-v-96bc51e8>","</table>",[_vm._ssrNode(((_vm.show_top_rows)?("<tr data-v-96bc51e8><td data-v-96bc51e8> </td><td data-v-96bc51e8><h1 data-v-96bc51e8>"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</h1></td></tr>"):"<!---->")+" "),(_vm.show_top_rows)?_vm._ssrNode("<tr class=\"page-heading__address\" data-v-96bc51e8>","</tr>",[_vm._ssrNode("<td data-v-96bc51e8>","</td>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon",attrs:{"icon":"map-marker"}})],1),_vm._ssrNode(" <td data-v-96bc51e8>"+_vm._ssrEscape(_vm._s(_vm.addressString))+"</td>")],2):_vm._e(),_vm._ssrNode(" "),(isFinite(_vm.num_rooms) && _vm.num_bedrooms_string)?_vm._ssrNode("<tr class=\"page-heading__num-bedrooms-available\" data-v-96bc51e8>","</tr>",[_vm._ssrNode("<td data-v-96bc51e8>","</td>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon",attrs:{"icon":"bed"}})],1),_vm._ssrNode(" <td data-v-96bc51e8>"+_vm._ssrEscape(_vm._s(_vm.num_bedrooms_string))+"</td>")],2):_vm._e(),_vm._ssrNode(" "),(isFinite(_vm.num_bathrooms) && _vm.num_bathrooms_string)?_vm._ssrNode("<tr class=\"page-heading__num-bathrooms\" data-v-96bc51e8>","</tr>",[_vm._ssrNode("<td data-v-96bc51e8>","</td>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon",attrs:{"icon":"bath"}})],1),_vm._ssrNode(" <td data-v-96bc51e8>"+_vm._ssrEscape(_vm._s(_vm.num_bathrooms_string))+"</td>")],2):_vm._e(),_vm._ssrNode(" "),(_vm.available_from)?_vm._ssrNode("<tr class=\"page-heading__available-from\" data-v-96bc51e8>","</tr>",[_vm._ssrNode("<td data-v-96bc51e8>","</td>",[_c('font-awesome-icon',{staticClass:"page-heading__fa-icon",attrs:{"icon":"calendar-alt"}})],1),_vm._ssrNode(" <td class=\"page-heading__available-from__text\" data-v-96bc51e8>"+_vm._ssrEscape("Available from "+_vm._s(_vm.available_from))+"</td>")],2):_vm._e()],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyHeading.vue?vue&type=template&id=96bc51e8&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHeading.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyHeadingvue_type_script_lang_js_ = ({
  name: 'PropertyHeading',
  props: ['propertyData', 'show_top_rows'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    pageTitle() {
      return this.property ? this.property.room_type : '';
    },

    num_rooms() {
      return Object(shared_code["h" /* get_num_rooms */])(this.property);
    },

    num_bedrooms_string() {
      try {
        return this.num_rooms + ' ' + Object(shared_code["i" /* pluralise_word_for_num */])('bedroom', this.num_rooms);
      } catch (e) {
        return '';
      }
    },

    num_bathrooms() {
      return Object(shared_code["g" /* get_num_bathrooms */])(this.property);
    },

    num_bathrooms_string() {
      try {
        return this.num_bathrooms + ' ' + Object(shared_code["i" /* pluralise_word_for_num */])('bathroom', this.num_bathrooms);
      } catch (e) {
        return '';
      }
    },

    available_from() {
      try {
        return Object(shared_code["a" /* convert_yyyy_mm_dd_to_readable_date */])(Object(shared_code["d" /* get_min_start_date */])(this.property));
      } catch (e) {
        return undefined;
      }
    },

    addressString() {
      try {
        return Object(shared_code["b" /* create_address_string */])(this.property);
      } catch (e) {
        return undefined;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyHeadingvue_type_script_lang_js_ = (PropertyHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyHeading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyHeadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "96bc51e8",
  "69a5ad52"
  
)

/* harmony default export */ var PropertyHeading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-heading-container[data-v-96bc51e8]{width:95%;margin:0 auto}.page-heading-table[data-v-96bc51e8]{width:100%;border:none}h1[data-v-96bc51e8]{color:#483d8b;font-size:1.75em;margin:20px auto 0}.page-heading-table td[data-v-96bc51e8]{padding:4px 0 4px 8px;text-align:left}table tr td[data-v-96bc51e8]:nth-child(2){padding:12px;font-size:1.2em;font-weight:700;color:#555}.page-heading__address[data-v-96bc51e8]{position:relative}table tr td.page-heading__available-from__text[data-v-96bc51e8]{font-size:.9em}.page-heading__fa-icon[data-v-96bc51e8]{margin:0 auto;color:#20b2aa}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=property-heading.js.map