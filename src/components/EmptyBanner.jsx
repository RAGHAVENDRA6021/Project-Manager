import React from 'react'
import Logo from '../assets/no-projects.png'

const EmptyBanner = ({openProjectCreater}) => {
  return (
    <div className='w-full flex flex-col gap-3 items-center'>
        <div>
        <img src={Logo} className='h-20 w-20'/>
        </div>
        <div className='text-blue-400   '>No Project Selected</div>
        <div>select a project or get started with a new one</div>

        <button className='p-4 bg-slate-400 rounded text-xl font-serif hover:text-yellow-500' onClick={openProjectCreater}>Add Project</button>

    </div>
  )
}

export default EmptyBanner