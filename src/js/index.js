import axios from 'axios';

async function getResults(query) {
	const res = await axios(`forkify-api.herokuapp.com?q=${query}`)
	console.log(res);
}

getResults();