import { useState } from "react"

const PostForm=()=>{
    const [ntitle,setTitle]=useState("");
    const [nbody,setBody]=useState("");
     

    const submit=async (e)=>{
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               title:ntitle,
                body:nbody
            })
        }).then(res=>res.json()).then(json=>console.log(json));
    }

    return(
        <div className="post_form">
            <form onSubmit={(e)=>submit(e)}>
              <div>
                 <b>Title</b>
                 <input type="text" placeholder="note title." onChange={(e)=>setTitle(e.target.value)}/>
               </div>
                <p>{ntitle}</p>
               <div>
                  <b>Body</b>
                  <textarea placeholder="note body."  rows="8" onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
                 <p>{nbody}</p>
                <button>POST</button>
              </form>
           </div>
    );
}

export default PostForm;
