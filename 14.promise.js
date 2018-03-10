let fs = require('fs'); // fileSystem

// 读取 异步i/o
// promise可以简化的操作就是回调地狱
fs.readFile('./1.txt','utf8',function(err,data){
    if(err) return console.log(err);
    fs.readFile(data,'utf8',function(err,data){
        if(err) return console.log(err);
        console.log(data);
    });
});
// 2.promise可以在多个请求发送完毕后得到结果
let fs = require('fs');
fs.readFile('./1.txt','utf8',function(err,data){
    console.log(data);
})
fs.readFile('./2.txt','utf8',function(err,data){
    console.log(data);
})


// 1，Promise承诺 承诺你 默认情况下是等待状态 如果有一天成功了 就成功了，如果有一天失败了就失败，一旦成功就不能失败 一旦失败就不能成功

// resolve代表成功 reject失败 都是函数
let promise = new Promise(function(resolve,reject){ // exectur会同步执行
    console.log(3);
    //resolve('有钱了');
    //reject('没钱了');
    //throw new Error('失败');// 一旦调用时出现代码错误 就会走向失败
    setTimeout(function(){
        resolve();
    },1000)
});
console.log(4);
// Promise实例都有一个then方法
promise.then(function(data){
    console.log('data',data)
},function(err){
    console.log('err',err)
});
