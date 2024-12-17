import React, { useRef, useState } from "react";
import Task from "./Task";

const CreatedProject = ({ selectedProject, taskHandler }) => {
  const { id, title, description, date, tasks } = selectedProject;
  const [showTask, setShowTask] = useState(false);
  const taskName = useRef("");
  const buttonClass = "rounded p-4 bg-black text-yellow-200 uppercase";

  const handleTaskSaver = () => {
    const taskCopy = [...tasks.map((task) => ({ ...task }))];
    
    taskHandler([...taskCopy, { id: new Date(), name: taskName.current.value }]);
  };

  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-cyan-300">{title}</div>
        <div>
          <button className={buttonClass}>delete</button>
        </div>
      </div>
      <div>Created on {date}</div>
      <div>{description}</div>
      <hr className="h-1 bg-slate-200" />

      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-cyan-300">All Tasks</div>

        <div>
          <button className={buttonClass} onClick={() => setShowTask(true)}>
            create Task
          </button>
        </div>
      </div>
      {showTask && (
        <div className="flex justify-between">
          <div>
            <input type="text" placeholder="Enter Task" ref={taskName} />
          </div>
          <div className="flex gap-2">
            <button className={buttonClass} onClick={handleTaskSaver}>
              Save
            </button>
            <button onClick={() => setShowTask(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="rounded bg-slate-200 h-80">
        {tasks.map(({ name, id }) => (
          <Task name={name} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default CreatedProject;
