import img from '../assets/no-projects.png'
import Button from '../shared/Button'
const DisplayPage = ({handleProjectState}) => {
  return (
    <div className=' w-screen h-screen flex flex-col gap-6 items-center'>
      <div><img src={img} alt="No Project Image"  className='h-[12rem] w-[12rem] object-contain'/></div>  
        <h2 className='text-slate-700 font-extrabold text-2xl'>No Project Selected</h2>
        <div><Button onClick={handleProjectState}>Create Project</Button></div>
    </div>
  )
}

export default DisplayPage