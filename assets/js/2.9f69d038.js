(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_4882434a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_4882434a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_4882434a_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SimplePagination_vue_vue_type_style_index_0_id_7492d752_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SimplePagination_vue_vue_type_style_index_0_id_7492d752_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SimplePagination_vue_vue_type_style_index_0_id_7492d752_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(115),
    baseIteratee = __webpack_require__(108),
    basePickBy = __webpack_require__(281),
    getAllKeysIn = __webpack_require__(285);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(59),
    baseSet = __webpack_require__(282),
    castPath = __webpack_require__(53);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(283),
    castPath = __webpack_require__(53),
    isIndex = __webpack_require__(57),
    isObject = __webpack_require__(30),
    toKey = __webpack_require__(20);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(284),
    eq = __webpack_require__(56);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(116);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(109),
    getSymbolsIn = __webpack_require__(286),
    keysIn = __webpack_require__(288);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(55),
    getPrototype = __webpack_require__(287),
    getSymbols = __webpack_require__(110),
    stubArray = __webpack_require__(111);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(112),
    baseKeysIn = __webpack_require__(289),
    isArrayLike = __webpack_require__(58);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30),
    isPrototype = __webpack_require__(113),
    nativeKeysIn = __webpack_require__(290);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 290:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Pagination; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ SimplePagination; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Comment; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue?vue&type=template&id=4882434a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.comp ? _c(_vm.comp, {
    tag: "component",
    attrs: {
      "value": _vm.page,
      "page-count": _vm.$pagination.length,
      "click-handler": _vm.clickCallback,
      "prev-text": _vm.$pagination.prevText,
      "next-text": _vm.$pagination.nextText,
      "container-class": 'pagination',
      "page-class": 'page-item'
    }
  }) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue?vue&type=template&id=4882434a

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue?vue&type=script&lang=js

