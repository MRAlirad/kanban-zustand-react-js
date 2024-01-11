/* eslint-disable react/prop-types */
import './Task.css';
import classNames from 'classnames';

const STATUS = 'PLANNED'
const Task = ({ title }) => {
	return <div className="task">
        <div>{title}</div>
        <div className='bottomWrapper'>
            <div></div>
            <div className={classNames('status', STATUS)}>{STATUS}</div>
        </div>
    </div>;
};

export default Task;
