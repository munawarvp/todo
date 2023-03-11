import React, { useState, useRef } from 'react'

function Textfield({addTask}) {
  const [value, setValue] = useState("")
  const inputRef = useRef()
  const [emptyErro, setErro] = useState(false)

  const addItem = ()=>{
    // console.log(inputRef.current.value);
    if(inputRef.current.value === '') {
      setErro(true)
    }else{
      addTask(value)
      setValue("")
    }
  }
  
  return (
    <>
        <div className='todo-motiv'>
            <p><em>“Each day I will accomplish one thing on my list.”</em></p>
        </div>
        
        <div className='add-todo'>
            <input type="text" className='todo-input' placeholder='Add TODO' value={value} ref={inputRef}
            onChange={(e)=>{setValue(e.target.value)}} onClick={()=>setErro(false)}
            />
            <button onClick={addItem} className='add-button'>ADD</button>
        </div>
        <div className='error-div'>
          {emptyErro? <p className='error-message'><b>Type Something...!</b></p>: null}
        </div>
        
        
    </>
  )
}

export default Textfield