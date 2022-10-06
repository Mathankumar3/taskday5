// Sum of all numbers in an array

var array = [1,2,3,4]

var sum = 0;
var sum= function(){
    for(var i = 0; i < array.length; i++){

        // sum += numbers[i]
        sum=sum+array[i];
        
        }
        
        console.log('Your sum is ' + sum);

}
();
 
// IIFE Function

var numbers = [1,2,3,4]

var sum = 0;
(function(){
    for(var i = 0; i < numbers.length; i++){

        sum += numbers[i]
        
        }
        
        console.log('Your sum is ' + sum);

})
();
// Arrow function
var array = [1,2,3,4]

var sum = 0;
var sum= () =>{
    for(var i = 0; i < array.length; i++){

        // sum += numbers[i]
        sum=sum+array[i];
        
        }
        
        console.log('Your sum is ' + sum);

}
;
// Return all the prime numbers in an array


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter(function(number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
// arr = arr.filter(function(elem) { reference
// Arrow function

    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numArray);
    


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
var cle= function(){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
};
    console.log(cle);
    