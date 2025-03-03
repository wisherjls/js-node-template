//jonathan sayers 3/2/2025

//Exercise 1: Basic Loop Practice

// A for loop is used when you know the amount of iterations you want to run
// Using a for loop to count from 1 to 10
for (let i = 1; i <= 10; i++) {
	console.log(i); // Output each number to the console
}

// A while loop is used when you don't know the amount of iterations you want to run

let i = 1;
while (i <= 10) {
	// Using a while loop to count from 1 to 10
	console.log(i); // Output each number to the console
	i++; // Increment the counter
}

//Exercise 2: Array Iteration

const favoritegames = ["Zelda", "portal", "gmod", "doom", "halo"]; //array of some of my favorite games

// Using a for loop to iterate through the array
for (let i = 0; i < favoritegames.length; i++) {
	console.log(favoritegames[i]); // Output each game to the console
}
