import React from 'react'
import { useSelector } from 'react-redux';
import SingleTask from './SingleTask';

function TaskList() {
    const task = useSelector(state => state);
    console.log("task",task)
  return (
    <div className='space-y-2'>
        {
            task.data?.map((e,i)=>(
               <SingleTask key={i} task={e.task} id={e.id}/>
            ))
        }
    </div>
  )
}

export default TaskList
