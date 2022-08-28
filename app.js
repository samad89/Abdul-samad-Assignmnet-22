// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber
 {
n = n + "";
    return n.split("").reverse().join("");
 }
console.log(Number(reverseNumber(32243)));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
//  madam, radar or level.


 function checkPalindrome(string) {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

   if(string == reverseString) {
        console.log('It is a palindrome');
    }
   else {
       console.log('It is not a palindrome');
   }
}
 const string = prompt('Enter a string: ');

checkPalindrome(string);



// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g


 function combu(s){
    var buff = [];
     var res = [];
   for (i=0;i<s.length;i++){
      buff = [s[i]];
       var index=0;
       while(res[index]){
           buff.push(''+res[index]+s[i]);
           index++;
       }
       res = res.concat(buff);
   }
  return res;
 }
    
 console.log(combu('dog'));


 // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


 function alphabet_order(str)
    {
return str.split('').sort().join('');
   }
console.log(alphabet_order("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

 function uppercase(str)
{
var array1 = str.split(' ');
var newarray1 = [];
    
for(var x = 0; x < array1.length; x++){
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function find_longest_word(str)
{
var array1 = str.match(/\w[a-z]{0,}/gi);
var result = array1[0];

for(var x = 1 ; x < array1.length ; x++)
{
if(result.length < array1[x].length)
{
 result = array1[x];
} 
}
return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowel_count(str1)
var vowel_list = 'aeiouAEIOU';
var vcount = 0;
  
 for(var x = 0; x < str1.length ; x++)
{
if (vowel_list.indexOf(str1[x]) !== -1)
{
vcount += 1;
}
  
}
}
console.log(vowel_count("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.

function test_prime👎
{

if (n===1)
 {
return false;
}
else if(n === 2)
 {
 return true;
}else
{
for(var x = 2; x < n; x++)
{
if(n % x === 0)
 return false;
}
}
return true;  
}
}
console.log(test_prime(37));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns:
//  object, boolean, function, number, string, and undefined.

 function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
 {
for (x = 0, len = dtypes.length; x < len; x++) 
{
if (value instanceof dtypes[x])
{
}
}
return typeof value;
}
console.log(detect_data_type(12));
onsole.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4


function Second_Greatest_Lowest(arr_num)
{
arr_num.sort(function(x,y)
{
return x-y;
});
var uniqa = [arr_num[0]];
var result = [];
  
for(var j=1; j < arr_num.length; j++)
{
if(arr_num[j-1] !== arr_num[j])
{
uniqa.push(arr_num[j]);
}
result.push(uniqa[1],uniqa[uniqa.length-2]);
return result.join(',');
}

console.log(Second_Greatest_Lowest([1,2,3,4,5]));