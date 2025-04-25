//await
const starwarsresponse = await fetch("https://www.swapi.tech/api/people/1");
const starwarsdata = await starwarsresponse.json();
console.log(starwarsdata);
