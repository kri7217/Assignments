
const initialState={
  locations:[]
}

//Always return the Store state immutabily
const reducer=(state=initialState,action)=>{

  //Can use switch since there was a single action type went with if
    if(action.type === "ADDLOCATION"){
        return {
            ...state,
            locations:[action.payload,...state.locations]            
        }
    }
  return state    
}

export default reducer