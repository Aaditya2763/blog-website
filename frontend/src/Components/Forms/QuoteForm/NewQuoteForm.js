import React, { useRef } from 'react'
import classes from './newQuoteForm.module.css'
import axios from 'axios';
import  {useNavigate} from "react-router-dom"

const NewQuoteForm = () => {

const authorInputRef=useRef();
const quoteInputRef=useRef(); 
//it acts as redirect
 const Navigate=useNavigate()

const onSubmitHandler=async(e)=>{
  e.preventDefault();
const author=authorInputRef.current.value;
const quote=quoteInputRef.current.value;

 try{
  if(author.length<3 || quote.length<3){
    window.alert("please enter valid details");
    return
}
  const res= await axios.post('http://localhost:8080/quotes/new',{author,quote});
console.log(res.data);
Navigate('/quotes');
 }
 catch(e){
   console.log('can not create quote at this moment')
 }

}



  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <h2>Add New Quote</h2>
     <div>
     <label htmlFor='author'>Author Name</label>
     <br />
      <input  type="text" id="author" placeholder='author'  ref={authorInputRef} required/>

     </div>
      <div>
      <label htmlFor='quote'>Enter your quote</label>
      < br />
      <textarea placeholder='enter your quote.....' cols={20} rows={5} ref={quoteInputRef} required></textarea>

      </div>
      <button type='submit' >Submit</button>
    </form>
  )
}

export default NewQuoteForm