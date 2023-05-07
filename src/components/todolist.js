import React, { useState } from 'react'
import './todo.css'

const Todolist = () => {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);

  function addTask (){
    setTodo((todo)=>{
      const updatedtodo = [...todo, list]
      console.log(updatedtodo)
      setList('')
      return updatedtodo
    })
  }

function cleartask(index){
  const todoupdatedlist = todo.filter((elem, id)=>{
    return index!==id
  })
  setTodo(todoupdatedlist)
}
  function clearAll(){
    setTodo([]);
  }
  
  return (
    <> 
    <div className='body-todo'>
     <div className="container">
        <div className="form">
            <input type="text" className="input" value={list} onChange={(e)=> setList(e.target.value)}/>
            <input type="submit" className="add" value="Add Task" onClick={addTask} />
            
        </div>
        {/* here is todo task */}
        {todo!==[] && todo.map((data, index)=>{
          return <div className="tasks" key={index}>  {data} <button className='deletebtn' onClick={()=> cleartask(index)}>delete</button> </div> 
        })}
        
        <div className="delete-all" onClick={clearAll}>Delete all</div>
        </div>
        </div>
     </>
      )
}

      export default Todolist