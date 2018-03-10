function Parent(){
    this.name = 'zfpx';
}
Parent.fn = function(){
    console.log('fn')
}
Parent.prototype.smoking = function(){
    console.log('吸烟')
}
function Child(){
}
Child.prototype =Object.create(Parent.prototype,{constructor:{value:Child}});
let child = new Child;
// 静态属性 是可以继承
Child.__proto__ = Parent;
Child.fn();

// 定义属性的一种方法
let obj = {}
Object.defineProperty(obj,'a',{
    // 默认情况下定义的属性是不可枚举
    enumerable:true,
    configurable:true,
   // writable:true,
    set(val){
        console.log(val)
    },
    get(){
        console.log(100)
    }
  //  value:'zfpx'
})
obj.a = 100;