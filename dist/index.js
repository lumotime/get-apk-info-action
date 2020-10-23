module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(34);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 34:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(6);
const AppInfoParser = __webpack_require__(181);

async function main() {
    try {
        // inputs from action
        const apkPath = core.getInput('apkPath');

        console.log(apkPath);

        const parser = new AppInfoParser(apkPath);// or xxx.ipa
        parser.parse().then(result => {

            core.setOutput("versionCode", result.versionCode);
            core.setOutput("versionName", result.versionName);
            core.setOutput("applicationId", result.package);
            core.setOutput("compileSdkVersion", result.compileSdkVersion);
            core.setOutput("minSdkVersion", result.usesSdk.minSdkVersion);
            core.setOutput("targetSdkVersion", result.usesSdk.targetSdkVersion);
            core.setOutput("icon", result.icon);
            core.setOutput("name", result.application.label);
            console.log('app info ----> ', result);
            console.log('return info ----> ', core);
        }).catch(err => {
            console.log('err ----> ', err)
        });

    } catch (error) {
        console.log('catch error ----> ', error);
        core.setFailed(error.message);
    }
}


main();


/***/ }),

/***/ 181:
/***/ (function(module) {

module.exports = eval("require")("app-info-parser");


/***/ })

/******/ });