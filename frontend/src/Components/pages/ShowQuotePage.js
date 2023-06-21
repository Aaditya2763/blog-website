import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './showQuotePage.module.css'
import axios from 'axios';
import {FaBlog } from "react-icons/fa"



const ShowQuotePage = (props) => {
 
  //console.log(props);
 const Navigate=useNavigate();
    const  params=useParams();
 // console.log(params.id);

const [quote,setQuote]=useState([]);

async function fetchQuote(){
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    try{
        const res=await axios.get(`https://cnblog-backend-production.up.railway.app/quotes/${params.id}`);
        setQuote(res.data);
        console.log(res.data)
        console.log("Quote fetched successfully")
    }
    catch(e){
        console.log("Unable to fetch Quote")
    }
    
}

  useEffect(()=>{
  fetchQuote()

  },[]);

//Edit form Submit Handler

const  EditFormHandler=async()=>{
  try{

    Navigate(`/quotes/${params.id}/edit`);
    
}
catch(e){
    console.log("Unable to show update form")
}

 }



const deleteFormHandler= async()=>{
  // const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
try{

  window.alert("Are you sure you wanted to delete this post?");
 

    await axios.delete(`https://cnblog-backend-production.up.railway.app/quotes/${params.id}`);
    console.log("quote deleted successfully");
    Navigate('/quotes');

}
 catch(e){
  
          console.log("unable to delete quote")
 }
}


  return (
  <>
        <div><h1 className={classes.h1}><FaBlog style={{color:"blue" }}/> Blogs</h1></div>

    
    <div className={classes.quote}>
    <div>
    <h1>{quote.blogTitle}</h1>
    <img src={quote.imageUrl1} />
    <h5>{quote.blogDescription}</h5>
    </div>
      
       
       <span style={{marginTop:40}}>
        <p><span style={{color:'red'}}>Author</span> {quote.author}</p>
        <div>
        <button onClick={EditFormHandler} >Edit</button>
        <button onClick={deleteFormHandler}>Delete </button>
        </div>
       </span>
       
    </div>
    </>
  )
}

export default ShowQuotePage