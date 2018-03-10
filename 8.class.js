// 类 以前就是构造函数
function Parent(){
    this.name = 'zfpx';
}

Parent.prototype.smoking = function(){
    console.log('吸烟')
}
function Child(){
}
// 只继承公有的方法
function create(parentProto,param){
    function Fn(){}; // 相当于构建一个类 类的原型链指向了父类的原型
    Fn.prototype = parentProto;
    let fn = new Fn();
    // 手动改变constructor的指向
    fn.constructor = param.constructor.value;
    return fn;
}
// 儿子查找时 可以查找到父类的原型，所以可以拿到父类的公共方法
Child.prototype =create(Parent.prototype,{constructor:{value:Child}});
let child = new Child;
console.log(child.constructor);



// 不用这种方式
// Child.prototype = new Parent();
// let child = new Child;
// console.log(child.constructor);
