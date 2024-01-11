/* eslint-disable react/prop-types */
import './Column.css';
import Task from './Task';
const Column = ({ state }) => {
	return (
		<div className="column">
			<p>{state}</p>
			<Task title={'TODO'} />
		</div>
	);
};

export default Column;
