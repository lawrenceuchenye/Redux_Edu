import {FETCH_POST,NEW_POST } from "./types"


export const fetchPost=(dispatch)=>{
    const res_data=await fetch("https://jsonplaceholder.typicode.com/posts");
    const json_data=await res_data.json();
    dispatch({
       type:FETCH_POST,
       payload:json_data
     });
}
