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
var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productsArr.push(_product);
        console.log(this.productsArr);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.productsArr.forEach(function (product) {
            sumScale += product.getScale();
        });
        console.log(sumScale);
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.productsArr.forEach(function (product) {
            nameList.push(product.getName());
        });
        console.log(nameList);
        return nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
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
        return this.scale;
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return this.name;
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
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return this.name;
    };
    return Tomato;
}(Product));
var Apple1 = new Apple("Apple_Big", 23);
var Apple2 = new Apple("Apple_small", 3);
var Tomato1 = new Tomato("Tomato_Big", 12);
var Tomato2 = new Tomato("Tomato_small", 100);
var scales = new Scales();
scales.add(Apple1);
scales.add(Apple2);
scales.add(Tomato1);
scales.add(Tomato2);
console.log(scales.productsArr);
scales.getSumScale();
scales.getSumScale();
scales.getNameList();
scales.getNameList();
//# sourceMappingURL=app.js.map