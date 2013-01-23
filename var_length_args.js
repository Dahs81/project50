// This file is to show examples of using variable length arguments in functions

// #### Example 1: add as many numbers as there are parameters.
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


