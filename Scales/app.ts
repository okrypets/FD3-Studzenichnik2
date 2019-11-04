'use strict';

class Scales {

    productsArr:Product[] = [];
    sumScale:number=0;
    nameList:Array<string>=[];

    constructor() {
    }

    add(_product:Product):void {
        this.productsArr.push( _product);
        console.log(this.productsArr);
    }
    getSumScale():void {
        this.sumScale = 0;
        this.productsArr.forEach((product) => {
            this.sumScale += product.getScale(product.scale);
        });
        //this.sumScale = this.productsArr.reduce((sum, current) => sum + current.getScale(current.scale), 0);
        //this.sumScale = this.productsArr.reduce((sum, current) => sum + current.scale, 0);
        console.log(this.sumScale);
    }
    getNameList():void {
        this.nameList = [];
        this.productsArr.forEach((product) => {
            let _name = product.getName(product.name);
            this.nameList.push(_name);
        });
        console.log(this.nameList);
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
