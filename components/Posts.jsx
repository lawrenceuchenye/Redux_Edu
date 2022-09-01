import Post from "./Post"

const Posts=({data})=>{
    return(
        data.map((info)=>(
            <Post data={info}/>
        ))
    );
}


export default Posts;


