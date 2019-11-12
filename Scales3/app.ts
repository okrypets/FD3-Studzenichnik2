'use strict';

interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}


class Scales<StorageEngine extends IStorageEngine> {


    storage:StorageEngine;

    constructor(_storage:StorageEngine) {
        this.storage = _storage;
    }


    add(item:Product):void {
        this.storage.addItem(item);
    }

    getSumScale():number {
        let sumScale:number=0;

        for (let i = 0; i < this.storage.getCount(); i++ ) {
            let item:Product = this.storage.getItem(i);
            sumScale += item.getScale();
        }
        console.log(sumScale);
        return sumScale
    }
    getNameList():Array<string> {
        let nameList:Array<string>=[];

        for (let i = 0; i < this.storage.getCount(); i++ ) {
            let item = this.storage.getItem(i);
            nameList.push(item.getName());
        }
        console.log(nameList);
        return nameList
    }

}


class Product  {

    private name:string;
    private scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }

}

//Способ хранения: в массиве

class ScalesStorageEngineArray implements IStorageEngine {

    items: Product[];

    constructor() {
        this.items=[];
    }

    addItem(item:Product):void {
        this.items.push(item);
    }

    getItem(index:number):Product {
        return this.items[index];
    }

    getCount():number {
        return this.items.length;
    }
}




//Способ хранения: в LocalStorage

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    items = window.localStorage;


    addItem(item:Product):void {
        let itemLocalStorage = JSON.stringify(item);
        this.items.setItem(item.getName(), itemLocalStorage);
    }

    getItem(index:number):Product {
        let i = this.items.key(index);
        let itemH = JSON.parse(localStorage.getItem(i));
        let itemProduct:Product = new Product(itemH.name, itemH.scale);
        return itemProduct;
    }

    getCount():number {
        return this.items.length;
    }
}



let productsArray:ScalesStorageEngineArray = new ScalesStorageEngineArray();
let scalesProductsArr = new Scales<ScalesStorageEngineArray>(productsArray);

let product1:Product = new Product("Яблоко", 12);
let product2:Product = new Product("Апельсин", 412);
let product3:Product = new Product("Банан", 512);

let addProduct1 = scalesProductsArr.add(product1);
let addProduct2 = scalesProductsArr.add(product2);
let addProduct3 = scalesProductsArr.add(product3);

//console.log(scalesProductsArr);
//console.log(productsArray);

//console.log(product1);
//console.log(product2);
//console.log(product3);

scalesProductsArr.getSumScale();
scalesProductsArr.getNameList();



let productsLocalStorage:ScalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();
let scalesProductsLocalStorage = new Scales<ScalesStorageEngineLocalStorage>(productsLocalStorage);

let product11:Product = new Product("Картошка", 120);
let product12:Product = new Product("Свекла", 342);
let product13:Product = new Product("Морковь", 87);


let addProduct11 = scalesProductsLocalStorage.add(product11);
let addProduct12 = scalesProductsLocalStorage.add(product12);
let addProduct13 = scalesProductsLocalStorage.add(product13);

//console.log(productsLocalStorage.getItem(2));

scalesProductsLocalStorage.getSumScale();
scalesProductsLocalStorage.getNameList();



localStorage.clear();