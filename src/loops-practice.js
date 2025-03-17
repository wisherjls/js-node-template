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

//Exercise 3: Working with Objects in Arrays

// array of players stats
const players = [
	{ name: "jon", kills: 10, deaths: 5 },
	{ name: "wisher", kills: 5, deaths: 10 },
	{ name: "swampy16", kills: 15, deaths: 3 },
];
// Using a for loop to iterate through the array
for (let i = 0; i < players.length; i++) {
	console.log(players[i]); // Output each player to the console
}

//Calculatee the kd ratio
for (let i = 0; i < players.length; i++) {
	const player = players[i];
	const kdRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2);
	// Calculate kill/death ratio, using Math.max to avoid devideing by zero

	console.log(
		`${player.name}: ${player.kills} kills, ${player.deaths} deaths, ${kdRatio} kd ratio`,
	);
}

// Find the player with the best K/D ratio
let bestPlayer = players[0];
// Loop through the rest of the players
for (let i = 1; i < players.length; i++) {
	// Compare current player's K/D ratio with the best so far than updates the best player
	if (
		players[i].kills / Math.max(1, players[i].deaths) >
		bestPlayer.kills / Math.max(1, bestPlayer.deaths)
	) {
		bestPlayer = players[i];
	}
}
// Output the player with the best K/D ratio
console.log(
	`Best K/D Ratio: ${bestPlayer.name} with K/D ratio of ${(bestPlayer.kills / Math.max(1, bestPlayer.deaths)).toFixed(2)}`,
);
