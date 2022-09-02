///Action increment
/*
  it just descibes what the function want's to dk

 */

const increment=()=>{
    return{
        type:"INCREMENT"
    }
}

const decrement=()=>{
     return{
         type:"DECREMENT"
     }
}


//REDUCERS
/*
  It basically just computes what the new state should
  be
 */

const reducer=(state=0,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
    }
}

export default reducer;

