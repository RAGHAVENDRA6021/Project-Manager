import React from 'react'

const ProjectsSidebar = ({handleProjectState,projects}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
    <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
    <div>
      <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-slate-400 hover:bg-stone-600 hover:text-stone-100' onClick={handleProjectState}>+ Add Project </button>
    </div>
    <ul className='mt-8'>
      {
        projects.map((p,index)=><li key={index} className='w-1/2 rounded-sm text-slate-700 font-bold hover:text-slate-50'><button>{p.title}</button></li>)
      }
    </ul>
  </aside>
  )
}

export default ProjectsSidebar