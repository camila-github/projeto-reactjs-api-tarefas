import React from "react";
import { CgCloseR, CgNotes } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "../Task/style.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	
	const history = useHistory();

	const handleTaskDetailsClick = () => history.push(`/${task.title}`);
	
	return (
		<div
			className="task-container"
			style={ task.completed ? { borderLeft: "6px solid #F3F781" } : {}}
		>
			<div className="task-title" 
				onClick={ () => handleTaskClick(task.id) }>
				{task.title}
			</div>

			<div className="buttons-container">
				<button
					className="remove-task-button"
					onClick={ () => handleTaskDeletion(task.id) }
				>
					<CgCloseR />
				</button>
				<button
					className="see-task-details-button"
					onClick={handleTaskDetailsClick}
				>
					<CgNotes />
				</button>
			</div>
		</div>
	);
};

export default Task;
