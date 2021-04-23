import React,{useState,useEffect} from 'react'
import '../App.css'
import Navbar from './Navbar'
import TodoContent from './TodoContent'
import TodoForm from './TodoForm'
import {useDispatch,useSelector} from 'react-redux'
import { db } from '../firebase.config'
import firebase from 'firebase'
function Todo() {
  const store=useSelector(state=>state)
  const [todos,setTodos]=useState([])
  const [name,setName]=useState("")
  useEffect(()=>{
    getTodos()
   
    },[])
    const getTodos=()=>{
      db.collection("todos").orderBy("timestamp","desc").onSnapshot((querySnapshot)=>{
       setTodos(
        querySnapshot.docs.map((doc)=>({
          id:doc.id,
          todo:doc.data().todo,
          inprogress:doc.data().inprogress,
         
        }))
       )
      })
     }
  return (
    <div className="container-fluid">
    <Navbar/>
    <TodoForm/>
    {todos.map(todo=>{
      return  <TodoContent key={todo.id} todo={todo.todo} inProgress={todo.inprogress} id={todo.id} time={todo.timestamp}/>
    })}

    </div>
  
  )
}

export default Todo
