import React from 'react'

const Task = ({name,id,clearTask}) => {
  return (
    <div className='flex justify-between'>
      <div>{name}</div>
      <div>
        <button onClick={()=>clearTask(id)} className="text-stone-700 hover:text-red-500">
          clear
        </button>
      </div>
    </div>
  )
}

export default Task