import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from "react"
import Posts from "../components/Posts"
import PostForm from "../components/PostForm"
import { Provider } from "react-redux"
import  reducer  from "./redux_utils"
import { createStore } from "redux"

const Home=({data})=>{
    return(
      <Provider store={createStore(reducer)}>
        <div>
          <div className="header">
               <h1>Posts</h1>
            </div>
             <PostForm />
             <hr />
             <Posts data={data}/>
          </div>
        </Provider>
    );
}

export const getServerSideProps=async ()=>{
   const res_data=await fetch("https://jsonplaceholder.typicode.com/posts");
   const json_data=await res_data.json();
      return{
          props:{
              data:json_data
          }
      }
  }


export default Home;
