/* eslint-disable react/prop-types */
import { useState } from 'react';
import Task from './Task';
import { useStore } from '../store';
import './Column.css';

const Column = ({ state }) => {
	const [text, setText] = useState('');
	const [open, setOpen] = useState(false);

	const tasks = useStore(store => store.tasks.filter(task => task.state === state));
	const addTask = useStore(store => store.addTask);

	return (
		<div className="column">
			<div className="titleWrapper">
				<p>{state}</p>
				<button
					onClick={() => {
						setOpen(true);
					}}
				>
					Add
				</button>
			</div>
			{tasks.map(task => (
				<Task
					key={Math.random()}
					title={task.title}
				/>
			))}
			{open && (
				<div className="Modal">
					<div className="modalContent">
						<input
							onChange={e => setText(e.target.value)}
							value={text}
						/>
						<button
							onClick={() => {
								addTask(text, state);
								setText('');
								setOpen(false);
							}}
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Column;
