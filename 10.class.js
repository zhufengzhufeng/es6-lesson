class Parent {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
    // 通过类来调用的
    static fn(){
        return 100;
    }
}
// es6的extends方法可以继承私有属性还可以公有属性
// 静态方法只能类调用 而且可以继承
class Child extends Parent{
    constructor(name,age){
        super(name); // 子类有构造函数必须使用super //Parent.call(this,name)
        this.age = age;
    }
}
let child = new Child('zf',9);
console.log(child.name);

//Parent(); // without new 类只能通过new来调用