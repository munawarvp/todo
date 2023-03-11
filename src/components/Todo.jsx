import React, { useState, useEffect } from 'react'
import ListTo from './ListTo'
import Textfield from './Textfield'
import './todo.css'
import emptyImage from '../images/43029.jpg';

const getLocalTasks = ()=>{
  let todos = localStorage.getItem('tasks')

  if(todos){
    return JSON.parse(localStorage.getItem('tasks'));
  }else {
    return [];
  }
}

function Todo() {
  const [date, setDate] = useState(new Date())
  const [tasks, setTask] = useState(getLocalTasks())

  const addTask = (title)=> {
    const newTask = [...tasks, {title}]
    setTask(newTask)
  }

  const removeTask = (index)=>{
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTask(newTask)
  }

  // store items in local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  
  }, [tasks])
  

  return (
    <div>
        <div className='todo-head'>
            <h1>el TO da DO</h1>
            <h4 className='todo-date'>{date.toLocaleString()}</h4>
            
        </div>
        <div className="todo-add">
            <Textfield addTask = {addTask} />
        </div>
        {
          tasks.length === 0?
          <div className='empty-todo' >
            <img className='emptyImg' src={emptyImage} alt="" />
            <h1 className='notodo'>No ToDo To Show...!</h1>
          </div>: <div className="list-todo">
          {tasks.map((task, index)=>(
            <ListTo task={task} removeTask={removeTask} index={index} key={index}/>
          ))}
        </div>

        }
          
    </div>
  )
}

export default Todo