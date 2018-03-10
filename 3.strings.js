// 模板字符串

// 字符串可以 ''或""  ``
let name = 'zfpx';
let age = 9;
// let str = '名字是:\'\''+name+'年龄是:'+age;
let str = `名字是''""'':${name}年龄是:${age}\`\``
console.log(str);
// 反引号中不能套反引号,如果需要 需要转义

// 模板字符串的实现 就是替换操作
let name = 'zfpx';
let age = 9;
let str = '名字是:${name}年龄是:${age}'
str = str.replace(/\$\{([^}]+)\}/g,function(){
   return eval(arguments[1])
});
console.log(str);

// 模板字符串可以换行，也可以写js表达式
let arr = ['珠峰',9];
// map映射 可以将数组映射成一个新的数组
let newArr = arr.map(function(item){
    return (
        `<li>
            <span>${item}</span>
        </li>`
    )
})
str = `
    <ul>
        ${newArr.join('')}
    </ul>
`
console.log(str);


// 代表的模板字符串,可以根据自己定义的方法进行对字符串的扩展操作
let name = 'zfpx';
let age = 9;
function tag(arrs,...args){ // 函数的剩余运算符,只能在函数的最后的参数中使用
    // arguments是函数内置的
    console.log(arguments)
    console.log(arrs,args);
    let str = ''
    for(let i = 0;i<args.length;i++){
        str+=(arrs[i]+"("+args[i]+")")
    }
    str+=arrs[arrs.length-1];
    return str;
}
// tag的名字是随便起的
let newStr = tag`名字是:${name}年龄是:${age}.${age}`;
console.log(newStr);


//includes endsWith startsWith
// boolean类型
let str = 'zfpxjwzfpx';
console.log(str.startsWith('zfpx'));

// padStart 补0 padEnd  补0操作
let date = new Date();
let str = `${date.getFullYear()}年${(date.getMonth()+1).toString().padEnd(8,0)}月${date.getDate()}`;
console.log(str);

