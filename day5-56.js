// Return all the palindromes in an array
// Arrow
let arrc = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromes = arrc.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes)

// Anomous
let array = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromess = array.filter(function (w) {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromess)

let arrayq = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromesa = arrayq.filter(function (w) {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromesa)

// arrow
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);



var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
  
var res= function removeDuplicates(arr) {
	return arr.filter((item, 
		index) => arr.indexOf(item) === index);
}
  
console.log(arr.res);

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
  
var res= function (arr) {
  removeDuplicates=arr.filter((item, 
		index) => arr.indexOf(item) === index);
    return 
}
	 
  
console.log(arr.res);

// Rotate an array by k times

var RightRotate=function (a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            document.write(a[n + i - k] + " ");
        }
        else {
  
            // Prints array after
            // 'k' elements
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}
  
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);


(function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            document.write(a[n + i - k] + " ");
        }
        else {
  
            // Prints array after
            // 'k' elements
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
});
  
// Driver code
let Array1 = [1, 2, 3, 4, 5];
let N1 = Array1.length;
let K1 = 2;
  
RightRotate(Array1, N1, K1);
  
// This code is contributed by gfgking.
