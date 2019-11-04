'use strict';

class Scales {

    static productsArr:(Product)[] = [];
    static sumScale:number=0;
    static nameList:Array<string>=[];

    product:{name:string, scale:number};

    constructor() {
        this.product = null;
    }

    add(_product:Product):void {
        Scales.productsArr = [...Scales.productsArr, _product];
        console.log(Scales.productsArr);
    }
    getSumScale():void {
        Scales.productsArr.forEach((product) => {
            Scales.sumScale += +product.scale;
        });
        console.log(Scales.sumScale);
    }
    getNameList():void {
        Scales.productsArr.forEach((product) => {
            Scales.nameList = [...Scales.nameList, product.name];
        });
        console.log(Scales.nameList);
    }

}


class Product {

    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    getScale():void {
        console.log(this.scale);
    }

    getName():void {
        console.log(this.name);
    }

}


class Apple extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale():void {
        super.getScale();
    }

    getName():void {
        super.getName();
    }
}

class Tomato extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale():void {
        super.getScale();
    }

    getName():void {
        super.getName();
    }
}

const Apple1:Product = new Apple("Apple_Big", 23);
console.log(Apple1);
const Apple2:Product = new Apple("Apple_small", 3);
console.log(Apple2);
const Tomato1:Product = new Tomato("Tomato_Big", 12);
console.log(Tomato1);
const Tomato2:Product = new Tomato("Tomato_small", 100);
console.log(Tomato2);

let scales = new Scales();
scales.add(Apple1);
scales.add(Apple2);
scales.add(Tomato1);
scales.add(Tomato2);
console.log(Scales.productsArr);
scales.getSumScale();
scales.getNameList();
