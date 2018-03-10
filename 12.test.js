class Parent{
    constructor(){
        return 1000
    }
}
class Child extends Parent{
    constructor(age){
        super();
        this.age = age
    }
}   

let child = new Child('9');
console.log(child);

