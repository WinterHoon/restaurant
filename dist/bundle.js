/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cook.js":
/*!*********************!*\
  !*** ./src/Cook.js ***!
  \*********************/
/*! exports provided: Cook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cook\", function() { return Cook; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ \"./src/Employee.js\");\n\n\nvar Cook = (function(){\n    let instance;\n    return class extends _Employee__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"] {\n        constructor(name,salary) {\n            if (!instance) {\n                super(name,salary);\n                instance = this;\n            }\n            return instance;\n        }\n\n        doWorking() {\n            while (_app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealToCook > 0) {\n                let meal = _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealToCook.shift();\n                setTimeout(() => {\n                    _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealDone.push(meal);\n                    console.log(`${meal.name}完成，请上菜`);\n                }, meal.time * 1000);\n            }\n        }\n    }\n})();\n\n\n\n//# sourceURL=webpack:///./src/Cook.js?");

/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Customer\", function() { return Customer; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _public_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-use */ \"./src/public-use.js\");\n \n\nclass Customer {\n    constructor(lastName, firstName) {\n        this.name = lastName + firstName;\n        this.state = 0;\n    }\n\n    waitToOrder() {\n        this.state = 1;\n        console.log(`顾客${this.name}正在等待点餐`);\n    }\n    orderMeal() {\n        this.state = 2;\n        console.log(`顾客${this.name}正在点餐`);\n        setTimeout(() => {\n            return Object(_public_use__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(_app__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].mealList);\n        }, 3000);\n\n    }\n\n    eat() {\n        this.state = 4;\n        setTimeout(() => {\n            this.finishEating();\n        }, Math.floor(Math.random() * 5000));\n    }\n\n    finishEating() {\n        //吃完要结账，但目前先设定成吃完就走\n        console.log(`${this.name}顾客就餐完毕，离开`);\n        _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].customerQueueIn.shift();\n    }\n    // //私有的随机点菜方法\n    // _randomOrderMeal() {\n    //     let randomNum = Math.floor(Math.random() * (menu.mealList.length - 1));\n    //     return menu.mealList[randomNum];\n    // }\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/Customer.js?");

/***/ }),

/***/ "./src/Employee.js":
/*!*************************!*\
  !*** ./src/Employee.js ***!
  \*************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Employee\", function() { return Employee; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nclass Employee {\n    constructor(name,salary) {\n        //用一个全局的id变量来保存id？\n        this.id = _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].staff.length + 1;\n        this.name = name;\n        this.salary = salary;\n    }\n\n    doWorking() {}\n}\n\n\n\n//# sourceURL=webpack:///./src/Employee.js?");

/***/ }),

/***/ "./src/Meal.js":
/*!*********************!*\
  !*** ./src/Meal.js ***!
  \*********************/
/*! exports provided: Meal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meal\", function() { return Meal; });\nclass Meal {\n    constructor(obj) {\n        this.name = obj.name;\n        this.cost = obj.cost;\n        this.price = obj.price;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/Meal.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nlet Menu = (function(){\n    let instance;\n    return class {\n        constructor() {\n            if (!instance) {\n                this.mealList = [];\n                instance = this;\n            }\n            return instance;\n        }\n\n        addMeal(meal) {\n            this.mealList.push(meal);\n        }\n    };\n})();\n\n\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/Restaurant.js":
/*!***************************!*\
  !*** ./src/Restaurant.js ***!
  \***************************/
/*! exports provided: Restaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Restaurant\", function() { return Restaurant; });\nlet Restaurant = (function(){\n    let instance;\n    return class {\n        constructor(obj) {\n            if (!instance) {\n                //现金流\n                this.cash = obj.cash;\n                //座位数量\n                this.seats = obj.seats;\n                //员工\n                this.staff = [];\n                //门外顾客队列\n                this.customerQueueOut =[];\n                //厅内顾客\n                this.customerQueueIn = [];\n                //待做菜品\n                this.mealToCook = [];\n                //完成菜品\n                this.mealDone = [];\n                instance = this;\n            }\n            return this;\n        }\n\n        hire(employee) {\n            this.staff.push(employee);\n        }\n\n        fire(employee) {\n            for (let index in this.staff) {\n                if (this.staff[index].id === employee.id ) {\n                    this.staff.splice(index, 1);\n                    break;\n                }\n            }\n        }\n\n        addCustomer(customer) {\n            if (this.customerQueueIn.length < this.seats) {\n                this.customerQueueIn.push(customer);\n                customer.waitToOrder();\n            } else {\n                this.customerQueueOut.push(customer);\n            }\n            \n        }\n\n    };\n})();\n\n\n\n//# sourceURL=webpack:///./src/Restaurant.js?");

/***/ }),

/***/ "./src/Waiter.js":
/*!***********************!*\
  !*** ./src/Waiter.js ***!
  \***********************/
