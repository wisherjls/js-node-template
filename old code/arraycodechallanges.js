//challange 1
// Data for the backpack containing different items
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },  
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },  
    { item: 'rockets', quantity: 1, priceEa: 5.0 },  
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 }, 
  ];
  
  // Use reduce to calculate the total value of all items in the backpack
  const totalValue = backpackFullOfAmmo.reduce((total, currentItem) => {
    // Multiply the quantity by the price per item and add to the total
    return total + (currentItem.quantity * currentItem.priceEa);
  }, 0);  // Start the total at 0
  
  // Output the total value of all items in the backpack
  console.log(totalValue); 
  
  
  //challange 2
  const monsters = [
    { name: 'Cacodemon', health: 400, damage: 35 },
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    { name: 'Hell Knight', health: 800, damage: 25 },
    { name: 'Imp', health: 200, damage: 20 },
    { name: 'Lost Soul', health: 100, damage: 10 },
    { name: 'Pinky', health: 300, damage: 15 },
    { name: 'Revenant', health: 500, damage: 30 },
    { name: 'Spectre', health: 200, damage: 20 },
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    { name: 'Vile', health: 1000, damage: 40 },
    { name: 'Zombie', health: 100, damage: 5 },
    { name: 'Zombieman', health: 200, damage: 10 },
  ];
  
  // 1. Use the `map` method to create a new array with just the names of the monsters
  const monsterNames = monsters.map(monster => monster.name);  // Transforms each monster object to its name
  console.log(monsterNames); // Output: Array of monster names
  
  // 2. Use the `filter` method to find all monsters with health greater than 150
  const monstersWithHighHealth = monsters.filter(monster => monster.health > 150); // Filters monsters with health > 150
  console.log(monstersWithHighHealth); // Output: Array of monsters with health greater than 150
  
  // 3. Use the `reduce` method to calculate the total health of all monsters
  const totalHealth = monsters.reduce((total, monster) => total + monster.health, 0); // Adds up health of all monsters
  console.log(totalHealth); // Output: Total health of all monsters
  
  // 4. Use the `sort` method to arrange monsters from highest damage to lowest
  const sortedByDamage = monsters.sort((a, b) => b.damage - a.damage); // Sorts monsters by damage in descending order
  console.log(sortedByDamage); // Output: Monsters sorted by damage, from highest to lowest
  