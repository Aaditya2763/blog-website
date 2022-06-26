import React, { Fragment } from 'react'
//used in routing provided by browser router 
import { Routes,Route} from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import AllQuotes from './Components/Quotes/AllQuotes'
import NewQuoteForm from './Components/Forms/QuoteForm/NewQuoteForm'
import ShowQuotePage from './Components/pages/ShowQuotePage'
import UpadteQuoteForm from './Components/Forms/QuoteForm/UpadteQuoteForm'
const App = () => {
  return (
  <Fragment>
  <header>
  <Navbar />
  </header>
  <main>
    <Routes>
  
      <Route path='/quotes'  element={<AllQuotes />} />;
      <Route path='/new'  element={<NewQuoteForm />} />;
      <Route path='/quotes/:id' element={<ShowQuotePage />} />;
      <Route path='/quotes/:id/edit' element={<UpadteQuoteForm/>} />;
    </Routes>
  </main>
  </Fragment>
  )
}

export default App