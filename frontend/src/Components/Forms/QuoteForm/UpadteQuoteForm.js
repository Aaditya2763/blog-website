import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './updateQuoteform.module.css';

const UpadteQuoteForm = (props) => {


const Navigate=useNavigate()

    const [author,SetAuthor]=useState("")
    const [quote,SetQuote]=useState("")

const params=useParams();
console.log(params.id);

const fetchdata=async()=>{
   try{
    const res=await axios.get(`http://localhost:8080/quotes/${params.id}/`);
    SetAuthor(res.data.author);
    SetQuote(res.data.quote);
    
    console.log('data fetched successfully');
   }
   catch{
       console.log("can not fetch data")
   }
}


useEffect(()=>{
fetchdata();
},[])



const authorInputRef=useRef();
const quoteInputRef=useRef();

  
  const autherInputHandler=(e)=>{
   SetAuthor(e.target.value);
  }


  const quoteInputHandler=(e)=>{
SetQuote(e.target.value);
  }








 const FormSubmitHandler=async(e)=>{
     e.preventDefault();
    try{
        //  console.log(Author);
        if(author.length<3 || quote.length<3){
            window.alert("please enter valid details");
            return
        }
    
    const res=await axios.patch(`http://localhost:8080/quotes/${params.id}`,{author,quote});
   
    console.log(res.data);
    console.log("Updated data successfully");
    
    Navigate('/quotes')

    }
    catch(e){
console.log('Unable to update data')
console.log(e);
    }
 }




  return (
    <form className={classes.form} onSubmit={FormSubmitHandler}>
      <h2>Update Quote</h2>
     <div>
     <label htmlFor='author'>Author Name</label>
     <br />
      <input  type="text" id="author" placeholder='author' value={author} onChange={autherInputHandler} ref={authorInputRef} required/>

     </div>
      <div>
      <label htmlFor='quote'>Enter your quote</label>
      < br />
      <textarea placeholder='enter your quote.....' cols={20} rows={5} ref={quoteInputRef}  value={quote} onChange={quoteInputHandler}  required></textarea>

      </div>
      <button type='submit' >Update</button>
    </form>
  )
}

export default UpadteQuoteForm