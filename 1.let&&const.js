// es6 -> es2015 babel 可以将es6 转换成es5

// 1.var 作用域的问题（会污染全局作用域）
// 2.var 的声明问题 可能有重复声明的问题
// 3.变量提升 预解释
// 4.常量 不能被更改的量


// 1)格式化  CTRL + ALT + F
const a = 1;
const a = 2;
// Identifier 'a' has already been declared 变量不能重复声明，同一个作用域不能重复声明

//2) 声明的变量let和const 不会声明到window上
// 作用域：函数作用域 全局作用域
let a = 1;
for(let i = 0; i<3;i++){

}
console.log(i);
// console.log(window.a);
// {} 可以表示一个作用域, 以前循环时用var定义的会声明到全局上

// 暂存死区
let a = 1;
if(true){
    console.log(a);
    let a  = 2;
}
// 用let声明的变量会绑定在当前作用域内，尽量避免这样声明


// 3.用var声明的会预解释 但是不会赋值
console.log(b);
let a = 1;
let b = function(){

}

//4. 常量 const 一般常量都会用大写来表示
const PI = {name:3.14};
PI.name = 3.15
// 不能被更改的量,引用地址不变就可以


for(let i = 0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    })
}
// 循环绑定事件
