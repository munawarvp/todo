import React from 'react'

function ListTo({task, index, removeTask}) {
  return (
    <div>
        <div className='todo-task'>
          <h2>{task.title}</h2>
          <button className='todo-del' onClick={()=>{removeTask(index)}} >Delete</button>
        </div>
    </div>
  )
}

export default ListTo