import Column from './components/Column';
import './App.css';

function App() {
	return (
		<div className="App">
			<Column state='PLANNED' />
			<Column state='ONGOING' />
			<Column state='DONE' />
		</div>
	);
}

export default App;
