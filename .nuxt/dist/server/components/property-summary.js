exports.ids = [22];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("26f9c4cd", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unsplash-kitchen-design_1280x720.f0f2076.jpg";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unsplash-bedroom-2_1280x720.354c350.jpg";

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySummary_vue_vue_type_style_index_0_id_5f57b86c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySummary_vue_vue_type_style_index_0_id_5f57b86c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySummary_vue_vue_type_style_index_0_id_5f57b86c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySummary_vue_vue_type_style_index_0_id_5f57b86c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySummary_vue_vue_type_style_index_0_id_5f57b86c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".property-container[data-v-5f57b86c]{width:100%;margin:40px auto;padding:0;max-width:1100px;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:relative}.property__image[data-v-5f57b86c]{width:48%}.property__details-box[data-v-5f57b86c]{position:absolute;top:5%;left:30%;width:40%;height:90%;background-color:#fff;z-index:2;text-align:left;padding:.5em 1.3em;font-weight:300}.property__details-box a[data-v-5f57b86c]{text-decoration:none;color:#000}.property__details-box-address[data-v-5f57b86c]{font-size:1.2em;font-weight:300;color:#000;padding:.3em 0;transition:.25s}.property__details-box-address--anchor-text[data-v-5f57b86c]:hover{color:#c2442e;border-bottom:1px solid #c2442e}.property__details-box-availability[data-v-5f57b86c]{font-size:.9em;font-weight:300;color:#888;padding:.2em 0}.property__rooms-included[data-v-5f57b86c]{width:100%;display:flex;flex-direction:row;justify-content:flex-start}.property__num-bathrooms[data-v-5f57b86c],.property__num-bedrooms[data-v-5f57b86c],.property__overall-price[data-v-5f57b86c]{display:inline-block;font-size:1rem;padding:.2em 0}.property__fa-icon[data-v-5f57b86c]{font-size:1em;color:#ec522c}.property__num-bathrooms--text[data-v-5f57b86c]{font-size:.8em;color:#222;padding:0 .7em}.property__overall-price--price[data-v-5f57b86c],.property__overall-price--text[data-v-5f57b86c]{font-size:.9em;font-weight:400;color:#555;letter-spacing:-.5px}.property__overall-price--price[data-v-5f57b86c]{font-weight:600}.property__book-now-button[data-v-5f57b86c]{display:block;background-color:var(--orangey-red-color);transition:.25s}.property__book-now-button[data-v-5f57b86c]:hover{background-color:#f58c79}.property__book-now-button--text[data-v-5f57b86c]{display:block;color:#fff;font-size:.9em;font-weight:300;text-align:center;letter-spacing:2px;padding:1em 0;margin:.8em 0 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertySummary.vue?vue&type=template&id=5f57b86c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.min_total_monthly_cost)?_c('div',{staticClass:"property-container"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt=\"unsplash kitchen design\" class=\"property__image\" data-v-5f57b86c> <img"+(_vm._ssrAttr("src",__webpack_require__(135)))+" alt=\"unsplash bedroom design\" class=\"property__image\" data-v-5f57b86c> "),_vm._ssrNode("<div class=\"property__details-box\" data-v-5f57b86c>","</div>",[_c('NuxtLink',{attrs:{"to":("/properties/" + (_vm.property.property_id))}},[_c('div',{staticClass:"property__details-box-address"},[_c('span',{staticClass:"property__details-box-address--anchor-text"},[_vm._v(_vm._s(_vm.property_name)+", "+_vm._s(_vm.road_name))])])]),_vm._ssrNode(" <div class=\"property__details-box-availability\" data-v-5f57b86c>"+_vm._ssrEscape("Available from "+_vm._s(_vm.available_from))+"</div> "),_vm._ssrNode("<div class=\"property__rooms-included\" data-v-5f57b86c>","</div>",[_vm._ssrNode("<span class=\"property__num-bedrooms\" data-v-5f57b86c>","</span>",[_vm._ssrNode("<span class=\"property__num-bedrooms--icon\" data-v-5f57b86c>","</span>",[_c('font-awesome-icon',{staticClass:"property__fa-icon fa-sm",attrs:{"icon":"bed"}})],1),_vm._ssrNode(" <span class=\"property__num-bathrooms--text\" data-v-5f57b86c>"+_vm._ssrEscape(_vm._s(_vm.num_bedrooms_string))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"property__num-bathrooms\" data-v-5f57b86c>","</span>",[_vm._ssrNode("<span class=\"property__num-bathrooms--icon\" data-v-5f57b86c>","</span>",[_c('font-awesome-icon',{staticClass:"property__fa-icon fa-sm",attrs:{"icon":"bath"}})],1),_vm._ssrNode(" <span class=\"property__num-bathrooms--text\" data-v-5f57b86c>"+_vm._ssrEscape(_vm._s(_vm.num_bathrooms_string))+"</span>")],2)],2),_vm._ssrNode(" <div class=\"property__overall-price\" data-v-5f57b86c><span class=\"property__overall-price--price\" data-v-5f57b86c>"+_vm._ssrEscape("£"+_vm._s(_vm.min_total_monthly_cost)+" PCM")+"</span> <span class=\"property__overall-price--text\" data-v-5f57b86c> Excluding Bills</span></div> <div class=\"property__book-now-button\" data-v-5f57b86c><a"+(_vm._ssrAttr("href",_vm.book_now_url))+" target=\"_blank\" data-v-5f57b86c><span class=\"property__book-now-button--text\" data-v-5f57b86c>BOOK NOW</span></a></div>")],2)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertySummary.vue?vue&type=template&id=5f57b86c&scoped=true&

// EXTERNAL MODULE: ./shared/shared_code.js
var shared_code = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertySummary.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertySummaryvue_type_script_lang_js_ = ({
  name: 'PropertySummary',
  props: ['propertyData'],
  computed: {
    property() {
      return this.propertyData;
    },

    property_name() {
      try {
        return this.property.address.property_name;
      } catch (e) {
        return undefined;
      }
    },

    road_name() {
      try {
        return this.property.address.road_name;
      } catch (e) {
        return undefined;
      }
    },

    available_from() {
      try {
        return Object(shared_code["a" /* convert_yyyy_mm_dd_to_readable_date */])(Object(shared_code["d" /* get_min_start_date */])(this.property));
      } catch (e) {
        return undefined;
      }
    },

    num_contracts() {
      try {
        return this.property.contracts.length;
      } catch (e) {
        return undefined;
      }
    },

    num_bedrooms() {
      try {
        return Object(shared_code["h" /* get_num_rooms */])(this.property);
      } catch (e) {
        return undefined;
      }
    },

    num_bedrooms_string() {
      return this.num_bedrooms ? `${this.num_bedrooms} ${Object(shared_code["i" /* pluralise_word_for_num */])('Bedroom', this.num_bedrooms)}` : undefined;
    },

    num_bathrooms() {
      try {
        return Object(shared_code["g" /* get_num_bathrooms */])(this.property);
      } catch (e) {
        return undefined;
      }
    },

    num_bathrooms_string() {
      return this.num_bathrooms ? `${this.num_bathrooms} ${Object(shared_code["i" /* pluralise_word_for_num */])('Bathroom', this.num_bathrooms)}` : undefined;
    },

    min_total_monthly_cost() {
      return Object(shared_code["f" /* get_min_total_monthly_price */])(this.property);
    },

    book_now_url() {
      if (!this.property || !('contracts' in this.property)) return '';
      return this.property.contracts.length > 0 ? this.property.contracts[0].book_now_url : '';
    }

  }
});
// CONCATENATED MODULE: ./components/PropertySummary.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertySummaryvue_type_script_lang_js_ = (PropertySummaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertySummary.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertySummaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f57b86c",
  "7056e0fb"
  
)

/* harmony default export */ var PropertySummary = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=property-summary.js.map