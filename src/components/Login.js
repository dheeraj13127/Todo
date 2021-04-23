import React, { useEffect, useState } from 'react'
import todo from '../images/todo.jpg'
import google from '../images/goog.png'
import firebase from 'firebase'
import {useHistory} from 'react-router-dom'
function Login() {
  const history=useHistory()
 
  const onHandleClick=()=>{
    var provider=new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result=>{
      var token=result.credential.accessToken
      var user=result.user
      history.push('/todo')
    })
    .catch(err=>console.log(err))

  }
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
       if(user){
         console.log("Sign In");
         console.log(user)
       }
       else{
         console.log("signOut")
       }
    })
  },[])
  const onLogout=async()=>{
  await firebase.auth().signOut()
  }
  return (
    <div className="container-fluid loginContainer">
      <div className="row" style={{padding:"15px"}}>
        <div className="col s12 l12 " style={{marginTop:"60px"}}>
          <div className="row loginColumn" style={{marginTop:"40px"}}>
            <div className="col s12 l5" style={{padding:"15px"}}>
            <img src={todo} alt="" className="responsive-img z-depth-3"/>
            </div>
            <div className="col s12 l7 center-align" style={{padding:"0 5px",marginTop:"25px"}} >
              <h3 className="black-text yellow lighten-2" style={{padding:"15px",borderRadius:"15px",fontWeight:"bolder"}}>Welcome To MyTodo</h3>
              <div className="yellow lighten-2" style={{padding:"125px 0",borderRadius:"15px"}}>
              <a onClick={onHandleClick} className="btn btn-large waves-effect black white-text " style={{padding:"10px"}}><img src={google} alt="" style={{width:"205px"}}/></a>
              </div>
    
              <div style={{marginTop:"80px"}}></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login
