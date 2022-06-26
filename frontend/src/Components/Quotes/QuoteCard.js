import React from 'react'
import classes from './quotecard.module.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const QuoteCard = (props) => {

 
  const Navigate=useNavigate()
  
const showViewHandler=async(_id)=>{
//  console.log(_id);
 const res=await axios.get(`http://localhost:8080/quotes/${_id}`);
  console.log(res.data);


Navigate(`/quotes/${_id}`)

}



//bind will ensure that the id passes will pass in  show View HAandler
  return (
  
        <li className={classes.quote}>
           <span>
           <p>{props.quote.quote}</p>
            <p>{props.quote.author}</p>
           </span>
          
            <button onClick={showViewHandler.bind(null,props.quote._id)}>View Fullscreen</button>
        </li>
  
  )
  }

export default QuoteCard