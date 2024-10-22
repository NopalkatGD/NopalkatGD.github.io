(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./blog/_posts/2024_19_10_Jump_Dame/JumpGame.md?vue&type=template&id=97ee46c4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h2', {
    attrs: {
      "id": "instroduccion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#instroduccion"
    }
  }, [_vm._v("#")]), _vm._v(" Instroducción")]), _vm._v(" "), _c('p', [_vm._v("En este desafio de leetcode consiste en validar si una lista puede dar los suficientes saltos para llegar al final devolviendo "), _c('code', [_vm._v("True")]), _vm._v(" y "), _c('code', [_vm._v("False")]), _vm._v(", la distancia del salto es determinado por el valor del elemento que se encuentra en ese momento.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "descripcion-de-leetcode"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#descripcion-de-leetcode"
    }
  }, [_vm._v("#")]), _vm._v(" Descripción de leetcode")]), _vm._v(" "), _c('p', [_vm._v("Se te dará una lista con valores numericos "), _c('code', [_vm._v("int()")]), _vm._v(", inicialmente se ubica en la primera posición de la lista "), _c('code', [_vm._v("0")]), _vm._v(", y el valor numerico que se encuentra en esa posición determinará la lonjitud del salto, devolviendo "), _c('code', [_vm._v("True")]), _vm._v(" y "), _c('code', [_vm._v("False")]), _vm._v(" si es posibel llegar al final de la lista.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "resolucion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#resolucion"
    }
  }, [_vm._v("#")]), _vm._v(" Resolución")]), _vm._v(" "), _c('p', [_vm._v("Pareceria dificil, sin embargo mientra se codifica es posible dar una esplicación ya que es muy corto y sencillo.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "codificacion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#codificacion"
    }
  }, [_vm._v("#")]), _vm._v(" Codificación")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("Se inicializan las variables con variables determinadas donde: "), _c('code', [_vm._v("valid = True")]), _vm._v(" que cambiará dependiendo el valor de la posición actual, "), _c('code', [_vm._v("position = 0")]), _vm._v(" que determina la posición actual en la lista y cambiará dependiendo el valor de la celda donde se encuentra actualmente y "), _c('code', [_vm._v("countador = 1")]), _vm._v(" es un seudocontador que determina el valor de a variable "), _c('code', [_vm._v("position")])]), _vm._v(" "), _c('li', [_vm._v("El ciclo "), _c('code', [_vm._v("while")]), _vm._v(" ejecutará el código hasta que el valor de "), _c('code', [_vm._v("position")]), _vm._v(" sea mayor al tamaño de la lista")]), _vm._v(" "), _c('li', [_vm._v("El primer "), _c('code', [_vm._v("if")]), _vm._v(" determina que: en caso de que el valor de la posición actual se diferente a "), _c('code', [_vm._v("0")]), _vm._v(", el valor de position se le sumaran el valor actual de la celda determinado por "), _c('code', [_vm._v("nums[position]")]), _vm._v(". En caso contrario: probará si la siguiente posición determinada por el seudo contador "), _c('code', [_vm._v("countador")]), _vm._v(" es igual a "), _c('code', [_vm._v("0")]), _vm._v(", detendrá la ejecución y "), _c('code', [_vm._v("valid")]), _vm._v(" será igual a "), _c('code', [_vm._v("False")]), _vm._v(", en caso contrario, el valor de "), _c('code', [_vm._v("position")]), _vm._v(" será igual a "), _c('code', [_vm._v("countador")]), _vm._v(". Al final "), _c('code', [_vm._v("countador")]), _vm._v(" se sumará a si mismo un "), _c('code', [_vm._v("1")])])]), _vm._v(" "), _c('div', {
    staticClass: "language-python extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Solution")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("canJump")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("int")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("bool")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        valid "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _vm._v("\n        position "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n        countador "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Iniciando\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("while")]), _vm._v(" position "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("position"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"-\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("position"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                position "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("position"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" nums"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("countador"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"\\n[!] Error\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                    valid "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("break")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"\\nreintentando\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                    position "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" countador\n                countador "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" valid\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./blog/_posts/2024_19_10_Jump_Dame/JumpGame.md?vue&type=template&id=97ee46c4

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./blog/_posts/2024_19_10_Jump_Dame/JumpGame.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var JumpGame = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);