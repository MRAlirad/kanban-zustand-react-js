/* eslint-disable react/prop-types */
import './Column.css';
import Task from './Task';
import { useStore } from '../store';

const Column = ({ state }) => {
	const tasks = useStore(store => 
		store.tasks.filter((task)=> task.state === state)
	);

	return (
		<div className="column">
			<p>{state}</p>
			{
				tasks.map((task)=> (
					<Task key={task.id} title={task.title} />
				))
			}
		</div>
	);
};

export default Column;
