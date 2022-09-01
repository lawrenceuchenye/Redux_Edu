import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Posts from "../components/Posts"
import PostForm from "../components/PostForm"
import { Provider } from "react-redux"
import { store } from "./redux_utils"
//import  { connect } from "react-redux"
//import fetchPost from "../pages/redux_utils/actions/postactions"

/*import { createStore,applyMiddleware } from "redux"*/

const Home=({data})=>{
  //  const store=createStore(()=>[],{},applyMiddleware());

    return(
    
        <div>
          <div className="header">
               <h1>Posts</h1>
            </div>
             <PostForm />
             <hr />
             <Posts data={data}/>
          </div>
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
