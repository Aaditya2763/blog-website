import React, { useRef } from 'react'
import classes from './newQuoteForm.module.css'
import axios from 'axios';
import  {useNavigate} from "react-router-dom"

const NewQuoteForm = () => {

const authorInputRef=useRef();
const blogTitleInputRef=useRef();
const imageInputRef1=useRef();
const imageInputRef2=useRef();
const blogInputDescRef=useRef(); 
//it acts as redirect
 const Navigate=useNavigate()

const onSubmitHandler=async(e)=>{
  e.preventDefault();
const author=authorInputRef.current.value;
const blogDescription=blogInputDescRef.current.value;
const imageUrl1=imageInputRef1.current.value;
const imageUrl2=imageInputRef2.current.value;
const blogTitle=blogTitleInputRef.current.value;

 try{
  if(author.length<3 || blogDescription.length<20||blogTitle.langth<5 ||imageUrl1.langth<3||imageUrl2.langth<3){
    window.alert("please enter valid details");
    return;
}
  const res= await axios.post('http://localhost:8080/quotes/new',{author,blogDescription,blogTitle,imageUrl1,imageUrl2});
console.log(res.data);
Navigate('/quotes');
 }
 catch(e){
   console.log('can not create quote at this moment')
 }

}



  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <h2 style={{textAlign:"center",textDecoration:"underline"}}>Create New Blog</h2><br></br>
      <h3 style={{color:'red',fontSize:15,textAlign:'center'}}> Field with * are mandatory to fill</h3>
     <div>
     <label htmlFor='author'>Author Name <span style={{color:'red',}}>*</span></label>
     <br />
      <input  type="text" id="author" placeholder='Enter author name'  ref={authorInputRef} required/>

     </div>
     <div>
     <label htmlFor='blogTitle'>Blog Title <span style={{color:'red',fontSize:20}}>*</span></label>
     <br />
      <input  type="text" id="blogTitle" placeholder='Enter blog title'  ref={blogTitleInputRef} required/>

     </div>
     <div>
     <label htmlFor='imageUrl'>Blog Image <span style={{color:'red',fontSize:20}}>*</span></label>
     <br />
     <input  type="text" id="imageUrl" placeholder='Enter imageUrl'  ref={imageInputRef1} required/>
     or 
     <input  type="file" id="imageUrl" placeholder='Enter imageUrl'  ref={imageInputRef2} />
     


     </div>
      <div>
      <label htmlFor='quote'>Blog Description <span style={{color:'red',fontSize:20}}>*</span></label>
      < br />
      <textarea placeholder='enter blog description.....' cols={20} rows={10} ref={blogInputDescRef} required></textarea>

      </div>
      <button type='submit'  >Submit</button>
    </form>
  )
}

export default NewQuoteForm