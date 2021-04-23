import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router'
import {withRouter} from 'react-router-dom'
export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      imageURL:""
    }

  }
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{});
      //
      
    });
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({name:user.displayName})
        this.setState({imageURL:user.photoURL})
      }
      
   })
  }

  render() {
    return (
      
<div>
        <nav className="orange darken-4">
    <div className="nav-wrapper">
      <a href="" className="brand-logo" style={{paddingLeft:"8px",fontWeight:"bolder"}}>My Todo</a>
      <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down white-text" style={{fontWeight:"bolder"}}>
      <div className="chip black">
          <img src={this.state.imageURL} alt="Contact Person"/>
        <span className="white-text" style={{fontWeight:"bolder"}}>{this.state.name}</span>
       </div>
        <li style={{paddingRight:"10px"}}><a href="">About</a></li>
        <li style={{paddingRight:"10px"}}><a href="">Help</a></li>

      </ul>
    </div>
  </nav>

  <ul className="sidenav orange darken-4" id="mobile-demo" style={{fontWeight:"bolder",color:"white",padding:"15px 0px"}}>
  <div className="chip black" style={{marginTop:"35px",marginLeft:"25px"}}>
    <img src={this.state.imageURL} alt="Contact Person"/>
  <span className="white-text" style={{fontWeight:"bolder"}}>{this.state.name}</span>
  </div>
        <li ><a href=""  className="white-text" >About</a></li>
        <li><a href=""  className="white-text" >Help</a></li>
      
        
  </ul>
      </div>
      
      
    )
  }
}

export default withRouter(Navbar)
