/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction initialize() {\r\n  (0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n  navigationEvents()\r\n}\r\ninitialize()\r\n\r\nconst main = document.getElementById(\"main\")\r\nconst nav = document.getElementById(\"nav\")\r\nfunction navigationEvents() {\r\n  const content = document.getElementById(\"content\")\r\n  const homeBtn = document.getElementById(\"homebtn\")\r\n  const menuBtn = document.getElementById(\"menubtn\")\r\n  const contactBtn = document.getElementById(\"contactbtn\")\r\n  const tabs = document.querySelectorAll(\".tab\")\r\n  // mobile\r\n  const mobileNav = document.querySelector(\".fa-bars\")\r\n  mobileNav.addEventListener(\"click\", mobile)\r\n\r\n  menuBtn.addEventListener(\"click\", _modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n  homeBtn.addEventListener(\"click\", _modules_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n  contactBtn.addEventListener(\"click\", _modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n\r\n  tabs.forEach((tab) => {\r\n    tab.addEventListener(\"click\", () => {\r\n      main.classList.add(\"active\")\r\n      flipTheCard()\r\n\r\n      // active.classList.add(\"puff-in-center\")\r\n    })\r\n  })\r\n}\r\nfunction flipTheCard() {\r\n  main.classList.add(\"scale-in-top\")\r\n  setTimeout(() => {\r\n    main.classList.remove(\"scale-in-top\")\r\n  }, 500)\r\n}\r\n\r\nfunction mobile() {\r\n  nav.classList.add(\"scale-in-top\")\r\n  nav.style.display = \"flex\"\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactLoad(info) {\r\n  // containers\r\n  const contactContainer = document.createElement(\"div\")\r\n\r\n  const addressContainer = document.createElement(\"div\")\r\n\r\n  // elements address\r\n  const addressDetails = document.createElement(\"h3\")\r\n  addressDetails.setAttribute(\"class\", \"address-details\")\r\n  addressDetails.textContent = info\r\n  addressContainer.appendChild(addressDetails)\r\n  //  elements map\r\n\r\n  contactContainer.appendChild(addressContainer)\r\n\r\n  return contactContainer\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.getElementById(\"main\")\r\n  main.textContent = \"\"\r\n  // setActiveBtn(\"main\")\r\n  const contactDetails = [\r\n    contactLoad(\"t: 0121 446 080\"),\r\n    contactLoad(\"Shadow Brook Lane, B75 21N\"),\r\n  ]\r\n  //\r\n  const mapContainer = document.createElement(\"div\")\r\n  mapContainer.setAttribute(\"class\", \"map-container\")\r\n  mapContainer.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19399.28562262357!2d-1.8235824499999997!3d52.5712261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1684920408366!5m2!1sen!2suk\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`\r\n\r\n  const slideContact = document.createElement(\"div\")\r\n  slideContact.setAttribute(\"class\", \"contact-container\")\r\n  main.appendChild(slideContact)\r\n  contactDetails.forEach((el) => slideContact.appendChild(el))\r\n  slideContact.appendChild(mapContainer)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction heroPicture(title, subtitle) {\r\n  const heroDiv = document.createElement(\"div\")\r\n  const heroTitle = document.createElement(\"h1\")\r\n  const heroSubtitle = document.createElement(\"h2\")\r\n\r\n  heroDiv.setAttribute(\"class\", \"hero-container\")\r\n  heroTitle.setAttribute(\"class\", \"hero-title\")\r\n  heroSubtitle.setAttribute(\"class\", \"hero-subtitle\")\r\n  heroTitle.textContent = title\r\n  heroSubtitle.textContent = subtitle\r\n\r\n  const heroInfo = [heroTitle, heroSubtitle]\r\n  heroInfo.forEach((el) => heroDiv.appendChild(el))\r\n\r\n  return heroDiv\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.getElementById(\"main\")\r\n  main.textContent = \"\"\r\n  const mainDescription = heroPicture(\r\n    \"Where Gastronomic Delights Unite with Timeless Elegance\",\r\n    \"Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience.\"\r\n  )\r\n  main.appendChild(mainDescription)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/modules/pageLoad.js\");\n\r\n\r\nfunction createLovelyFoods(h3, li1, li2, li3, li4, li5) {\r\n  // append to\r\n  const menuContainer = document.createElement(\"div\")\r\n  menuContainer.setAttribute(\"class\", \"menu-container\")\r\n\r\n  // ul\r\n\r\n  //   title\r\n  const menuTitle = document.createElement(\"h3\")\r\n  menuTitle.setAttribute(\"class\", \"menu-title\")\r\n  menuTitle.textContent = h3\r\n\r\n  // liOne\r\n  const liMenu = document.createElement(\"li\")\r\n  liMenu.setAttribute(\"class\", \"menu-list\")\r\n  liMenu.textContent = li1\r\n\r\n  // append to main menu div\r\n  menuContainer.appendChild(menuTitle)\r\n  menuContainer.appendChild(liMenu)\r\n\r\n  return menuContainer\r\n}\r\nfunction loadMenu() {\r\n  const main = document.getElementById(\"main\")\r\n  main.textContent = \"\"\r\n\r\n  // setActiveBtn(\"main\")\r\n\r\n  const foods = [\r\n    createLovelyFoods(\"Dinner\", \"FOUR COURSE £50\"),\r\n    createLovelyFoods(\"BROTH\", \"Smoked bone marrow, chive\"),\r\n    createLovelyFoods(\"BEETROOT\", \"Berkswell cheese, nasturtium\"),\r\n    createLovelyFoods(\"CHICKEN LIVER PARFAIT\", \"quince, lemon verbena\"),\r\n    createLovelyFoods(\"LOBSTER\", \"XO sauce, sea vegetables\"),\r\n    createLovelyFoods(\"APPLE\", \"Calvados, vanilla\"),\r\n    createLovelyFoods(\"HAZELNUT\", \"Chocolate, lime\"),\r\n  ]\r\n  //set width and height of slides\r\n  let slide = document.createElement(\"div\")\r\n  slide.setAttribute(\"class\", \"slide\")\r\n\r\n  // main.appendChild(slide)\r\n\r\n  main.appendChild(slide)\r\n  foods.forEach((li) => slide.appendChild(li))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\r\n  const header = document.createElement(\"header\")\r\n  header.setAttribute(\"id\", id)\r\n  const logo = document.createElement(\"h1\")\r\n  logo.setAttribute(\"class\", \"header-title\")\r\n  logo.textContent = text\r\n  const mobileBtn = document.createElement(\"i\")\r\n  mobileBtn.setAttribute(\"class\", \"fa-solid fa-bars\")\r\n  header.appendChild(mobileBtn)\r\n  header.appendChild(logo)\r\n  return header\r\n}\r\nfunction createBtn(id, text) {\r\n  const btn = document.createElement(\"button\")\r\n  btn.setAttribute(\"id\", id)\r\n  const span = document.createElement(\"span\")\r\n  span.textContent = text\r\n  btn.appendChild(span)\r\n  btn.classList.add(\"tab\")\r\n  return btn\r\n}\r\nfunction navBar(id) {\r\n  const nav = document.createElement(\"nav\")\r\n  nav.setAttribute(\"id\", id)\r\n  nav.setAttribute(\"class\", \"mobile-hidden\")\r\n  const homeBtn = createBtn(\"homebtn\", \"Home\")\r\n  const menuBtn = createBtn(\"menubtn\", \"Menu\")\r\n  const contactBtn = createBtn(\"contactbtn\", \"Contact\")\r\n\r\n  const buttons = [homeBtn, menuBtn, contactBtn]\r\n  buttons.forEach((button) => nav.appendChild(button))\r\n\r\n  return nav\r\n}\r\n\r\nfunction createMain(id) {\r\n  const main = document.createElement(\"main\")\r\n  main.setAttribute(\"id\", id)\r\n  return main\r\n}\r\n\r\nfunction createFooter(id, text) {\r\n  const footer = document.createElement(\"footer\")\r\n  footer.setAttribute(\"id\", id)\r\n  const h3 = document.createElement(\"h3\")\r\n  h3.textContent = text\r\n  footer.appendChild(h3)\r\n  return footer\r\n}\r\n\r\nfunction heroPicture(title, subtitle) {\r\n  const heroDiv = document.createElement(\"div\")\r\n  const heroTitle = document.createElement(\"h1\")\r\n  const heroSubtitle = document.createElement(\"h2\")\r\n\r\n  heroDiv.setAttribute(\"class\", \"hero-container\")\r\n  heroTitle.setAttribute(\"class\", \"hero-title\")\r\n  heroSubtitle.setAttribute(\"class\", \"hero-subtitle\")\r\n  heroTitle.textContent = title\r\n  heroSubtitle.textContent = subtitle\r\n\r\n  const heroInfo = [heroTitle, heroSubtitle]\r\n  heroInfo.forEach((el) => heroDiv.appendChild(el))\r\n\r\n  return heroDiv\r\n}\r\n\r\nfunction pageLoad() {\r\n  const content = document.getElementById(\"content\")\r\n\r\n  const header = createHeader(\"header\", \"Peels\")\r\n  const nav = navBar(\"nav\")\r\n\r\n  const main = createMain(\"main\")\r\n  main.classList.add(\"active\")\r\n  const mainDescription = heroPicture(\r\n    \"Where Gastronomic Delights Unite with Timeless Elegance\",\r\n    \"Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience.\"\r\n  )\r\n\r\n  const footer = createFooter(\"footer\", \"Copyright © 2023 Bartrum\")\r\n  const gitHubLink = document.createElement(\"a\")\r\n  gitHubLink.setAttribute(\"href\", \"https://github.com/barty008\")\r\n  const githubLogo = document.createElement(\"i\")\r\n  githubLogo.setAttribute(\"class\", \"fa-brands fa-github\")\r\n  gitHubLink.appendChild(githubLogo)\r\n\r\n  footer.appendChild(gitHubLink)\r\n  const sections = [header, nav, main, footer]\r\n  sections.forEach((section) => content.appendChild(section))\r\n  main.appendChild(mainDescription)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;