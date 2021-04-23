const initState={
  addedTodo:"",
  removedTodo:""
}
export const todoreducer=(state=initState,action)=>{
  switch(action.type){
    case "ADD_TODO":{
      return{
        ...state,
       addedTodo:action.payload
      }
    }
    case "DELETE_TODO":{
      return{
        ...state,
        removedTodo:action.payload
      } 
    }
    default:{
      return state
    }
  }
}