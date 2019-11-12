'use strict';
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.add = function (item) {
        this.storage.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            var item = this.storage.getItem(i);
            sumScale += item.getScale();
        }
        console.log(sumScale);
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            var item = this.storage.getItem(i);
            nameList.push(item.getName());
        }
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
//Способ хранения: в массиве
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
//Способ хранения: в LocalStorage
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.items = window.localStorage;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var itemLocalStorage = JSON.stringify(item);
        this.items.setItem(item.getName(), itemLocalStorage);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var i = this.items.key(index);
        var itemH = JSON.parse(localStorage.getItem(i));
        var itemProduct = new Product(itemH.name, itemH.scale);
        return itemProduct;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var productsArray = new ScalesStorageEngineArray();
var scalesProductsArr = new Scales(productsArray);
var product1 = new Product("Яблоко", 12);
var product2 = new Product("Апельсин", 412);
var product3 = new Product("Банан", 512);
var addProduct1 = scalesProductsArr.add(product1);
var addProduct2 = scalesProductsArr.add(product2);
var addProduct3 = scalesProductsArr.add(product3);
//console.log(scalesProductsArr);
//console.log(productsArray);
//console.log(product1);
//console.log(product2);
//console.log(product3);
scalesProductsArr.getSumScale();
scalesProductsArr.getNameList();
var productsLocalStorage = new ScalesStorageEngineLocalStorage();
var scalesProductsLocalStorage = new Scales(productsLocalStorage);
var product11 = new Product("Картошка", 120);
var product12 = new Product("Свекла", 342);
var product13 = new Product("Морковь", 87);
var addProduct11 = scalesProductsLocalStorage.add(product11);
var addProduct12 = scalesProductsLocalStorage.add(product12);
var addProduct13 = scalesProductsLocalStorage.add(product13);
//console.log(productsLocalStorage.getItem(2));
scalesProductsLocalStorage.getSumScale();
scalesProductsLocalStorage.getNameList();
localStorage.clear();
//# sourceMappingURL=app.js.map