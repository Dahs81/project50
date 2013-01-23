// Date: 01.22.13

// This file is to show examples of using variable length arguments in functions
// Exercises inspired by Secrets of the Javascript Ninja

var _ = require('underscore');

// #### Example 1: add as many numbers as there are parameters, using arguments.length
function add() {
	var total = 0;
	for (var i = 0; i < arguments.length; ++i) {
		total += arguments[i];
	}

	return total;
}

var test2 = add(2, 3);
console.log(test2);

var test3 = add(2, 3, 4);
console.log(test3);

var test4 = add(2, 3, 4, 5);
console.log(test4);

// #### From Ninja Book
function min(array){
	return Math.min.apply(Math, array);
}

var minInArray = min([7, 3, 4, 5, 6]);
console.log(minInArray);

var minInArray2 = min([7, 3, 4, 5, 6, 1, 8, 2]);
console.log(minInArray2);

// ####
function myExtend(obj) {
	if (arguments[1] && 'object' === typeof arguments[1]) {
		_.extend(obj, arguments[1] || {});
	}
	return obj;
}

var testObj1 = myExtend({name: 'Shad'});
console.log(testObj1);

var testObj2 = myExtend({name: 'Shad'}, {age: 31});
console.log(testObj2);

var testObj3 = myExtend({name: 'Shad'}, {newAge: 32});
console.log(testObj3);



