/** @format */
import React, { useState } from "react";
import { Task as TaskData } from "../../../../../../Helpers/competitions/Tasks";
import "./competitionTask.css";

const CompetitionTasks = ({ filterValue }) => {
  const [visibleTasks, setVisibleTasks] = useState(3); // Initial number of tasks to display

  // Filter the tasks based on the input value
  const filteredTasks = TaskData.filter((task) =>
    task.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleTasks((prevVisibleTasks) => prevVisibleTasks + 3); // Increase the number of visible tasks
  };
  const handleShowLess = () => {
    setVisibleTasks(3); // Reset to the initial number of tasks
  };

  return (
    <div className="competition-task">
      <h4>Competitions for you</h4>
      {filteredTasks.slice(0, visibleTasks).map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-one">
            <img src={task.image} alt="tasks" />
          </div>
          <div className="task-two">
            <p className="task-highlight">{task.title}</p>
            <button>{task.timeline}</button>
            <p className="task-highlight">{task.price}</p>
            <p>{task.participants}</p>
          </div>
        </div>
      ))}

      {/* {visibleTasks < filteredTasks.length && ( 
        <div className="competition-more">
          <button onClick={handleViewMore}>VIEW MORE</button>
          <button onClick={handleShowLess} className="show-less">
            SHOW LESS
          </button>
        </div>
      )}
    </div>
  );
}; */}

      {visibleTasks < filteredTasks.length || visibleTasks > 3 ? (
        // Display "Show Less" button when extra data is shown or all data is visible
        <div className="competition-more">
          <button onClick={handleViewMore}>VIEW MORE</button>
          <button onClick={handleShowLess} className="show-less">
            SHOW LESS
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CompetitionTasks;
