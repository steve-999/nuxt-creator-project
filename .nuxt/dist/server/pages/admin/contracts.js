exports.ids = [27,14,16];
exports.modules = {

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("221480d9", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contracts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contracts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contracts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contracts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contracts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".admin-edit-container{background-color:#f8f8f8}.admin-contracts-container{padding:10px 0}.admin-contracts__ul{list-style-type:none;margin:0;padding:0}.admin-contracts__li{width:90%;margin:0 auto 30px;padding:10px;background-color:#d8d8d8;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.admin-contracts-main-info-and-utilities-container{display:flex;flex-direction:row}.admin-contracts-main-contracts-info-container,.admin-contracts-utilities-container{width:45%;margin:30px auto;padding:20px;background-color:#bbb;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.admin-contracts-room-prices__ul{list-style-type:none;margin:0;padding:0;display:flex;flex-flow:row wrap}.admin-contracts-room-prices__li{width:45%;margin:30px auto;padding:20px;background-color:#bbb;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.admin-contracts__h2--top{font-size:1.4em}.admin-contracts__h2--top,.admin-contracts__h3{font-weight:700;margin:0 auto;text-align:center}.admin-contracts__h3{font-size:1.2em}.no-contracts-message{width:70%;margin:0 auto;font-size:1.2em;font-weight:600;color:#444}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/contracts.vue?vue&type=template&id=41db6e62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.property)?_c('div',{staticClass:"admin-contracts-container"},[_vm._ssrNode("<div class=\"admin-contracts-container\">","</div>",[_vm._ssrNode("<ul class=\"admin-contracts__ul\">","</ul>",_vm._l((_vm.num_contracts),function(idx1){return _vm._ssrNode("<li class=\"admin-contracts__li\">","</li>",[_vm._ssrNode("<h2 class=\"admin-contracts__h2--top\">"+_vm._ssrEscape("Contract "+_vm._s(idx1))+"</h2> "),_vm._ssrNode("<div class=\"admin-contracts-main-info-and-utilities-container\">","</div>",[_vm._ssrNode("<div class=\"admin-contracts-main-contracts-info-container\">","</div>",[_c('InputListWithLabels',{attrs:{"indices":("contract_idx=" + (idx1-1)),"input_object":_vm.create_main_contract_info_object(idx1-1),"display_labels_object":_vm.main_contract_display_keys},on:{"handleInput":_vm.handleInputChange__MainInfo}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"admin-contracts-utilities-container\">","</div>",[_c('InputBooleanList',{attrs:{"indices":("contract_idx=" + (idx1-1)),"input_object":_vm.create_utilities_info_object(idx1-1),"display_labels_object":_vm.utilities_display_keys},on:{"handleCheckboxChange":_vm.handleCheckboxChange__Utilities}})],1)],2),_vm._ssrNode(" <h3 class=\"admin-contracts__h3\">Room prices</h3> "),_vm._ssrNode("<ul class=\"admin-contracts-room-prices__ul\">","</ul>",_vm._l((_vm.property.contracts[idx1-1].prices.length),function(idx2){return _vm._ssrNode("<li class=\"admin-contracts-room-prices__li\">","</li>",[_vm._ssrNode("<div class=\"admin-contracts-room-prices-container\">","</div>",[_c('InputListWithLabels',{attrs:{"indices":("contract_idx=" + (idx1-1) + " | room_idx=" + (idx2-1)),"input_object":_vm.create_room_prices_info_object(idx1-1, idx2-1),"display_labels_object":_vm.room_prices_display_keys},on:{"handleInput":_vm.handleInputChange__RoomPrices}})],1)])}),0)],2)}),0),_vm._ssrNode(" "+((_vm.num_contracts === 0)?("<div class=\"no-contracts-message\">There are no contracts for this property at the present time.</div>"):"<!---->"))],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/contracts.vue?vue&type=template&id=41db6e62&

// EXTERNAL MODULE: ./components/generic/InputListWithLabels.vue + 4 modules
var InputListWithLabels = __webpack_require__(55);

// EXTERNAL MODULE: ./components/generic/InputBooleanList.vue + 4 modules
var InputBooleanList = __webpack_require__(76);

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/contracts.vue?vue&type=script&lang=js&
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



/* harmony default export */ var contractsvue_type_script_lang_js_ = ({
  name: 'AdminContracts',
  props: ['propertiesData', 'property_id'],
  components: {
    InputListWithLabels: InputListWithLabels["default"],
    InputBooleanList: InputBooleanList["default"]
  },

  data() {
    return {
      properties: undefined,
      main_contract_display_keys: {
        title: 'Title',
        book_now_url: 'Book now URL',
        start_date: 'Start date',
        end_date: 'End date',
        min_contract_days: 'Minimum contract days'
      },
      utilities_display_keys: {
        broadband: 'Broadband',
        contents_insurance: 'Contents insurance',
        council_tax: 'Council tax',
        electricity: 'Electricity',
        gas: 'Gas',
        phone: 'Phone',
        tv_license: 'TV licence',
        water: 'Water'
      },
      room_prices_display_keys: {
        room_name: 'Room name',
        price_per_person_per_week: 'Price per person per week',
        deposit_per_person: 'Deposit per person',
        fee_per_person: 'Fee per person'
      }
    };
  },

  mounted() {
    this.properties = this.propertiesData ? this.propertiesData : undefined;
  },

  updated() {
    if (!this.properties && this.propertiesData) {
      this.properties = this.propertiesData ? this.propertiesData : undefined;
    }
  },

  computed: {
    property() {
      try {
        return this.properties.find(property => property.property_id === this.property_id);
      } catch (e) {
        return undefined;
      }
    },

    contracts() {
      try {
        return this.property.contracts;
      } catch (e) {
        return undefined;
      }
    },

    num_contracts() {
      try {
        return this.contracts.length;
      } catch (e) {
        return undefined;
      }
    }

  },
  methods: {
    create_main_contract_info_object(contract_idx) {
      try {
        const d = {};
        const contract = this.property.contracts[contract_idx];
        Object.keys(this.main_contract_display_keys).forEach(key => d[key] = contract[key]);
        return d;
      } catch (e) {
        return undefined;
      }
    },

    create_utilities_info_object(contract_idx) {
      return this.property.contracts[contract_idx] ? this.property.contracts[contract_idx].utilities : undefined;
    },

    create_room_prices_info_object(contract_idx, room_idx) {
      return this.property.contracts[contract_idx].prices[room_idx];
    },

    handleCheckboxChange__Utilities(name, value, indices) {
      const contract_idx = indices.split('=')[1];
      const update_key = `contracts.${contract_idx}.utilities.${name}`;
      Object(shared_code["j" /* update_mongodb */])(this.property_id, update_key, value);
    },

    handleInputChange__MainInfo(name, value, indices) {
      const contract_idx = indices.split('=')[1];
      const update_key = `contracts.${contract_idx}.${name}`;
      Object(shared_code["j" /* update_mongodb */])(this.property_id, update_key, value);
    },

    handleInputChange__RoomPrices(name, value, indices) {
      const temp = indices.split(' | ');
      const contract_idx = temp[0].split('=')[1];
      const room_idx = temp[1].split('=')[1];
      const update_key = `contracts.${contract_idx}.prices.${room_idx}.${name}`;
      Object(shared_code["j" /* update_mongodb */])(this.property_id, update_key, value);
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/contracts.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_contractsvue_type_script_lang_js_ = (contractsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/contracts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_contractsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a995bc8"
  
)

/* harmony default export */ var contracts = __webpack_exports__["default"] = (component.exports);

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
//export const BASE_API_URL = 'http://localhost:5000/api'
//export const BASE_API_URL = 'https://creator-project-e5c73.ondigitalocean.app/api'
const BASE_API_URL = 'https://nuxt-creator-project.herokuapp.com/api';

/***/ }),

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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("044ca68e", content, true, context)
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

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBooleanList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBooleanList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBooleanList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBooleanList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBooleanList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input-boolean-list__h3{font-size:1.2em;font-weight:600;text-align:left;padding:5px 0;margin:5px 0}.input-boolean-list__row{width:80%;margin-left:20%;text-align:left}.input-boolean-list__input,.input-boolean-list__label{display:inline-block;padding:5px 8px;margin:2px auto;font-family:\"Open Sans\",sans-serif;font-size:.8em;box-sizing:border-box;height:2em;text-align:left}.input-boolean-list__input{border:1px solid #ccc;border-radius:8px;height:1em;width:30px}.input-boolean-list__label{width:60%}.input-boolean-list__input:focus{outline:none;border:none;box-shadow:var(--orangey-red-color) 0 0 2px 2px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/InputBooleanList.vue?vue&type=template&id=6042d6b9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.input_object)?_c('div',{staticClass:"input-boolean-list-container"},[_vm._ssrNode(((_vm.heading)?("<h3 class=\"input-boolean-list__h3\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h3>"):"<!---->")+" <form>"+(_vm._ssrList((_vm.keys_list),function(key){return ("<div class=\"input-boolean-list__row\"><input type=\"checkbox\""+(_vm._ssrAttr("id",key))+(_vm._ssrAttr("name",key))+(_vm._ssrAttr("value",key))+(_vm._ssrAttr("checked",_vm.input_object[key]))+" class=\"input-boolean-list__input\"> <label class=\"input-boolean-list__label\">"+_vm._ssrEscape(_vm._s(_vm.display_labels_object[key]))+"</label></div>")}))+"</form>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/generic/InputBooleanList.vue?vue&type=template&id=6042d6b9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/generic/InputBooleanList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InputBooleanListvue_type_script_lang_js_ = ({
  name: 'InputBooleanList',
  props: ['heading', 'input_object', 'display_labels_object', 'indices'],
  computed: {
    keys_list() {
      return this.display_labels_object ? Object.keys(this.display_labels_object) : undefined;
    }

  },
  methods: {
    handleCheckboxChange(e) {
      this.$emit('handleCheckboxChange', e.target.name, e.target.checked, this.indices);
    }

  }
});
// CONCATENATED MODULE: ./components/generic/InputBooleanList.vue?vue&type=script&lang=js&
 /* harmony default export */ var generic_InputBooleanListvue_type_script_lang_js_ = (InputBooleanListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/generic/InputBooleanList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  generic_InputBooleanListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cac55cb2"
  
)

/* harmony default export */ var InputBooleanList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contracts.js.map