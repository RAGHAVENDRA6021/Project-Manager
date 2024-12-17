import React, { useState } from "react";

const defaultProjectDetails = {
  id: new Date().toLocaleTimeString(),
  title: "",
  description: "",
  date: '',
  tasks:[]
};

const ProjectCreater = ({ saveProjectDetails }) => {
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
  return (
    <div className="flex flex-col gap-4 p-6">
      <form className="text-xl" onSubmit={onSave}>
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
          <label>Title {JSON.stringify(projectDetails)}</label>
          <input
            type="text"
            className="rounded p-1"
            value={projectDetails["title"]}
            onChange={(e) => handleProjectDetails("title", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <input
            type="text"
            className="rounded p-1"
            value={projectDetails["description"]}
            onChange={(e) =>
              handleProjectDetails("description", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Due Date</label>
          <input
            type="date"
            className="rounded p-1"
            value={projectDetails["date"]}
            onChange={(e) => handleProjectDetails("date", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectCreater;
