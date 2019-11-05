'use strict';

class Scales {

    productsArr:Product[] = [];


    add(_product:Product):void {
        console.log(this.productsArr);
        this.productsArr.push( _product);
    }
    getSumScale():any {
        let sumScale:number=0;
        this.productsArr.forEach((product) => {
            return sumScale += product.getScale(product.scale);
        });
        console.log(sumScale);
    }
    getNameList():any {
        let nameList:Array<string>=[];
        this.productsArr.forEach((product) => {
            return nameList.push(product.getName(product.name));
        });
        console.log(nameList);
    }

}


class Product {

    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    getScale(_scale:number ):number {
        //console.log(this.scale);
        return this.scale = _scale;
    }

    getName(_name:string):string {
        //console.log(this.name);
        return this.name = _name;
    }

}


class Apple extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale(_scale:number ):number {
        super.getScale(_scale);
        return this.scale = _scale;
    }

    getName(_name:string):string {
        super.getName(_name);
        return this.name = _name;
    }
}

class Tomato extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }

    getScale(_scale:number ):number {
        super.getScale(_scale);
        return this.scale = _scale;
    }

    getName(_name:string):string {
        super.getName(_name);
        return this.name = _name;
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
console.log(scales.productsArr);
scales.getSumScale();
scales.getSumScale();
scales.getNameList();
scales.getNameList();
