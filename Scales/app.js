'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Scales = /** @class */ (function () {
    function Scales() {
        this.product = null;
    }
    Scales.prototype.add = function (_product) {
        Scales.productsArr = __spreadArrays(Scales.productsArr, [_product]);
        console.log(Scales.productsArr);
    };
    Scales.prototype.getSumScale = function () {
        Scales.productsArr.forEach(function (product) {
            Scales.sumScale += +product.scale;
        });
        console.log(Scales.sumScale);
    };
    Scales.prototype.getNameList = function () {
        Scales.productsArr.forEach(function (product) {
            Scales.nameList = __spreadArrays(Scales.nameList, [product.name]);
        });
        console.log(Scales.nameList);
    };
    Scales.productsArr = [];
    Scales.sumScale = 0;
    Scales.nameList = [];
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        console.log(this.scale);
    };
    Product.prototype.getName = function () {
        console.log(this.name);
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    Tomato.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
    };
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this);
    };
    return Tomato;
}(Product));
var Apple1 = new Apple("Apple_Big", 23);
console.log(Apple1);
var Apple2 = new Apple("Apple_small", 3);
console.log(Apple2);
var Tomato1 = new Tomato("Tomato_Big", 12);
console.log(Tomato1);
var Tomato2 = new Tomato("Tomato_small", 100);
console.log(Tomato2);
var scales = new Scales();
scales.add(Apple1);
scales.add(Apple2);
scales.add(Tomato1);
scales.add(Tomato2);
console.log(Scales.productsArr);
scales.getSumScale();
scales.getNameList();
//# sourceMappingURL=app.js.map