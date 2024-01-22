/* eslint-disable react/prop-types */
import './Task.css';
import classNames from 'classnames';
import { useStore } from '../store';

const Task = ({ title }) => {
	const task = useStore(store => store.tasks.find(task => task.title === title));

	return (
		<div className="task">
			<div>{task.title}</div>
			<div className="bottomWrapper">
				<div></div>
				<div className={classNames('status', task.state)}>{task.state}</div>
			</div>
		</div>
	);
};

export default Task;
