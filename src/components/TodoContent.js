import React, { useEffect, useState } from 'react'
import {db} from '../firebase.config'
import '../App.css'
import {useDispatch,useSelector} from 'react-redux'
import { deleteTodo } from '../actions/todoActions'
import firebase from 'firebase'
function TodoContent({time,todo,inProgress,id}) {
  const dispatch=useDispatch()
  const [name,setName]=useState("")
  const store=useSelector(state=>state)
  const toggleProgress=()=>{
    db.collection("todos").doc(id).update({
      inprogress:!inProgress
    })
    console.log(store.addedTodo)
  }
  const deleteTodos=()=>{
    const M=window.M
    dispatch(deleteTodo(id,"todos"))
    M.toast({html:"Successfully deleted a todo"})
  }
  
  return (
    <div className="row">
      <div className="col s12 l12">
      <div className="row cardRow">
    <div className="col s12 l12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text center-align">
          <p style={{fontSize:"20px"}}>{todo}</p>
          <div style={{marginTop:"15px"}}></div>
        </div>
        <div className="col s4 l4 card-action center-align" style={{background:inProgress?"red":"green"}}>
          <a  className="btn transparent z-depth-2">{inProgress?<i className="fas fa-clipboard white-text"/>:<i className="fas fa-clipboard-check white-text"/>}</a><br/>
          <span className="white-text">&nbsp;{inProgress?"Pending":"Completed"}</span>
        </div>
        <div className="col s4 l4 card-action center-align blue darken-2">
          <a  className="btn transparent z-depth-2" onClick={toggleProgress}><i className="fas fa-check white-text"></i></a><br/>
          <span className="white-text">Done</span>
        </div>
        <div className="col s4 l4 card-action center-align yellow darken-3">
          <a  className="btn transparent z-depth-2" onClick={deleteTodos}><i className="fas fa-trash white-text"></i></a><br/>
          <span className="white-text">Delete</span>
        </div>
      </div>
    </div>
  </div>

      </div>
     
    </div>
  )
}

export default TodoContent
