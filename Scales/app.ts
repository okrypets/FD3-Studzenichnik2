'use strict';

class Scales {

    productsArr:Product[] = [];


    add(_product:Product):void {
        this.productsArr.push( _product);
        console.log(this.productsArr);
    }
    getSumScale():number {
        let sumScale:number=0;
        this.productsArr.forEach((product) => {
            sumScale += product.getScale();
        });
        console.log(sumScale);
        return sumScale
    }
    getNameList():Array<string> {
        let nameList:Array<string>=[];
        this.productsArr.forEach((product) => {
            nameList.push(product.getName());
        });
        console.log(nameList);
        return nameList
    }

}


class Product {

    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }

}


class Apple extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale():number {
        super.getScale();
        return this.scale;
    }

    getName():string {
        super.getName();
        return this.name;
    }
}

class Tomato extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale():number {
        super.getScale();
        return this.scale;
    }

    getName():string {
        super.getName();
        return this.name;
    }
}

const Apple1:Product = new Apple("Apple_Big", 23);
const Apple2:Product = new Apple("Apple_small", 3);
const Tomato1:Product = new Tomato("Tomato_Big", 12);
const Tomato2:Product = new Tomato("Tomato_small", 100);

let scales = new Scales();
scales.add(Apple1);
scales.add(Apple2);
scales.add(Tomato1);
scales.add(Tomato2);
console.log(scales.productsArr);
scales.getSumScale();
scales.getSumScale();
scales.getNameList();
scales.getNameList();
