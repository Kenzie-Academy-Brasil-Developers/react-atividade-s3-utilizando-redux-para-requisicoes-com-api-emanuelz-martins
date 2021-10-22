import axios from 'axios';

import { addDigimon } from './actions';

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
	axios
		.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
		.then(({ data }) => {
			const filteredDigimon = data.filter(({ name }) => name === digimon);
			dispatch(addDigimon(filteredDigimon));
		})
		.catch((error) => setError(error));
};

export default addDigimonsThunk;
