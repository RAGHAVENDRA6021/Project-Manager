import React, { useState } from "react";



const ProjectCreater = ({ saveProjectDetails }) => {
  const defaultProjectDetails = {
    id: new Date().toLocaleTimeString(),
    title: "",
    description: "",
    date: '',
    tasks:[]
  };
  const [projectDetails, setProjectDetails] = useState(defaultProjectDetails);

  const handleProjectDetails = (key, value) => {
    setProjectDetails((outdatedProjectDetails) => ({
      ...outdatedProjectDetails,
      [key]: value,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    setProjectDetails((prev) => defaultProjectDetails);
    saveProjectDetails({ ...projectDetails });
  };

  const inputClass= "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  const labelClass= "text-sm font-bold uppercase text-stone-500"
  return (
    <div className="flex flex-col gap-4 p-6">
      <form className="mt-4"onSubmit={onSave}>
        <div className="flex justify-end gap-4">
          <button className="p-2 rounded hover:bg-black hover:text-white">
            {" "}
            cancel
          </button>
          <button
            type="submit"
            className="p-2 rounded bg-black text-white hover:text-red-600"
          >
            save
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Title</label>
          <input
            type="text"
            className={inputClass}
            value={projectDetails["title"]}
            onChange={(e) => handleProjectDetails("title", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Description</label>
          <input
            type="text"
            className={inputClass}
            value={projectDetails["description"]}
            onChange={(e) =>
              handleProjectDetails("description", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Due Date</label>
          <input
            type="date"
            className={inputClass}
            value={projectDetails["date"]}
            onChange={(e) => handleProjectDetails("date", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectCreater;
