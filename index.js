//Identify javascript objects
//access values stored in the objects
//learning about js objects methods


// const address = ["11 Broadway","2nd Floor","New York","NY","1004"];



// address[1] = "3rd Floor";


// console.log(address);



//what are  objects are collections of data 
//consist of  properties  bounded by curly braces
//properties can point to any data 

// const obj = {
//     key1: value1,
//     key2: value2,
// };



//Nested objects 

// const obj ={

//     key1: value1,
//     key2:{

//         innerkey1: innerValue1,
//         innerkey2: innerValue,
//     },
// }


// //nesting objects inside other objects



// const address = {

//     street:{

//         line1: "11 Broadway",
//         line2 : "2nd Floor",

//     },

//     city:"New York",
//     state : "NY",
//     zipCode : "10004",
// };






// const meals = {
//          //objects with properteies
//     breakfast: "Avocado toast",
//     lunch : "Oatmeal",
//     dinner : "Scrambled eggs",
// };


// //multiple properties can g have same values in 
// // objects in javascript but keys must be unique




// console.log(meals.breakfast);
// //avocado toast

// console.log(meals.dinner);






//accessing objects dynamically using bracket notation

const meals  = {
    breakfast : "Oatmeal",
    lunch : "ceasar Salad",
    dinner : "chimichangas",
};


let mealName = "lunch";


console.log(meals[mealName]);
