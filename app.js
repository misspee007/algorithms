// ALGORITHMS

//1. Function That converts Fahrenheit to Celsius
const  convertFahrToCelsius = (value)=>{

    const result = ((value - 32) * (5/9)).toFixed(4);
    const valFloat = parseFloat(value);

    if (isNaN(valFloat) || Array.isArray(value)){
        return (`${JSON.stringify(value)} is not a valid number, but a/an ${Array.isArray(value) ? 'array' : typeof value}.`);
    } else {
        return result;
    }
}

// console.log(convertFahrToCelsius("1"));
// console.log(convertFahrToCelsius(""));
// console.log(convertFahrToCelsius("one"));
// console.log(convertFahrToCelsius([1]));
// console.log(convertFahrToCelsius([]));
// console.log(convertFahrToCelsius({a:1}));
// console.log(convertFahrToCelsius({}));
// console.log(convertFahrToCelsius(true));



// 2.
function checkYuGiOh(n) {

    const nFloat = parseFloat(n);
    
    if (isNaN(nFloat) || Array.isArray(n)) {
        return ( `invalid parameter: ${JSON.stringify(n)}`);
    } else {
        var arr = [];
        for (var i=1; i <= n; i++) {
            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                arr.push("yu-gi-oh");
            } else  if(i % 3 === 0 && i % 5 === 0){
                arr.push("gi-oh");
            } else if(i % 2 === 0 && i % 5 === 0){
                arr.push("yu-oh");
            } else if(i % 2 === 0 && i % 3 === 0){
                arr.push("yu-gi");
            } else if(i % 2 === 0){
                arr.push("yu");
            } else if(i % 3 === 0){
                arr.push("gi");
            } else if(i % 5 === 0){
                arr.push("oh");
            } else {
                arr.push(i);
            }
        }
        return (arr);
    }
    
}

// console.log(checkYuGiOh(10));
// console.log(checkYuGiOh("10"));
// console.log(checkYuGiOh("Fizzbuzz is meh"));
// console.log(checkYuGiOh("a"));
// console.log(checkYuGiOh(""));
// console.log(checkYuGiOh([1]));
// console.log(checkYuGiOh([]));
// console.log(checkYuGiOh({a:1}));
// console.log(checkYuGiOh({}));
// console.log(checkYuGiOh(true));   