import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './updateQuoteform.module.css';

const UpadteQuoteForm = (props) => {


const Navigate= useNavigate()

    const [author,SetAuthor]=useState("");
    const [blogDescription,SetblogDescription]=useState("");
    const[imageUrl1,setimageUrl1]=useState("");
    const[imageUrl2,setimageUrl2]=useState("");
    const [blogTitle,setblogTitle]=useState("");

const params=useParams();
console.log(params.id);

const fetchdata=async()=>{
  const API_ENDPOINT= process.env.REACT_APP_API_ENDPOINT;
   try{
    const res=await axios.get(`https://cnblog-backend-production.up.railway.app/quotes/${params.id}/`);
    SetAuthor(res.data.author);
    SetblogDescription(res.data.blogDescription);
setblogTitle(res.data.blogTitle);
setimageUrl1(res.data.imageUrl1);
    
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
const imageInputRef1=useRef();
const imageInputRef2=useRef();
const blogTitleInputRef=useRef();

  
  const autherInputHandler=(e)=>{
   SetAuthor(e.target.value);
  }


  const blogDescriptionInputHandler=(e)=>{
SetblogDescription(e.target.value);
  }
  const blogTitleInputHandler=(e)=>{
    setblogTitle(e.target.value);
  }

const imageUrl1Handler=(e)=>{
  setimageUrl1(e.target.value);
}
const imageUrl2Handler=(e)=>{
  setimageUrl2(e.target.value);
}




 const FormSubmitHandler=async(e)=>{
     e.preventDefault();
     const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    try{
        //  console.log(Author);
        if(author.length<3 || blogDescription.length<20){
            window.alert("please enter valid details");
            return
        }
        
    const res=await axios.patch(`https://cnblog-backend-production.up.railway.app/quotes/${params.id}`,{author,blogDescription,imageUrl1,blogTitle,imageUrl2});
   console.log("hello")
    console.log(res.data);
    console.log("Updated data successfully");
     Navigate('/quotes')
   
      window.alert("Data updated Sucessfully.")
  

    }
    catch(e){
console.log('Unable to update data')
console.log(e);
    }
 }




  return (
    <form className={classes.form} onSubmit={FormSubmitHandler}>
      <h2 style={{textAlign:'center'}}>Update Your Blog</h2>
      <h3 style={{color:'red',fontSize:15,textAlign:'center'}}> Field with * are mandatory to fill</h3>
     <div>
     <label htmlFor='author'>Author Name <span style={{color:'red',fontSize:20}}>*</span></label>
     <br />
      <input  type="text" id="author" placeholder='author' value={author} onChange={autherInputHandler} ref={authorInputRef} required/>

     </div>
     <div>
     <label htmlFor='blogTitle'>Blog Title <span style={{color:'red',fontSize:20}}>*</span></label>
     <br />
      <input  type="text" id="blogTitle" placeholder='Enter blog title'  value={blogTitle} onChange={blogTitleInputHandler} ref={blogTitleInputRef} required/>

     </div>
     <div>
     <label htmlFor='imageUrl'>Blog Image <span style={{color:'red',fontSize:20}}>*</span></label>
     <br />
     <input  type="text" id="imageUrl" placeholder='Enter imageUrl' value={imageUrl1} onChange={imageUrl1Handler} ref={imageInputRef1} required/>
     or 
     <input  type="file" id="imageUrl" placeholder='Enter imageUrl' onChange={imageUrl2Handler} ref={imageInputRef2} />
     


     </div>
      <div>
      <label htmlFor='blog'>Blog Description <span style={{color:'red',fontSize:20}}>*</span></label>
      < br />
      <textarea placeholder='Update your blog here.....' cols={40} rows={10} ref={quoteInputRef}  value={blogDescription} onChange={blogDescriptionInputHandler}  required></textarea>

      </div>
      <button type='submit' >Update</button>
    </form>
  )
}

export default UpadteQuoteForm