/*! exports provided: Waiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Waiter\", function() { return Waiter; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ \"./src/Employee.js\");\n\n\nlet Waiter = (function(){\n    let instance;\n    return class extends _Employee__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"] {\n        constructor(name, salary) {\n            if (!instance) {\n                super(name, salary);\n                instance = this;\n            }\n            return instance;\n        }\n\n        doWorking() {\n            while (_app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].customerQueueIn.length > 0) {\n                let customer = _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].customerQueueIn[0];\n                if (customer.state === 1) {\n                    console.log(`工号${this.id}服务员前来服务`);\n                    let meal = customer.orderMeal();\n                    _app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealToCook.push(meal);\n                    customer.state = 3;\n                    console.log(\"点餐完毕，等待上菜\");\n                }\n    \n                if (_app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealDone && customer.state === 3) {\n                    console.log(`顾客${customer.name}的${_app__WEBPACK_IMPORTED_MODULE_0__[\"restaurant\"].mealDone.shift()}已上菜，请用餐`);\n                    customer.eat();\n                }\n            }\n\n        }\n    }\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Waiter.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: restaurant, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restaurant\", function() { return restaurant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Meal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meal */ \"./src/Meal.js\");\n/* harmony import */ var _Restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Restaurant */ \"./src/Restaurant.js\");\n/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Customer */ \"./src/Customer.js\");\n/* harmony import */ var _public_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-use */ \"./src/public-use.js\");\n/* harmony import */ var _Waiter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Waiter */ \"./src/Waiter.js\");\n/* harmony import */ var _Cook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cook */ \"./src/Cook.js\");\n\n\n\n\n\n\n\nlet restaurant = new _Restaurant__WEBPACK_IMPORTED_MODULE_2__[\"Restaurant\"]({cash: 10000, seats: 1});\nlet menu = new _Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]();\nlet meals = [\n    {name: \"红烧肉\", cost: 10, price: 30, time: 6},\n    {name: \"糖醋排骨\", cost: 12, price: 35, time: 4}, \n    {name: \"可乐鸡翅\", cost: 8, price: 25, time: 2},\n    {name: \"鱼香肉丝\", cost: 8, price: 20, time: 2},\n    {name: \"水煮鱼\", cost: 30, price: 80, time: 4},\n    {name: \"口水鸡\", cost: 12, price: 32, time: 1},\n    {name: \"鸡蛋西红柿\", cost: 4, price: 12, time: 2},\n    {name: \"酸辣土豆丝\", cost: 3, price: 10, time: 1},\n    {name: \"鱼香茄子\", cost: 3, price: 12, time: 2},\n    {name: \"小鸡炖蘑菇\", cost: 5, price: 24, time: 3}\n\n]\nfor (let meal of meals) {\n    let newMeal = new _Meal__WEBPACK_IMPORTED_MODULE_1__[\"Meal\"](meal);\n    menu.addMeal(newMeal);\n}\n\nlet lastNames = [\"赵\",\"钱\",\"孙\",\"李\",\"周\",\"吴\",\"郑\",\"王\",\"冯\",\"陈\",\"褚\",\"卫\",\"蒋\",\"沈\",\"韩\",\"杨\"];\nlet firstNames = [\"彪\",\"巨昆\",\"锐\",\"花\",\"小小\",\"撒撒\", \"萧\", \"慕\", \"紫韵\", \"娜\", \"怜花\", \"月\", \"风\", \"云\", \"霜\", \"伟\", \"岩\"];\n\nwindow.onload = function(){\n//1-5秒随机来客人\nsetInterval(() => {\n    let customer = new _Customer__WEBPACK_IMPORTED_MODULE_3__[\"Customer\"](Object(_public_use__WEBPACK_IMPORTED_MODULE_4__[\"random\"])(lastNames), Object(_public_use__WEBPACK_IMPORTED_MODULE_4__[\"random\"])(firstNames));\n    if (restaurant.customerQueueOut.length < 10) {\n        restaurant.addCustomer(customer);\n        console.log(\"厅外加入新顾客，当前等待人数\" + restaurant.customerQueueOut.length);\n    } else {\n        console.log(\"厅外等待人数已满10人，请顾客下次再来。\");\n    }\n    \n    console.log(`当前厅内顾客为${restaurant.customerQueueIn[0].name}`);\n}, Math.floor(Math.random() * 5000));\n\nlet waiter = new _Waiter__WEBPACK_IMPORTED_MODULE_5__[\"Waiter\"](\"翠花\", 3000);\nlet cook = new _Cook__WEBPACK_IMPORTED_MODULE_6__[\"Cook\"](\"王刚\",15000);\nwaiter.doWorking();\ncook.doWorking();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/public-use.js":
/*!***************************!*\
  !*** ./src/public-use.js ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n//随机选择数组一项的公共方法\nfunction random(arr) {\n    return arr[Math.floor(Math.random() * (arr.length - 1))];\n}\n\n\n\n//# sourceURL=webpack:///./src/public-use.js?");

/***/ })

/******/ });