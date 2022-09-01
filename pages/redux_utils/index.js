import { createStore } from "redux"

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


let store=createStore(reducer);
console.log(store);
store.subscribe(()=>console.log(store.getState()));

store.dispatch(increment());

export default store;
