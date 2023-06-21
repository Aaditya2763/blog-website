import React, { Fragment, useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import axios from "axios";
import {FaBlog}from "react-icons/fa"
import {ImBlog} from "react-icons/im"
import classes from "./quotecard.module.css";
import { Link } from "react-router-dom";
const AllQuotes = () => {

  const [Quotes, setQuotes] = useState([]);
  // const [loading, setLoading] = useState(true);

  async function getAllquotes() {
    try {
      const res = await axios.get(`${process.env.SERVER_URL}/quotes`);
      setQuotes(res.data)
      console.log(res.data);
      console.log('Data fetched Successfully')
    } catch (e) {
      console.log("Unable to fetch data ");
    }
  }
  //use effect is always used to render api data when component is rendered
  useEffect(() => {
    getAllquotes();
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.heading}>
        <div><h1 className={classes.h1}><FaBlog style={{color:"blue"}}/> Blogs</h1></div>
        <div className={classes.createBlog}><Link to="/new" style={{ textDecoration: 'none', color: 'white' }}>Create new blog  < ImBlog style={{color:"white",fontSize:'20px',paddingLeft:"5px"}}/></Link></div>
      </div>
      <div className={classes.blogSection}>

    
          {Quotes.map((quote) => {
            return (
              <QuoteCard quote={quote} key={quote._id} />
            )
          })}
      
      </div>
      {/* <div className={classes.createBlog}><Link to="/new" style={{ textDecoration: 'none', color: 'white' }}>Create new blog</Link></div> */}
    </section>
  );
};

export default AllQuotes;
