const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(numbers, "numbers");
console.log(doubledNumbers, "doubledNumbers");

const monsters = [
	{ name: "Cacodemon", health: 400, damage: 35 },
	{ name: "Baron of Hell", health: 1000, damage: 45 },
	{ name: "Cyberdemon", health: 4000, damage: 125 },
	{ name: "Hell Knight", health: 800, damage: 25 },
	{ name: "Imp", health: 200, damage: 20 },
	{ name: "Lost Soul", health: 100, damage: 10 },
	{ name: "Pinky", health: 300, damage: 15 },
	{ name: "Revenant", health: 500, damage: 30 },
	{ name: "Spectre", health: 200, damage: 20 },
	{ name: "Spider Mastermind", health: 2000, damage: 50 },
	{ name: "Vile", health: 1000, damage: 40 },
	{ name: "Zombie", health: 100, damage: 5 },
	{ name: "Zombieman", health: 200, damage: 10 },
];

const monstersWithHEalthBounus = monsters.map((monster) => {
	moonster.health += 100;
	return monster;
});

console.log(monsters, "monsters");
console.log(monstersWithHEalthBounus, "monstersWithHEalthBounus");
