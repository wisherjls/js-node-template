//then
const starwars = fetch("https://www.swapi.tech/api/people/1")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});
