import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addDigimonsThunk from '../../store/modules/digimons/thunks';
import { AddButton, Container, Form, TextField, Title } from './style';

const Search = () => {
	const [input, setInput] = useState('');
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	const handleSearch = (inputValue) => {
		setError(false);
		dispatch(addDigimonsThunk(inputValue));
		setInput('');
	};

	return (
		<Container>
			<Title>Procure pelo seu Digimon!</Title>
			<Form>
				<TextField
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="Digimon"
				></TextField>
				<AddButton onClick={() => handleSearch(input)}>
					Pesquisar
				</AddButton>
			</Form>
		</Container>
	);
};

export default Search;
