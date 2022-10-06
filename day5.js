// 1) Print odd numbers in an array

// anonymous function
var array = [1,2,3,4,5,6,7,8,9,10];
var odd = function(){
    var result = array.filter(number => number%2!=0)
    return result;
}
console.log(odd());

// IIFE function
var array = [1,2,3,4,5,6,7,8,9,10];
(function odd(){
    for(var i=0; i<array.length; i++){
        if(array[i]%2!=0)
        console.log(array[i])
    }
})
();

// arrow function

var array = [1,2,3,4,5,6,7,8,9,10];
var odd = ()=>{
    var result = array.filter(number => number%2!=0)
    return result;
}
console.log(odd());


// 2) Convert all the strings to title caps in a string array
const str1 = "foo bar baz";
var num = function(){
    const newStr1 = str1.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
 console.log(newStr1);
}
();
// IFFE FUNCTION
const str = "foo bar baz";
(function(){
    const newStr = str.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
 console.log(newStr);
})
();

// arrow function
const str2 = "foo bar baz";
var num = ()=>{
    const newStr2 = str2.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
 console.log(newStr2);
}
;