const firstScreenInitialState={
  action:''
}
const firstScreen=(state = firstScreenInitialState,action)=>{
  switch(action.type){
    case"DEMO1":
    return{
      ...state,
      data:action.payload,
      action:"DEMO1"
    }
    default:return state
  }
}
export default firstScreen;
