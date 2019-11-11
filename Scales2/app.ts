'use strict';

class Scales {

    productsArr:IScalable[] = [];

    add(_product:IScalable):void {
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


interface IScalable {

    getScale():number;
    getName():string;

}


class Apple implements IScalable {

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

class Tomato implements IScalable {
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

const Apple1 = new Apple("Apple_Big", 23);
const Apple2 = new Apple("Apple_small", 3);
const Tomato1 = new Tomato("Tomato_Big", 12);
const Tomato2 = new Tomato("Tomato_small", 100);

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
