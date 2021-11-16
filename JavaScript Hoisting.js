// NUMBER 1

// GIVEN
// console.log(hello);                                   
// var hello = 'world'; 

// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // Will log undefined
// hello = 'world';

// -----------------------------------------------

// NUMBER 2
// GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle); 
// }

// AFTER HOISTING BY THE INTERPRETER
// var needle;
// test();
// function test(){
//     needle = 'magnet'; 
//     console.log(needle); //Will log 'magnet'
// }
// needle = 'haystack'; // Nothing will happen

// -----------------------------------------------

// NUMBER 3
// GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){
// 	var brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan); // Will print 'super cool' because function is not called


// -----------------------------------------------

// NUMBER 4
// GIVEN
// var food = 'chicken';
// console.log(food); // will log chicken
// eat();
// function eat(){
// 	food = 'half-chicken'; // food now is 'half chicken'
// 	console.log(food);
// 	var food = 'gone'; // food stays as 'half chicken' because this variable is only for the function
// }

// AFTER HOISTING BY THE INTERPRETER //Not sure how to rewrite this one
// var food = 'chicken';
// console.log(food); //Will log 'chicken'
// eat();
// function eat(){
// 	food = 'half-chicken'; 
// 	console.log(food);
// 	var food = 'gone';
// }

// -----------------------------------------------

// NUMBER 5
// GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER


// -----------------------------------------------

// NUMBER 6
// GIVEN
// console.log(genre); //undefined
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre); //rock
// 	var genre = "r&b";
// 	console.log(genre); //r&b
// }
// console.log(genre); //disco

// AFTER HOISTING BY THE INTERPRETER
// var genre = "disco";
// console.log(genre);
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);


// -----------------------------------------------

// NUMBER 7
// GIVEN
// dojo = "san jose";
// console.log(dojo); // san jose
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo); // seattle
// 	var dojo = "burbank";
// 	console.log(dojo); //burbank
// }
// console.log(dojo); // san jose

// AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	let dojo = "burbank";
// 	console.log(dojo);
// }