/* harmony default export */ var Paginationvue_type_script_lang_js = ({
  data() {
    return {
      comp: null
    };
  },
  computed: {
    page() {
      return this.$pagination.paginationIndex + 1;
    }
  },
  mounted() {
    __webpack_require__.e(/* import() | vuejs-paginate */ 10).then(__webpack_require__.t.bind(null, 330, 7)).then(comp => {
      this.comp = comp.default;
    });
  },
  methods: {
    clickCallback(pageNum) {
      const link = this.$pagination.getSpecificPageLink(pageNum - 1);
      this.$router.push(link);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Paginationvue_type_script_lang_js = (Paginationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue?vue&type=style&index=0&id=4882434a&prod&lang=stylus
var Paginationvue_type_style_index_0_id_4882434a_prod_lang_stylus = __webpack_require__(278);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Pagination.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagination = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-blog/lib/client/components/SimplePagination.vue?vue&type=template&id=7492d752
var SimplePaginationvue_type_template_id_7492d752_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pagination simple-pagination"
  }, [_vm.$pagination.hasPrev ? _c('router-link', {
    attrs: {
      "to": _vm.$pagination.prevLink
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$pagination.prevText) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm.$pagination.hasNext ? _c('router-link', {
    attrs: {
      "to": _vm.$pagination.nextLink
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$pagination.nextText) + "\n  ")]) : _vm._e()], 1);
};
var SimplePaginationvue_type_template_id_7492d752_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/SimplePagination.vue?vue&type=template&id=7492d752

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/SimplePagination.vue?vue&type=style&index=0&id=7492d752&prod&lang=stylus
var SimplePaginationvue_type_style_index_0_id_7492d752_prod_lang_stylus = __webpack_require__(279);

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/SimplePagination.vue

var script = {}



/* normalize component */

var SimplePagination_component = Object(componentNormalizer["a" /* default */])(
  script,
  SimplePaginationvue_type_template_id_7492d752_render,
  SimplePaginationvue_type_template_id_7492d752_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SimplePagination = (SimplePagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-blog/lib/client/components/Comment.vue?vue&type=template&id=418729b9
var Commentvue_type_template_id_418729b9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.$service.comment.service === 'vssue' ? _c('Vssue', _vm._b({}, 'Vssue', _vm.vssueProps, false)) : _vm.$service.comment.service === 'disqus' ? _c('Disqus', _vm._b({}, 'Disqus', _vm.disqusProps, false)) : _vm._e();
};
var Commentvue_type_template_id_418729b9_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Comment.vue?vue&type=template&id=418729b9

// EXTERNAL MODULE: ./node_modules/lodash/identity.js
var identity = __webpack_require__(32);
var identity_default = /*#__PURE__*/__webpack_require__.n(identity);

// EXTERNAL MODULE: ./node_modules/lodash/pickBy.js
var pickBy = __webpack_require__(280);
var pickBy_default = /*#__PURE__*/__webpack_require__.n(pickBy);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-blog/lib/client/components/Comment.vue?vue&type=script&lang=js


/* harmony default export */ var Commentvue_type_script_lang_js = ({
  props: {
    // vssue's props
    title: {
      type: [String, Function],
      required: false
    },
    issueId: {
      type: [String, Number],
      required: false
    },
    options: {
      type: Object,
      required: false
    },
    // vue-disqus's props
    shortname: {
      type: String,
      required: false
    },
    identifier: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    remote_auth_s3: {
      type: String,
      required: false
    },
    api_key: {
      type: String,
      required: false
    },
    sso_config: {
      type: Object,
      required: false
    },
    language: {
      type: String,
      required: false
    }
  },
  computed: {
    propsWithoutEmptyProperties() {
      return pickBy_default()(this.$props, identity_default.a);
    },
    commentProps() {
      return Object.assign({}, this.propsWithoutEmptyProperties, this.$frontmatter.comment);
    },
    vssueProps() {
      return Object.assign({
        title: this.$page.title
      }, this.commentProps);
    },
    disqusProps() {
      return Object.assign({
        identifier: this.$page.key
      }, this.commentProps);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Comment.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Commentvue_type_script_lang_js = (Commentvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components/Comment.vue





/* normalize component */

var Comment_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js,
  Commentvue_type_template_id_418729b9_render,
  Commentvue_type_template_id_418729b9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Comment = (Comment_component.exports);
// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components.js





/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BaseListLayout_vue_vue_type_style_index_0_id_56013594_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BaseListLayout_vue_vue_type_style_index_0_id_56013594_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BaseListLayout_vue_vue_type_style_index_0_id_56013594_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue?vue&type=template&id=56013594
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "base-list-layout"
    }
  }, [_c('div', {
    staticClass: "ui-posts",
    attrs: {
      "itemscope": "",
      "itemtype": "http://schema.org/Blog"
    }
  }, _vm._l(_vm.pages, function (page) {
    return _c('article', {
      key: page.key,
      staticClass: "ui-post",
      attrs: {
        "itemprop": "blogPost",
        "itemscope": "",
        "itemtype": "https://schema.org/BlogPosting"
      }
    }, [_c('meta', {
      attrs: {
        "itemprop": "mainEntityOfPage",
        "content": page.path
      }
    }), _vm._v(" "), _c('header', {
      staticClass: "ui-post-title",
      attrs: {
        "itemprop": "name headline"
      }
    }, [_c('NavLink', {
      attrs: {
        "link": page.path
      }
    }, [_vm._v(_vm._s(page.title))])], 1), _vm._v(" "), page.excerpt ? _c('client-only', [_c('p', {
      staticClass: "ui-post-summary",
      attrs: {
        "itemprop": "description"
      },
      domProps: {
        "innerHTML": _vm._s(page.excerpt)
      }
    })]) : _c('p', {
      staticClass: "ui-post-summary",
      attrs: {
        "itemprop": "description"
      }
    }, [_vm._v("\n        " + _vm._s(page.frontmatter.summary || page.summary) + "\n      ")]), _vm._v(" "), _c('footer', [page.frontmatter.author ? _c('div', {
      staticClass: "ui-post-meta ui-post-author",
      attrs: {
        "itemprop": "publisher author",
        "itemtype": "http://schema.org/Person",
        "itemscope": ""
      }
    }, [_c('NavigationIcon'), _vm._v(" "), _c('span', {
      attrs: {
        "itemprop": "name"
      }
    }, [_vm._v(_vm._s(page.frontmatter.author))]), _vm._v(" "), page.frontmatter.location ? _c('span', {
      attrs: {
        "itemprop": "address"
      }
    }, [_vm._v("\n              in " + _vm._s(page.frontmatter.location) + "\n          ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), page.frontmatter.date ? _c('div', {
      staticClass: "ui-post-meta ui-post-date"
    }, [_c('ClockIcon'), _vm._v(" "), _c('time', {
      attrs: {
        "pubdate": "",
        "itemprop": "datePublished",
        "datetime": page.frontmatter.date
      }
    }, [_vm._v("\n            " + _vm._s(_vm.resolvePostDate(page.frontmatter.date)) + "\n          ")])], 1) : _vm._e(), _vm._v(" "), page.frontmatter.tags ? _c('div', {
      staticClass: "ui-post-meta ui-post-tag",
      attrs: {
        "itemprop": "keywords"
      }
    }, [_c('TagIcon'), _vm._v(" "), _vm._l(_vm.resolvePostTags(page.frontmatter.tags), function (tag) {
      return _c('router-link', {
        key: tag,
        attrs: {
          "to": '/tag/' + tag
        }
      }, [_vm._v("\n            " + _vm._s(tag) + "\n          ")]);
    })], 2) : _vm._e()])], 1);
  }), 0), _vm._v(" "), _vm.$pagination.length > 1 && _vm.paginationComponent ? _c(_vm.paginationComponent, {
    tag: "component"
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue?vue&type=template&id=56013594

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(54);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/utc.js
var utc = __webpack_require__(267);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc);

// EXTERNAL MODULE: ./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js
var vue_feather_icons_es = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-blog/lib/client/components.js + 13 modules
var components = __webpack_require__(291);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue?vue&type=script&lang=js
/* global THEME_BLOG_PAGINATION_COMPONENT */






dayjs_min_default.a.extend(utc_default.a);
/* harmony default export */ var BaseListLayoutvue_type_script_lang_js = ({
  components: {
    NavigationIcon: vue_feather_icons_es["n" /* NavigationIcon */],
    ClockIcon: vue_feather_icons_es["a" /* ClockIcon */],
    TagIcon: vue_feather_icons_es["q" /* TagIcon */]
  },
  data() {
    return {
      paginationComponent: null
    };
  },
  computed: {
    pages() {
      return this.$pagination.pages;
    }
  },
  created() {
    this.paginationComponent = this.getPaginationComponent();
  },
  methods: {
    getPaginationComponent() {
      const n = "Pagination";
      if (n === 'Pagination') {
        return components["b" /* Pagination */];
      }
      if (n === 'SimplePagination') {
        return components["c" /* SimplePagination */];
      }
      return vue_runtime_esm["a" /* default */].component(n) || components["b" /* Pagination */];
    },
    resolvePostDate(date) {
      return dayjs_min_default.a.utc(date).format(this.$themeConfig.dateFormat || 'ddd MMM DD YYYY');
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags;
      return [tags];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue?vue&type=script&lang=js
 /* harmony default export */ var global_components_BaseListLayoutvue_type_script_lang_js = (BaseListLayoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue?vue&type=style&index=0&id=56013594&prod&lang=stylus
var BaseListLayoutvue_type_style_index_0_id_56013594_prod_lang_stylus = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_components_BaseListLayoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseListLayout = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);