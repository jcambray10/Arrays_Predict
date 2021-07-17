// var arr = [2,4,6,8,10];
// console.log(arr[0]);  
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);  

// var arr = [2,4,6,8,10];
// for (var i = 0; i < arr.length; i++) {        
//     console.log(i);             // prints the index       
//     console.log(arr[i]);        // prints the array value at that index
// }

// Assignment Part 1
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
// Console Log Predict
// 8
// 6
// 7
// 5
// 3
// 0
// 9

// Assignment Log Part 2
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
// Predict Console log
// That is odd
// That is odd
// 8
// 4
// 2
// 0
// That is odd

// Assignment Part 3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// predicted console log 
// -1, -3, -8, 'Zero', -4, 1
// 5, 2, 1 

// actual Output
[
    // -1, -3,     -8,
    // 5,  'Zero', 2,
    // -4, 1
//   ]
//   [ -5, -2, -1 ]