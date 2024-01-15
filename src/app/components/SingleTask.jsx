import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
function SingleTask({ task, id }) {

    const [edit , setEdit] = useState(true);
    const [updateTask,setUpdateTask] = useState();

    const removeTask = async () => {
        await fetch('http://localhost:3000/tasks/' + id, {
            method: "DELETE",
        })
    }

    const editTask = async()=>{
        setEdit(!edit);
        await fetch('http://localhost:3000/tasks/' + id, {
            method: "PUT",
            body: JSON.stringify({
                id: id,
               task: updateTask
            }),
            headers: {'Content-Type': 'application/json'}
        })
    }
    return (
        <div className='flex justify-between w-[21rem] items-center border-yellow-200 border-2 rounded-md p-1  '>
           {
            edit? <h1 className='font-bold text-xl'>{task}</h1>:<input className='rounded-sm p-[2px] text-black' type='text' onChange={(e)=>setUpdateTask(e.target.value)}/>
           }
            <div className='flex space-x-2 items-center '>
                <div onClick={editTask}>
                   {edit? <EditNoteIcon fontSize='large'/>:<DoneOutlineIcon/>}
                </div>
                <div onClick={removeTask}>
                    <DeleteIcon fontSize='medium' />
                </div>
            </div>
        </div>
    )
}

export default SingleTask
