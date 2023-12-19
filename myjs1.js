//problem 1
function isPal(str) {
    const Str = str.toLowerCase();

    const reversedStr = Str.split('').reverse().join('');
    return Str === reversedStr;
}


const exampleString1 = "level";
const exampleString2 = "moon";
const exampleString3 ="noon";
console.log(isPal(exampleString1));
console.log(isPal(exampleString2));
 console.log(isPal(exampleString3));


//problem 2

function sumarray(numbers){
    let sum=0;
    for(i=0; i<numbers.length; i++){
    sum += numbers[i];
}
return sum;
}
const numbers =[1,2,3,4,5];
const total = sumarray(numbers);
console.log(total);


//problem6
function power(base){

    function calculateRaisedToPower(exponent){
        let result;
        if(exponent===0){
            result = 1;
        }
        else{
            result = base*calculateRaisedToPower(exponent-1)
        }
        return result;
    }
    return calculateRaisedToPower;
}
let base2 = power(2);
let result = base2(4);
console.log(result);

//problem 5
function mergeObjects(obj1, obj2) {

    const mergedObject = { ...obj1, ...obj2 };
  
    return mergedObject;
  }
  
  
  const obj1 = { a: "delhi", b: "mumbai", c: "kolkata" };
  const obj2 = { b: "chennai", c:"hyderabad", d: "gurugram" };
  
  const merged = mergeObjects(obj1, obj2);
  console.log(merged);
  


  