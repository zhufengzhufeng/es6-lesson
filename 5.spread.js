// ...在函数中使用（函数的参数） 可以当成剩余运算符

// 展开运算符

let arr = [5,1, 2, 3];

// apply 可以改变this执行 第二可以传参

console.log(Math.min(...arr));



function sum(){
    console.log(arguments)
}
function fn(a,b,...args){
    // Array.prototyoe.slice.call(arguments,2)
    sum(...args)
}
fn('a','b',3,4,5,6,7)




// 数组的展开和对象的展开
let arr = [];
let arr1 = [1,2];
let arr2 = [3,4];
let newArr  = arr.concat(arr1,arr2);
console.log(newArr);

let arr1 = [1,2];
let arr2 = [3,4];
let newArr = [...arr1,...arr2];
console.log(newArr);

// 展开运算符 可以合并对象和数组
let school = {name:'zfpx',age:9};
let me = {name:'jw',address:'回龙观'}

let obj = {...school,...me};
console.log(obj);

let result = Object.assign(school,me);
console.log(result); // assign和展开运算符可以算是等价的

// 深拷贝 俩人没关系 浅拷贝 俩人有关系 （assign和...都是浅拷贝）
let school = {name:'zfpx',age:{age:1}}
let newSchool =Object.assign(school)
school.age.age =2;
console.log(newSchool)

// 实现一个深拷贝 不支持函数拷贝
let school = {name:'zfpx',age:{age:1},fn:function(){}}
let result = JSON.parse(JSON.stringify(school));
school.age.age =2;
console.log(result);

// 递归拷贝 保证如果是对象 生成一个空对象 将值放到对象内 
let school = {name:'zfpx',age:{age:1},fn:function(){},arr:[1,2,3]}
function deepClone(parent,c){ // {age:1}  {}
    let child = c||{};
    for(var key in parent){
        let current = parent[key];
        if(typeof current === 'object'){ //判断值是否是对象，对象另作处理
            //{age:{}}
            child[key] = Object.prototype.toString.call(current)==='[object Array]'?[]:{}
            // {age:1} {age:{}}
            deepClone(parent[key],child[key])
        }else{ 
            child[key] = parent[key];
        }
    }
    return child;
}
console.log(deepClone(school));