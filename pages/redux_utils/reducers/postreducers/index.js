import { FETCH_POST,NEW_POST } from "../../actions/types"

const initialState={
    items:[],
    itme:{}
}

const postReducers=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}

export default postReducers
