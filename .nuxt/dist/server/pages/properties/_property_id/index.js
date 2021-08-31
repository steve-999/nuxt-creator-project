exports.ids = [32,5,6,7,8,9,10,11,12,13,17,18,19,20,21,23,24,25];
exports.modules = Array(43).concat([
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_API_URL; });
const BASE_API_URL = 'http://localhost:5000/api'; //export const BASE_API_URL = 'https://creator-project-e5c73.ondigitalocean.app/api'

/***/ }),
/* 45 */
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

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9ca0d6b8", content, true, context)
};

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f793de0", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0913000f", content, true, context)
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3035c606", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c1952484", content, true, context)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("797b73a3", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("31bc515a", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a4bc90bc", content, true, context)
};

/***/ }),
/* 63 */
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
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyHeading_vue_vue_type_style_index_0_id_96bc51e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-heading-container[data-v-96bc51e8]{width:95%;margin:0 auto}.page-heading-table[data-v-96bc51e8]{width:100%;border:none}h1[data-v-96bc51e8]{color:#483d8b;font-size:1.75em;margin:20px auto 0}.page-heading-table td[data-v-96bc51e8]{padding:4px 0 4px 8px;text-align:left}table tr td[data-v-96bc51e8]:nth-child(2){padding:12px;font-size:1.2em;font-weight:700;color:#555}.page-heading__address[data-v-96bc51e8]{position:relative}table tr td.page-heading__available-from__text[data-v-96bc51e8]{font-size:.9em}.page-heading__fa-icon[data-v-96bc51e8]{margin:0 auto;color:#20b2aa}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayListForObject_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".DisplayBooleanList__outer-list-container{width:100%}.DisplayBooleanList__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayBooleanList__list-container{width:100%}.DisplayBooleanList__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayBooleanList__list__li{width:31%;margin-top:35px;text-align:left;font-size:.95em;font-weight:600}.DisplayBooleanList__list__li .icon{font-size:.8em;margin-right:15px}.DisplayListForObject__outer-list-container{width:100%}.DisplayListForObject__h2{color:#483d8b;font-size:1.75em;margin:30px 0 30px 6%;text-align:left}.DisplayListForObject__list-container{width:100%}.DisplayListForObject__list__ul{width:94%;margin:0 0 0 6%;padding:0;list-style-type:none;display:flex;flex-direction:row;flex-flow:row wrap}.DisplayListForObject__list__li{width:31%;margin-top:35px;text-align:left}.DisplayListForObject__span-text,.DisplayListForObject__span-value{display:inline-block;text-align:left;font-size:.95em;font-weight:600}.DisplayListForObject__span-text{min-width:60%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetails_vue_vue_type_style_index_0_id_6d5aa1b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".room-details-container[data-v-6d5aa1b2]{width:39%;margin:2vh 1%}.room_name[data-v-6d5aa1b2]{font-size:1.2em;font-weight:600;background-color:#2e8b57;height:2em;padding:5px 6px;color:#fff;box-sizing:border-box;border-top-left-radius:10px;border-top-right-radius:10px}.room-details__ul[data-v-6d5aa1b2]{list-style-type:none;margin:0;padding:0}.room-details__li[data-v-6d5aa1b2]{width:100%;font-size:.8em;font-weight:600;background-color:#d3f8d2;border-left:1px solid #2e8b57;border-right:1px solid #2e8b57;padding:0 6px}.room-details__li[data-v-6d5aa1b2]:last-child{border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-bottom:1px solid #2e8b57;padding-bottom:4px}.room-details__div[data-v-6d5aa1b2]{display:flex;flex-direction:row}.room-details__li span[data-v-6d5aa1b2]{padding:7px 8px}.room-details__key[data-v-6d5aa1b2]{display:inline-block;width:50%;text-align:left}.room-details__value[data-v-6d5aa1b2]{display:inline-block;width:50%;text-align:right;padding-right:5%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Utilities_vue_vue_type_style_index_0_id_33b2d8c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Utilities_vue_vue_type_style_index_0_id_33b2d8c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Utilities_vue_vue_type_style_index_0_id_33b2d8c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Utilities_vue_vue_type_style_index_0_id_33b2d8c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Utilities_vue_vue_type_style_index_0_id_33b2d8c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".utilities-outer-container[data-v-33b2d8c0]{width:100%;position:relative}h4[data-v-33b2d8c0]{color:#483d8b;font-size:1.25em;margin:0 0 0 6%;width:100%;text-align:left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
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

/***/ }),
/* 79 */
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

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Utilities.vue?vue&type=template&id=33b2d8c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"utilities-outer-container"},[_vm._ssrNode("<h4 data-v-33b2d8c0>Utilities</h4> "),_c('DisplayBooleanList',{attrs:{"input_object_data":_vm.utilities_list_object}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Utilities.vue?vue&type=template&id=33b2d8c0&scoped=true&

// EXTERNAL MODULE: ./components/generic/DisplayBooleanList.vue + 4 modules
var DisplayBooleanList = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Utilities.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Utilitiesvue_type_script_lang_js_ = ({
  name: 'Utilities',
  props: ['propertyData', 'contract_idx'],

  data() {
    return {
      heading: 'Utilities'
    };
  },

  components: {
    DisplayBooleanList: DisplayBooleanList["default"]
  },
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    utilities_list_object() {
      if (!this.property || !('contracts' in this.property)) return undefined;
      return this.property ? this.property.contracts[this.contract_idx].utilities : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/Utilities.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Utilitiesvue_type_script_lang_js_ = (Utilitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Utilities.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Utilitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33b2d8c0",
  "728460f4"
  
)

/* harmony default export */ var Utilities = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2c01f100", content, true, context)
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("20c2c1c7", content, true)

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("46f7ed82", content, true)

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-container{width:100%;padding:35px 30px;height:100%;position:relative}.photo-container{width:100%;height:100%;padding:20px 15px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.photos__image{width:100%;border-radius:9px}button.slick-next:before,button.slick-prev:before{background-color:#eafae9;color:#3cb371;font-size:32px}button.slick-next:before{position:relative;right:5px}button.slick-prev:before{position:relative;left:-5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".outer-price-container[data-v-61fee8b3]{width:32vw;height:240px;transition:.25s}.outer-price-container-fixed[data-v-61fee8b3]{width:32vw;position:fixed;top:0;height:450px;transition:.25s}.price-container[data-v-61fee8b3]{background-color:#fff;border:2px solid #cee2d7;height:100%;border-radius:10px;width:92%;margin:40px auto 20px;padding:15px}.price-info-container[data-v-61fee8b3]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.deposit-col[data-v-61fee8b3],.price-from-col[data-v-61fee8b3]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:120px;width:50%}.deposit-info__label[data-v-61fee8b3],.price-info__label[data-v-61fee8b3]{font-size:1em;font-weight:600;color:#999;padding:5px}.deposit-info__price[data-v-61fee8b3],.price-info__price[data-v-61fee8b3]{font-family:\"Lato\",sans-serif;font-size:2.5em;font-weight:900;color:#483d8b;padding:5px}.deposit-info__price[data-v-61fee8b3]{font-weight:400}.deposit-info__small-print[data-v-61fee8b3],.price-info__small-print[data-v-61fee8b3]{font-size:.8em;font-weight:600;color:#20b2aa;padding:5px}.book-now-btn-container[data-v-61fee8b3]{height:100px;padding:30px auto;display:flex;justify-content:center;align-items:center}.book-now-btn[data-v-61fee8b3]{background-color:#ff8c00;color:#fff;font-size:1.5em;padding:8px 12px;border-radius:8px;border:none;outline:none;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("521c8276", content, true, context)
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e165e79", content, true, context)
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4b65a12a", content, true, context)
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facilities_vue_vue_type_style_index_0_id_74a7ae42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facilities_vue_vue_type_style_index_0_id_74a7ae42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facilities_vue_vue_type_style_index_0_id_74a7ae42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facilities_vue_vue_type_style_index_0_id_74a7ae42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facilities_vue_vue_type_style_index_0_id_74a7ae42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".facilities-container[data-v-74a7ae42]{width:67%;margin-top:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eligibility_vue_vue_type_style_index_0_id_6bab566e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eligibility_vue_vue_type_style_index_0_id_6bab566e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eligibility_vue_vue_type_style_index_0_id_6bab566e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eligibility_vue_vue_type_style_index_0_id_6bab566e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eligibility_vue_vue_type_style_index_0_id_6bab566e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".eligibility-container[data-v-6bab566e]{width:67%;margin-top:50px;background-color:#e9fbfa}h2[data-v-6bab566e]{color:#483d8b;font-size:1.75em;margin:30px 0 0 6%;width:100%;text-align:left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnergyPerformance_vue_vue_type_style_index_0_id_7b26f62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnergyPerformance_vue_vue_type_style_index_0_id_7b26f62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnergyPerformance_vue_vue_type_style_index_0_id_7b26f62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnergyPerformance_vue_vue_type_style_index_0_id_7b26f62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnergyPerformance_vue_vue_type_style_index_0_id_7b26f62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".energy-performance-container[data-v-7b26f62a]{width:67%;margin:50px 0 70px}.object__key[data-v-7b26f62a],.object__value[data-v-7b26f62a]{padding:0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0ab8a06c", content, true, context)
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTabs_vue_vue_type_style_index_0_id_1c29c311_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTabs_vue_vue_type_style_index_0_id_1c29c311_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTabs_vue_vue_type_style_index_0_id_1c29c311_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTabs_vue_vue_type_style_index_0_id_1c29c311_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTabs_vue_vue_type_style_index_0_id_1c29c311_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tabs-container[data-v-1c29c311]{width:67%;text-align:center}.tabs__ul[data-v-1c29c311]{list-style-type:none;margin:0 auto;padding:0}.tabs__li[data-v-1c29c311]{display:inline-block;margin:0 3px;font-size:1em;font-weight:500;background-color:#ffd199;color:#aaa;cursor:pointer;padding:6px 9px;border-top-left-radius:10px;border-top-right-radius:10px;transition:.25s}.active-tab[data-v-1c29c311]{background-color:#ff8c00;color:#fff}.tabs__li[data-v-1c29c311]:hover{background-color:#ff5e00;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contract_vue_vue_type_style_index_0_id_539b72a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contract_vue_vue_type_style_index_0_id_539b72a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contract_vue_vue_type_style_index_0_id_539b72a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contract_vue_vue_type_style_index_0_id_539b72a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contract_vue_vue_type_style_index_0_id_539b72a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contract-outer-container[data-v-539b72a0]{width:62%;margin:0 2% 80px;border:2px solid #cee2d7;border-radius:15px;background-color:#eee}.contract-container[data-v-539b72a0]{width:100%}.rooms-container[data-v-539b72a0]{width:100%;display:flex;flex-direction:row;flex-flow:row wrap;justify-content:space-evenly;padding:2%}.utilities-container[data-v-539b72a0]{width:100%}.small-print[data-v-539b72a0]{font-size:.9em;text-align:left;margin:35px 0 25px 6%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */,
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=template&id=1161f220&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.photo)?_c('div',{staticClass:"photos-container"},[_vm._ssrNode("<div class=\"carousel-container\">","</div>",[_c('VueSlickCarousel',{ref:"carousel"},_vm._l((_vm.photos),function(photo,idx){return _c('div',{key:idx},[_c('img',{ref:"large_image_ref",refInFor:true,staticClass:"photos__image",attrs:{"src":photo.photo}})])}),0)],1)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Photos.vue?vue&type=template&id=1161f220&

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(42);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Photosvue_type_script_lang_js_ = ({
  name: 'Photos',
  props: ['propertyData'],
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },

  data() {
    return {
      photo_idx: 0,
      Nthumbs: 4,
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
      }
    };
  },

  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    photos() {
      if (!this.property || !('media' in this.property) || !('photos' in this.property.media)) return [];
      return this.property ? this.property.media.photos : [];
    },

    photo() {
      return this.photos.length ? this.photos[this.photo_idx] : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/Photos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Photosvue_type_script_lang_js_ = (Photosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Photos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Photosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "641590f2"
  
)

/* harmony default export */ var Photos = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceCTA.vue?vue&type=template&id=61fee8b3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"outerPriceContainer",staticClass:"outer-price-container"},[(_vm.min_rent_price)?_vm._ssrNode("<div class=\"price-container\" data-v-61fee8b3>","</div>",[_vm._ssrNode("<div class=\"price-info-container\" data-v-61fee8b3><div class=\"price-from-col\" data-v-61fee8b3><span class=\"price-info__label\" data-v-61fee8b3>Rent from</span> <span class=\"price-info__price\" data-v-61fee8b3>"+_vm._ssrEscape("£"+_vm._s(_vm.min_rent_price))+"</span> <span class=\"price-info__small-print\" data-v-61fee8b3>per calendar month</span></div> <div class=\"deposit-col\" data-v-61fee8b3><span class=\"deposit-info__label\" data-v-61fee8b3>Deposit</span> <span class=\"deposit-info__price\" data-v-61fee8b3>"+_vm._ssrEscape("£"+_vm._s(_vm.min_deposit))+"</span> <span class=\"deposit-info__small-print\" data-v-61fee8b3>One-off payment</span></div></div> <div class=\"book-now-btn-container\" data-v-61fee8b3><a"+(_vm._ssrAttr("href",_vm.book_now_url))+" target=\"_blank\" data-v-61fee8b3><button class=\"book-now-btn\" data-v-61fee8b3>BOOK NOW</button></a></div> "),_vm._ssrNode("<div class=\"property-heading-component-container\" data-v-61fee8b3>","</div>",[(_vm.show_heading_component)?_c('PropertyHeading',{attrs:{"propertyData":_vm.property,"show_top_rows":false}}):_vm._e()],1)],2):_vm._ssrNode(("<div class=\"price-container\" data-v-61fee8b3><h3 data-v-61fee8b3>There are no price details available yet for this property</h3></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PriceCTA.vue?vue&type=template&id=61fee8b3&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceCTA.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PriceCTAvue_type_script_lang_js_ = ({
  name: 'PriceCTA',
  props: ['propertyData'],

  data() {
    return {
      position_type: 'static',
      show_heading_component: false
    };
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },

  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    min_rent_price() {
      return Object(shared_code["f" /* get_min_total_monthly_price */])(this.propertyData);
    },

    min_deposit() {
      return Object(shared_code["e" /* get_min_total_deposit */])(this.propertyData);
    },

    book_now_url() {
      if (!this.propertyData || !('contracts' in this.propertyData)) return '';
      return this.propertyData.contracts.length > 0 ? this.propertyData.contracts[0].book_now_url : '';
    }

  },
  methods: {
    get_min_val(propertyObj, key) {
      const contracts = propertyObj.contracts;
      let min_val = 9999999;
      contracts.forEach(contract => {
        contract.prices.forEach(priceObj => {
          const price = parseInt(priceObj[key]);

          if (price < min_val && price !== 0) {
            min_val = price;
          }
        });
      });
      if (min_val === 9999999) return undefined;
      return Math.round(Math.ceil(min_val));
    },

    handleScroll(e) {
      if (this.$refs.outerPriceContainer && this.position_type === 'fixed' && e.target.scrollingElement.scrollTop <= 380) {
        if (this.$refs.outerPriceContainer.classList.contains('outer-price-container-fixed')) {
          this.$refs.outerPriceContainer.classList.replace('outer-price-container-fixed', 'outer-price-container');
        }

        this.position_type = 'static';
        this.show_heading_component = false;
      } else if (this.$refs.outerPriceContainer && this.position_type === 'static' && e.target.scrollingElement.scrollTop > 380) {
        if (this.$refs.outerPriceContainer.classList.contains('outer-price-container')) {
          this.$refs.outerPriceContainer.classList.replace('outer-price-container', 'outer-price-container-fixed');
        }

        this.position_type = 'fixed';
        this.show_heading_component = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/PriceCTA.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PriceCTAvue_type_script_lang_js_ = (PriceCTAvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PriceCTA.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PriceCTAvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61fee8b3",
  "aff246e6"
  
)

/* harmony default export */ var PriceCTA = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PropertyHeading: __webpack_require__(63).default})


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Facilities.vue?vue&type=template&id=74a7ae42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"facilities-container"},[_c('DisplayBooleanList',{attrs:{"input_object_data":_vm.output_object,"heading":_vm.heading}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Facilities.vue?vue&type=template&id=74a7ae42&scoped=true&

// EXTERNAL MODULE: ./components/generic/DisplayBooleanList.vue + 4 modules
var DisplayBooleanList = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Facilities.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Facilitiesvue_type_script_lang_js_ = ({
  name: 'Facilities',
  props: ['propertyData'],

  data() {
    return {
      heading: 'Facilities'
    };
  },

  components: {
    DisplayBooleanList: DisplayBooleanList["default"]
  },
  computed: {
    facilities_list() {
      return this.propertyData ? this.propertyData.facilities : [];
    },

    output_object() {
      if (!this.facilities_list) return undefined;
      const output_object = {};
      this.facilities_list.map(item => {
        output_object[item.replace('_', ' ')] = true;
      });
      return output_object;
    }

  }
});
// CONCATENATED MODULE: ./components/Facilities.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Facilitiesvue_type_script_lang_js_ = (Facilitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Facilities.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Facilitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74a7ae42",
  "951eaaf2"
  
)

/* harmony default export */ var Facilities = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Eligibility.vue?vue&type=template&id=6bab566e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"eligibility-container"},[_c('DisplayBooleanList',{attrs:{"input_object_data":_vm.eligibility_list_object,"heading":_vm.heading}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Eligibility.vue?vue&type=template&id=6bab566e&scoped=true&

// EXTERNAL MODULE: ./components/generic/DisplayBooleanList.vue + 4 modules
var DisplayBooleanList = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Eligibility.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Eligibilityvue_type_script_lang_js_ = ({
  name: 'Eligibility',
  props: ['propertyData'],

  data() {
    return {
      heading: 'Eligibility'
    };
  },

  components: {
    DisplayBooleanList: DisplayBooleanList["default"]
  },
  computed: {
    eligibility_list_object() {
      return this.propertyData ? this.propertyData.eligibility : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/Eligibility.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Eligibilityvue_type_script_lang_js_ = (Eligibilityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Eligibility.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Eligibilityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6bab566e",
  "20504777"
  
)

/* harmony default export */ var Eligibility = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EnergyPerformance.vue?vue&type=template&id=7b26f62a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"energy-performance-container"},[_c('DisplayListForObject',{attrs:{"input_object_data":_vm.energy_performance,"heading":_vm.heading}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EnergyPerformance.vue?vue&type=template&id=7b26f62a&scoped=true&

// EXTERNAL MODULE: ./components/generic/DisplayListForObject.vue + 4 modules
var DisplayListForObject = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EnergyPerformance.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var EnergyPerformancevue_type_script_lang_js_ = ({
  name: 'EnergyPerformance',
  props: ['propertyData'],

  data() {
    return {
      heading: 'Energy Performance'
    };
  },

  components: {
    DisplayListForObject: DisplayListForObject["default"]
  },
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    energy_performance() {
      if (!this.property) return undefined;
      const energy_performance = {};
      Object.entries(this.property.energy_performance).map(entry => {
        energy_performance[this.capitalize_first_word_replace_underscore(entry[0])] = entry[1];
      });
      return energy_performance;
    },

    energy_performance_keys() {
      return this.energy_performance ? Object.keys(this.energy_performance) : [];
    }

  },
  methods: {
    capitalize_first_word_replace_underscore(str) {
      const str_array = str.split('_');
      const new_array = [str_array[0].toUpperCase(), str_array[1]];
      return new_array.join(' ');
    }

  }
});
// CONCATENATED MODULE: ./components/EnergyPerformance.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EnergyPerformancevue_type_script_lang_js_ = (EnergyPerformancevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EnergyPerformance.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EnergyPerformancevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b26f62a",
  "10126972"
  
)

/* harmony default export */ var EnergyPerformance = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateTabs.vue?vue&type=template&id=1c29c311&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs-container"},[_vm._ssrNode(((_vm.property)?("<ul class=\"tabs__ul\" data-v-1c29c311>"+(_vm._ssrList((_vm.converted_start_end_dates),function(start_end_date,contract_idx){return ("<li"+(_vm._ssrClass(null,("tabs__li " + (_vm.active_tab_idx === contract_idx ? 'active-tab' : ''))))+" data-v-1c29c311>"+_vm._ssrEscape("\n            "+_vm._s(start_end_date[0])+" - "+_vm._s(start_end_date[1])+"\n        ")+"</li>")}))+"</ul>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DateTabs.vue?vue&type=template&id=1c29c311&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateTabs.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DateTabsvue_type_script_lang_js_ = ({
  name: 'DateTabs',
  props: ['propertyData', 'contract_idx', 'start_end_dates'],

  data() {
    return {
      active_tab_idx: undefined,
      property: undefined
    };
  },

  mounted() {
    this.property = this.propertyData;
  },

  updated() {
    if (this.property === undefined) {
      this.property = this.propertyData;
    }
  },

  computed: {
    converted_start_end_dates() {
      return this.start_end_dates.map(start_end_date => {
        const start_date = Object(shared_code["a" /* convert_yyyy_mm_dd_to_readable_date */])(start_end_date[0]);
        const end_date = Object(shared_code["a" /* convert_yyyy_mm_dd_to_readable_date */])(start_end_date[1]);
        return [start_date, end_date];
      });
    },

    cheapest_contract_idx() {
      if (!this.propertyData) return undefined;
      return Object(shared_code["c" /* get_min_price_contract_idx */])(this.property);
    }

  },
  methods: {
    handleTabClick(contract_idx) {
      this.$emit('dateTabClicked', contract_idx);
      this.active_tab_idx = contract_idx;
    }

  },
  watch: {
    property(newVal, oldVal) {
      if (newVal) {
        this.active_tab_idx = Object(shared_code["c" /* get_min_price_contract_idx */])(this.property);
        this.$emit('dateTabClicked', this.active_tab_idx);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/DateTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateTabsvue_type_script_lang_js_ = (DateTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DateTabs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DateTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c29c311",
  "77df5e52"
  
)

/* harmony default export */ var DateTabs = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contract.vue?vue&type=template&id=539b72a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contract-outer-container"},[(_vm.property)?_vm._ssrNode("<div class=\"contract-container\" data-v-539b72a0>","</div>",[_vm._ssrNode("<div class=\"rooms-container\" data-v-539b72a0>","</div>",_vm._l((_vm.num_rooms),function(index){return _c('RoomDetails',{key:((index-1) + " + " + (Math.random())),staticClass:"room-container",attrs:{"room_details":_vm.room_details[index-1],"room_prices":_vm.room_prices[index-1]}})}),1)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"utilities-container\" data-v-539b72a0>","</div>",[_c('Utilities',{staticClass:"item-Utilities",attrs:{"propertyData":_vm.property,"contract_idx":_vm.contract_idx}}),_vm._ssrNode(" <div class=\"small-print\" data-v-539b72a0>* All prices are per person</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contract.vue?vue&type=template&id=539b72a0&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contract.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Contractvue_type_script_lang_js_ = ({
  name: 'Contract',
  props: ['propertyData', 'contract_idx'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    num_rooms() {
      return Object(shared_code["h" /* get_num_rooms */])(this.property);
    },

    room_details() {
      return this.property.room_details ? this.property.room_details : undefined;
    },

    room_prices() {
      try {
        return this.property.contracts[this.contract_idx].prices;
      } catch (e) {
        return undefined;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Contract.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contractvue_type_script_lang_js_ = (Contractvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Contract.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contractvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "539b72a0",
  "8dc0e7d0"
  
)

/* harmony default export */ var Contract = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {RoomDetails: __webpack_require__(79).default,Utilities: __webpack_require__(80).default})


/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".top-of-page-container{width:100%;height:90vh;box-sizing:border-box;background-color:#eafae9;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.top-of-page-left-container{width:67%}.top-of-page-right-container{width:33%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyInfo_vue_vue_type_style_index_0_id_1329f3c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyInfo_vue_vue_type_style_index_0_id_1329f3c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyInfo_vue_vue_type_style_index_0_id_1329f3c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyInfo_vue_vue_type_style_index_0_id_1329f3c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyInfo_vue_vue_type_style_index_0_id_1329f3c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".property-info-container[data-v-1329f3c2]{min-height:300px;width:70%}h2[data-v-1329f3c2]{font-size:2em;font-weight:700;color:#483d8b;margin:40px 0 30px 6%;text-align:left}.description[data-v-1329f3c2]{width:87%;padding:3%;margin:6% 4% 0 6%;font-size:1.25em;font-weight:500;color:#333;min-height:250px;text-align:justify;background-color:#f8f8f8;border:1px solid #ccc;border-radius:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_203b96bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_203b96bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_203b96bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_203b96bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_203b96bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".google-map-container[data-v-203b96bf]{width:67%;margin:70px 0 100px}h2[data-v-203b96bf]{font-family:\"Open Sans\",sans-serif;font-size:2em;color:#483d8b;margin-top:10px}.address[data-v-203b96bf],h2[data-v-203b96bf]{font-weight:700;margin-left:6%;text-align:left}.address[data-v-203b96bf]{padding:0;font-size:1.2em;color:#555}.google-map[data-v-203b96bf]{display:block;width:60vw;height:40vw;margin-left:6%;margin-top:4%;border-radius:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenitiesContainer_vue_vue_type_style_index_0_id_d11c29d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenitiesContainer_vue_vue_type_style_index_0_id_d11c29d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenitiesContainer_vue_vue_type_style_index_0_id_d11c29d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenitiesContainer_vue_vue_type_style_index_0_id_d11c29d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenitiesContainer_vue_vue_type_style_index_0_id_d11c29d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".amenities-container[data-v-d11c29d8]{background-color:#e9fbfa;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;box-sizing:border-box}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_3b4c5f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_3b4c5f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_3b4c5f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_3b4c5f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_3b4c5f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".availability-container[data-v-3b4c5f5a],.contract-details-container[data-v-3b4c5f5a]{width:100%}h2[data-v-3b4c5f5a]{color:#483d8b;font-size:1.75em;margin:80px 0 60px 4%;text-align:left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2be714bc", content, true, context)
};

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopOfPageContainer.vue?vue&type=template&id=383a941b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"top-of-page-container"},[_vm._ssrNode("<div class=\"top-of-page-left-container\">","</div>",[_c('Photos',{attrs:{"propertyData":_vm.property}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"top-of-page-right-container\">","</div>",[_c('PropertyHeading',{attrs:{"propertyData":_vm.property,"show_top_rows":true}}),_vm._ssrNode(" "),_c('PriceCTA',{attrs:{"propertyData":_vm.property}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopOfPageContainer.vue?vue&type=template&id=383a941b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopOfPageContainer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TopOfPageContainervue_type_script_lang_js_ = ({
  name: 'TopOfPageContainer',
  props: ['propertyData'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/TopOfPageContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopOfPageContainervue_type_script_lang_js_ = (TopOfPageContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopOfPageContainer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopOfPageContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d51038c"
  
)

/* harmony default export */ var TopOfPageContainer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Photos: __webpack_require__(109).default,PropertyHeading: __webpack_require__(63).default,PriceCTA: __webpack_require__(110).default})


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyInfo.vue?vue&type=template&id=1329f3c2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.property)?_c('div',{staticClass:"property-info-container"},[_vm._ssrNode("<h2 class=\"overview\" data-v-1329f3c2>Overview</h2> <div class=\"description\" data-v-1329f3c2>"+_vm._ssrEscape(_vm._s(_vm.description))+"</div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyInfo.vue?vue&type=template&id=1329f3c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var PropertyInfovue_type_script_lang_js_ = ({
  name: 'PropertyInfo',
  props: ['propertyData'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    description() {
      return this.property ? this.property.description : '';
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyInfovue_type_script_lang_js_ = (PropertyInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1329f3c2",
  "4391e7a9"
  
)

/* harmony default export */ var PropertyInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleMap.vue?vue&type=template&id=203b96bf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.property)?_c('div',{staticClass:"google-map-container"},[_vm._ssrNode("<h2 data-v-203b96bf>Location</h2> <div class=\"address\" data-v-203b96bf>"+_vm._ssrEscape(_vm._s(_vm.addressString))+"</div> <iframe"+(_vm._ssrAttr("src",_vm.url))+" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" class=\"google-map\" style=\"border:0;\" data-v-203b96bf></iframe>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GoogleMap.vue?vue&type=template&id=203b96bf&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var GoogleMapvue_type_script_lang_js_ = ({
  name: 'GoogleMap',
  props: ['propertyData'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    },

    url() {
      if (!this.property) return '';
      const p = this.property;
      const url_prefix = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19030.700719278575!2d';
      const url_postfix = '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIzJzU5LjQiTiAywrA1OCcwMi42Ilc!5e0!3m2!1sen!2suk!4v1629192988004!5m2!1sen!2suk';
      const url_lat_lng = `${p.coordinates.lat}!3d${p.coordinates.lng}`;
      return `${url_prefix}${url_lat_lng}${url_postfix}`;
    },

    addressString() {
      return this.property ? Object(shared_code["b" /* create_address_string */])(this.property.address) : '';
    }

  }
});
// CONCATENATED MODULE: ./components/GoogleMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GoogleMapvue_type_script_lang_js_ = (GoogleMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GoogleMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "203b96bf",
  "61836466"
  
)

/* harmony default export */ var GoogleMap = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AmenitiesContainer.vue?vue&type=template&id=d11c29d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amenities-container"},[_c('Facilities',{staticClass:"item-Facilities",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('Eligibility',{staticClass:"item-Eligibility",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('EnergyPerformance',{staticClass:"item-EnergyPerformance",attrs:{"propertyData":_vm.property}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AmenitiesContainer.vue?vue&type=template&id=d11c29d8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AmenitiesContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var AmenitiesContainervue_type_script_lang_js_ = ({
  name: 'AmenitiesContainer',
  props: ['propertyData'],
  computed: {
    property() {
      return this.propertyData ? this.propertyData : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/AmenitiesContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AmenitiesContainervue_type_script_lang_js_ = (AmenitiesContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AmenitiesContainer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AmenitiesContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d11c29d8",
  "7471deb0"
  
)

/* harmony default export */ var AmenitiesContainer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Facilities: __webpack_require__(111).default,Eligibility: __webpack_require__(112).default,EnergyPerformance: __webpack_require__(113).default})


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Availability.vue?vue&type=template&id=3b4c5f5a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.property)?_c('div',{staticClass:"availability-container"},[_vm._ssrNode("<h2 data-v-3b4c5f5a>Availability</h2> "),_vm._ssrNode("<div class=\"contract-details-container\" data-v-3b4c5f5a>","</div>",[_c('DateTabs',{attrs:{"start_end_dates":_vm.start_end_dates,"propertyData":this.property},on:{"dateTabClicked":_vm.handleChildDateTabClicked}}),_vm._ssrNode(" "),_c('Contract',{attrs:{"contract_idx":_vm.contract_idx,"propertyData":this.property}})],2)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Availability.vue?vue&type=template&id=3b4c5f5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Availability.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Availabilityvue_type_script_lang_js_ = ({
  name: 'Availability',
  props: ['propertyData'],

  data() {
    return {
      contract_idx: 0
    };
  },

  computed: {
    property() {
      if (!this.propertyData || !('contracts' in this.propertyData) || this.propertyData.contracts.length === 0) return undefined;
      return this.propertyData ? this.propertyData : undefined;
    },

    start_end_dates() {
      if (!this.property) return undefined;
      const start_end_dates = this.property.contracts.map(c => {
        const start_date = 'start_date' in c ? c.start_date : '';
        const end_date = 'end_date' in c ? c.end_date : '';
        return [start_date, end_date];
      });
      return start_end_dates;
    },

    num_contracts() {
      try {
        return this.property.contracts.length;
      } catch (e) {
        return 0;
      }
    }

  },
  methods: {
    handleChildDateTabClicked(new_contract_idx) {
      this.contract_idx = new_contract_idx;
    }

  }
});
// CONCATENATED MODULE: ./components/Availability.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Availabilityvue_type_script_lang_js_ = (Availabilityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Availability.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Availabilityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b4c5f5a",
  "8e9a463e"
  
)

/* harmony default export */ var Availability = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DateTabs: __webpack_require__(114).default,Contract: __webpack_require__(115).default})


/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a770f17a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a770f17a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a770f17a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a770f17a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a770f17a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item-TopOfPageContainer[data-v-a770f17a]{grid-area:TopOfPageContainer;width:100%;box-sizing:border-box}.item-PropertyHeading[data-v-a770f17a]{grid-area:PropertyHeading}.item-Photos[data-v-a770f17a]{grid-area:Photos}.item-PriceCTA[data-v-a770f17a]{grid-area:PriceCTA}.item-PropertyInfo[data-v-a770f17a]{grid-area:PropertyInfo}.item-Availability[data-v-a770f17a]{grid-area:Availability}.item-AmenitiesContainer[data-v-a770f17a]{grid-area:AmenitiesContainer}.item-Facilities[data-v-a770f17a]{grid-area:Facilities}.item-EnergyPerformance[data-v-a770f17a]{grid-area:EnergyPerformance}.item-GoogleMap[data-v-a770f17a]{grid-area:GoogleMap}.item-Eligibility[data-v-a770f17a]{grid-area:Eligibility}.property-container[data-v-a770f17a]{box-sizing:border-box;display:grid;grid-template-columns:100%;grid-template-areas:\"TopOfPageContainer\" \"PropertyInfo\" \"GoogleMap\" \"AmenitiesContainer\" \"Availability\" \"Footer\"}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/_property_id/index.vue?vue&type=template&id=a770f17a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"property-container fadeInAnimation"},[_c('TopOfPageContainer',{staticClass:"item-TopOfPageContainer",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('PropertyInfo',{staticClass:"item-PropertyInfo",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('GoogleMap',{staticClass:"item-GoogleMap",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('AmenitiesContainer',{staticClass:"item-AmenitiesContainer",attrs:{"propertyData":_vm.property}}),_vm._ssrNode(" "),_c('Availability',{staticClass:"Availability",attrs:{"propertyData":_vm.property}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/properties/_property_id/index.vue?vue&type=template&id=a770f17a&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./environment/environment.js
var environment = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/_property_id/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _property_idvue_type_script_lang_js_ = ({
  name: 'PropertyDetails',

  data() {
    return {
      property_id: undefined,
      property: undefined,
      photos: [],
      pageTitle: undefined,
      address: undefined
    };
  },

  async created() {
    this.property_id = this.$route.params.property_id;
    const url = `${environment["a" /* BASE_API_URL */]}/properties/${this.property_id}`;

    try {
      const resp = await external_axios_default.a.get(url);
      this.property = resp.data;
    } catch (err) {
      console.log(err.message);
    }
  },

  computed: {
    num_contracts() {
      if (!this.property || !('contracts' in this.property)) return 0;
      return this.property.contracts.length;
    }

  }
});
// CONCATENATED MODULE: ./pages/properties/_property_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_property_idvue_type_script_lang_js_ = (_property_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/properties/_property_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  properties_property_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a770f17a",
  "d834a5e6"
  
)

/* harmony default export */ var _property_id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopOfPageContainer: __webpack_require__(149).default,PropertyInfo: __webpack_require__(150).default,GoogleMap: __webpack_require__(151).default,AmenitiesContainer: __webpack_require__(152).default,Availability: __webpack_require__(153).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map