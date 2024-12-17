import React from "react";

const AllProjects = ({
  openProjectCreater,
  allProjects,
  openProject,
  selectedProject,
}) => {
  const activeClass = "bg-slate-400";
  return (
    <div className="bg-black text-white rounded-lg  p-4 h-screen">
      <p className="text-yellow-200 my-3 text-xl font-mono">All Projects</p>
      <button
        className="bg-slate-500 text-yellow-400 border-spacing-3 p-4 rounded hover:bg-slate-600 hover:border-transparent"
        onClick={openProjectCreater}
      >
        + add projects
      </button>
      <ol>
        {allProjects.map(({ id, title }) => {
          return (
            <li
              key={id}
              className={[
                "p-1 my-2 text-center uppercase  text-xl rounded cursor-pointer  :hover:bg-slate-700 hover:text-yellow-500",
                selectedProject && selectedProject == id
                  ? activeClass
                  : undefined,
              ].join(" ")}
              onClick={() => openProject(id)}
            >
              {title}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default AllProjects;
