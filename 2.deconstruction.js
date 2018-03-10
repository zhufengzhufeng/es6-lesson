// 等号左边和等号右边解构相等 就可以解构
// 解构叫既声明 又赋值
let arr = [1, 2, 3];
let a1 = arr[0];
let a2 = arr[1];
let a3 = arr[2];

console.log(a1, a2, a3)

// -----------------
let [a1, a2, a3] = [1, 2, 3]; //数组的key要对应上
console.log(a1, a2, a3);

//  对象的解构 想更改名字可以采用：的方式
let { age, name: n } = { name: 'zfpx', age: 9 };
console.log(n, age);


// =可以赋默认值 ：用来更改名字的
let arr = [{name:'zfpx',age:9},'回龙观',[1,2,3]];
let [{age,address="东大街"},b] = arr;
console.log(b,age,address);

// 应用
function ajax({url=new Error(),method='get',data=''}){
    console.log(url,method,data)
    // let url = options.url||  new Error('url没填');
    // let method = options.method || 'get'
}
ajax({
    url:'/zfpx',
    data:{}
});