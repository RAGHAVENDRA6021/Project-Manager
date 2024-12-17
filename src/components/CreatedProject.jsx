import React, { useRef, useState } from "react";
import Task from "./Task";

const CreatedProject = ({ selectedProject, taskHandler,deleteTask }) => {
  const { id, title, description, date, tasks } = selectedProject;
  const [showTask, setShowTask] = useState(false);
  const taskName = useRef("");
  const buttonClass = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"

  const handleTaskSaver = () => {
    setShowTask(false);
    const taskCopy = [...tasks.map((task) => ({ ...task }))];
    
    taskHandler([...taskCopy, { id: new Date().toLocaleTimeString(), name: taskName.current.value }]);
    taskName.current.value=''
  };

  const clearTask = (id)=>{
    const taskCopy = tasks.filter((task)=>task.id!==id)
    
    taskHandler(taskCopy);
  }

  const inputClass= "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  const labelClass= "text-sm font-bold uppercase text-stone-500"

  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex justify-between">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">{title}</header>
        <div>
          <button className={buttonClass} onClick={()=>deleteTask(id)}>delete</button>
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
      <div>
        tasks {JSON.stringify(tasks)}
      </div>
      {showTask && (
        <div className="flex justify-between">
          <div>
            <input type="text" className={inputClass} placeholder="Enter Task" ref={taskName} />
          </div>
          <div className="flex gap-2">
            <button className={buttonClass} onClick={handleTaskSaver}>
              Save
            </button>
            <button onClick={() => setShowTask(false)} className="text-stone-700 hover:text-red-500">Cancel</button>
          </div>
        </div>
      )}

      <div className="rounded bg-slate-200 h-80">
        {tasks.map(({ name, id }) => (
          <Task name={name} id={id} key={id} clearTask={clearTask}/>
        ))}
      </div>
    </div>
  );
};

export default CreatedProject;
