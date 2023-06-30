"use strict";
exports.__esModule = true;
exports.Greets = exports.Welcome = exports.greetings1 = void 0;
function greetings() {
    return "Hello World!";
}
exports["default"] = greetings;
var greetings1 = /** @class */ (function () {
    function greetings1() {
    }
    greetings1.prototype.StringConcat = function (banner) {
        return "Welcome to " + banner;
    };
    return greetings1;
}());
exports.greetings1 = greetings1;
function Welcome(str) {
    return "Hello " + str + "..!";
}
exports.Welcome = Welcome;
var Greets = /** @class */ (function () {
    function Greets() {
    }
    Greets.prototype.msg = function (str1) {
        return "Welcome to " + str1;
    };
    return Greets;
}());
exports.Greets = Greets;
