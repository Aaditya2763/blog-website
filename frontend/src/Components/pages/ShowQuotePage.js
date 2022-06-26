import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './showQuotePage.module.css'
import axios from 'axios';




const ShowQuotePage = (props) => {
 const Navigate=useNavigate();
    const  params=useParams();
 // console.log(params.id);

const [quote,setQuote]=useState([]);

async function fetchQuote(){
    try{
        const res=await axios.get(`http://localhost:8080/quotes/${params.id}`);
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
try{

  window.alert("Are you sure you wanted to delete this post?");
 

    await axios.delete(`http://localhost:8080/quotes/${params.id}`);
    console.log("quote deleted successfully");
    Navigate('/quotes');

}
 catch(e){
  
          console.log("unable to delete quote")
 }
}


  return (
    <div className={classes.quote}>
    
       <h1>{quote.quote}</h1>
       <span>
        <p>{quote.author}</p>
        <div>
        <button onClick={EditFormHandler} >Edit</button>
        <button onClick={deleteFormHandler}>Delete </button>
        </div>
       </span>
       
    </div>
  )
}

export default ShowQuotePage