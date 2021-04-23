import {db} from '../firebase.config'
import firebase from 'firebase'
export const addTodo=(query,q)=>async(dispatch,getState)=>{
  db.collection(q).add({
    inprogress:true,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo:query
  })
  dispatch({
    type:"ADD_TODO",
    payload:"Successfully added a todo",
  })
}
export const deleteTodo=(query,q)=>async(dispatch,getState)=>{
  db.collection(q).doc(query).delete()
  dispatch({
    type:"DELETE_TODO",
    payload:"Successfully deleted a todo",
  })
}