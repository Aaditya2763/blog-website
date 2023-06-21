import React, { Fragment } from 'react'
import classes from './quotecard.module.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const QuoteCard = (props) => {
const src=props.quote.imageUrl1;
 
  const Navigate=useNavigate()
  
const showViewHandler=async(_id)=>{
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
//  console.log(_id);
 const res=await axios.get(`${API_ENDPOINT}quotes/${_id}`);
  console.log(res.data);


Navigate(`/quotes/${_id}`)

}



//bind will ensure that the id passes will pass in  show View HAandler
  return (
  
    <section className={classes.blogBox}>
      <div className={classes.imgBox}>
        
        <img src={src} style={{width:150,height:200,borderRadius:10}}/>
      </div>
       <div className={classes.quote}>
     <span className={classes.blogTitle} style={{marginTop:10,paddingLeft:5}}>
         {props.quote.blogTitle}
           </span>
           <span style={{color:'red'}}>
            <span style={{color:'Silver',marginTop:30}}>Author:</span> {props.quote.author}
            <button onClick={showViewHandler.bind(null,props.quote._id)} style={{width:"100px",marginTop:30}}>Read</button>
            </span> 
        </div>
        </section>
  
  )
  }

export default QuoteCard