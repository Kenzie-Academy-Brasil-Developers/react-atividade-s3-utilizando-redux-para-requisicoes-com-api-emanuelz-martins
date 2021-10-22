import Digimons from './components/Digimons';
import Search from './components/Search';
import GlobalStyles from './styles/global';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Search />
			<Digimons />
		</div>
	);
}

export default App;
