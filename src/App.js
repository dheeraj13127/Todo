import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todo from './components/Todo'
import Login from './components/Login'
function App() {
  return (
    <Router> 
      <Route path="/" exact component={Login}/>
    <Route path="/todo" exact component={Todo}/>
    </Router>
  )
}

export default App
