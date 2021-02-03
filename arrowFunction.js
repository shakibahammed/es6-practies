// regular function (start)
function calculation1 (num1 ,num2){
    return num1 +num2 ;
}
const result1 =calculation1 (4 ,6 );
console.log( result1 ) 
// This Function   END


// Function declaration  (start)
const calculation2 = function (num){
return num *3;
}
const result2 = calculation2(3);
console.log (result2);
// This Function   END


// (start)
// Array Function(another peramiters)
const calculation3 = (num1 ,num2) => num1 + num2 ;
const result3 =calculation3(3 ,4 );
console.log(result3);
// This Function   END

// start
// Array Function(single peramiters)
const addNum =(num) => num*3 ;
const result4 =addNum(5);
console.log(result4);
// This Function   END

// start
// Array Function(No peramiters)
const addNum2 =( ) => 100 ;
const result5 =addNum2();
console .log (result5);
// This Function   END


// ARROW FUNCTION STARTED
const addNumber = (num1 , num2) =>{
const sum = num1 + num2;
const diff = num1 - num2;
const result = sum * diff;
 return result;
}
const result6 = addNumber( 9, 6);
console.log(result6);
// This Function   END