import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Posts from "../components/Posts"
import PostForm from "../components/PostForm"
import { Provider } from "react-redux"
import { createStore,applyMiddleware } from "redux"

export default function Home({data}){
    const store=createStore(()=>[],{},applyMiddleware());

    return(
     <Provider store={store}>
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

