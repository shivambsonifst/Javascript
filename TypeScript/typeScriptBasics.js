/* BASIC TYPES */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Explicit Type
var firstName = "Shivam";
console.log(typeof firstName);
//Implicit Type
var startName = "Shivam";
console.log(typeof startName);
/* SPECIAL TYPES */
// type: any
var v = true;
v = "string";
console.log(Math.round(5.6));
/* Variable Declarations */
var middleName = "Shivam";
var lastName = "Soni";
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
/* CLASSES */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = new Person("Shivam");
console.log(person);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle));
var mySq = new Square(20);
console.log(mySq.getArea());
/* CLASSES: PUBLIC, PRIVATE, PROTECTED */
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Shivam");
console.log(person1.getName());
/* FUNCTIONS */
var a = 5;
var b = 6;
function multiply(a, b) {
    return a * b;
}
console.log(multiply(a, b));
var c = 5;
function factorial(c) {
    if (c <= 0) {
        return 1;
    }
    else {
        return (c * factorial(c - 1));
    }
}
console.log(factorial(c));
/* ITERATORS AND GENERATORS */
function demogenerator(mynum) {
    var z;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //logic here
                console.log("generator called");
                z = 0;
                _a.label = 1;
            case 1:
                if (!(z < mynum.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, mynum[z]];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                z++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
console.log("Demo to show generator in typescript");
var mydemoarray = [400, 500, 600, 700, 800, 900];
var myiteration = demogenerator(mydemoarray);
var result1 = myiteration.next();
var result2 = myiteration.next();
var result3 = myiteration.next();
var result4 = myiteration.next();
var result5 = myiteration.next();
var result6 = myiteration.next();
console.log("printing result ::: ");
console.log("result one is  ::");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
