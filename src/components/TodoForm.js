import React, { useState } from 'react'
import '../App.css'
import {addTodo} from '../actions/todoActions'
import {useDispatch,useSelector} from 'react-redux'
function TodoForm() {
  const store=useSelector(state=>state)
  const dispatch=useDispatch()
  const [todoInput,setTodoInput]=useState("")
  const onTodoChange=(e)=>{
    setTodoInput(e.target.value)
  }
  const onTodoSubmit=(e)=>{
    const M=window.M
    e.preventDefault()
    if(todoInput==""){
      M.toast({html: 'Please enter a Todo!'})
    }
    else{
      dispatch(addTodo(todoInput,"todos"))
      setTodoInput("")
        M.toast({html:"Successfully added a todo"})
    }
  
  }
  return (
    <div className="row todoFormRow">
      <div className="col s12" style={{padding:"30px 10px"}}>
        <form onSubmit={onTodoSubmit} className="col s12">
        <div className="row center-align">
        <div className="input-field col s12 l4 offset-l4" style={{borderRadius:"15px"}}>
          <input placeholder="Write a Todo ...." id="first_name" type="text" className="validate center-align white-text" style={{fontWeight:"bolder"}} onChange={onTodoChange} value={todoInput}/>
        </div>
      </div>
      <div className="center-align">
          <button className=" btn orange darken-4 waves-effect" style={{fontWeight:"bolder"}}>Add Todo</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm
