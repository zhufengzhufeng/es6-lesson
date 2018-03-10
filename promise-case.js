let Promise = require('./Promise');

let promise = new Promise(function(resolve,reject){
    reject(200);
    resolve(300);
})
promise.then(function(data){
    console.log(data);
},function(err){
    console.log('err',err)
});

// 明天还要实现 链式调用和引用其他库的promise Promise.all Promise.race
// Promise.resolve generator async await  Q库 co库 blueBird node基础