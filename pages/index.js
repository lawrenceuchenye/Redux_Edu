import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Posts from "../components/Posts"

export default function Home({data}) {
    return(
        <div>
          <div className="header">
               <h1>Posts</h1>
            </div>
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

