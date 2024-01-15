"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions, fetchTodos } from '../redux/Slice';
import TaskList from './TaskList';
function TaskForm() {
    const [input,setInput] = useState();
    const dispatch =  useDispatch();
    const task = useSelector(state => state);
    
     useEffect(()=>{
      const getdata = ()=>{
        dispatch(fetchTodos())
      }
      getdata()
     },[task.data])

    const handleInput= async(e)=>{
        e.preventDefault();
        await fetch('http://localhost:3000/tasks',{
          method: "POST",
          body: JSON.stringify({
            task:input
          }),
          headers:{ 'Content-Type':'application/json' }
        })
        setInput("")
        dispatch(fetchTodos())
    }

  return (
    <div className='h-screen  flex flex-col space-y-5 justify-center items-center'>
        <h1 className=' text-3xl font-bold '>Add Your Tasks</h1>
        <form className='space-x-5' action="" onSubmit={handleInput}>
          <input className='p-2 w-64 text-black rounded-md' value={input} type="text" onChange={(e)=>setInput(e.target.value)} /> 
          <input className='bg-green-800 p-2 rounded-md' value='submit' type="submit" />
        </form>
       <TaskList/>
    </div>
  )
}

export default TaskForm
