import React, { Fragment, useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import axios from "axios";
import classes from "./quotecard.module.css";
const AllQuotes = () => {
  
  const [Quotes, setQuotes] = useState([]);

  async function getAllquotes() {
    try {
      const res = await axios.get("http://localhost:8080/quotes");
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
    <Fragment>
      <h1
        className={classes.h1}
        style={{ color: "red", margin: "10px auto", padding: "10px  " }}
      >
        All Quotes
      </h1>
      <ul>
        {Quotes.map((quote) => {
          return(
            <QuoteCard quote={quote} key={quote._id}/>
          )
        })}
      </ul>
    </Fragment>
  );
};

export default AllQuotes;
