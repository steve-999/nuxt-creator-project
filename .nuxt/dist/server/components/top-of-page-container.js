exports.ids = [24,18,19,20];
exports.modules = {

/***/ 109:
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

/***/ 110:
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOfPageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".top-of-page-container{width:100%;height:90vh;box-sizing:border-box;background-color:#eafae9;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.top-of-page-left-container{width:67%}.top-of-page-right-container{width:33%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 149:
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

/***/ 56:
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

/***/ 57:
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


/***/ }),

/***/ 85:
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("20c2c1c7", content, true)

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("46f7ed82", content, true)

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-container{width:100%;padding:35px 30px;height:100%;position:relative}.photo-container{width:100%;height:100%;padding:20px 15px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.photos__image{width:100%;border-radius:9px}button.slick-next:before,button.slick-prev:before{background-color:#eafae9;color:#3cb371;font-size:32px}button.slick-next:before{position:relative;right:5px}button.slick-prev:before{position:relative;left:-5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCTA_vue_vue_type_style_index_0_id_61fee8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".outer-price-container[data-v-61fee8b3]{width:32vw;height:240px;transition:.25s}.outer-price-container-fixed[data-v-61fee8b3]{width:32vw;position:fixed;top:0;height:450px;transition:.25s}.price-container[data-v-61fee8b3]{background-color:#fff;border:2px solid #cee2d7;height:100%;border-radius:10px;width:92%;margin:40px auto 20px;padding:15px}.price-info-container[data-v-61fee8b3]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.deposit-col[data-v-61fee8b3],.price-from-col[data-v-61fee8b3]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:120px;width:50%}.deposit-info__label[data-v-61fee8b3],.price-info__label[data-v-61fee8b3]{font-size:1em;font-weight:600;color:#999;padding:5px}.deposit-info__price[data-v-61fee8b3],.price-info__price[data-v-61fee8b3]{font-family:\"Lato\",sans-serif;font-size:2.5em;font-weight:900;color:#483d8b;padding:5px}.deposit-info__price[data-v-61fee8b3]{font-weight:400}.deposit-info__small-print[data-v-61fee8b3],.price-info__small-print[data-v-61fee8b3]{font-size:.8em;font-weight:600;color:#20b2aa;padding:5px}.book-now-btn-container[data-v-61fee8b3]{height:100px;padding:30px auto;display:flex;justify-content:center;align-items:center}.book-now-btn[data-v-61fee8b3]{background-color:#ff8c00;color:#fff;font-size:1.5em;padding:8px 12px;border-radius:8px;border:none;outline:none;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=top-of-page-container.js.map