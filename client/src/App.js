
import './App.css';
import { useDispatch } from 'react-redux';
import  {useEffect} from "react";
import { fetchQuotes } from './redux/quotes/quotesOperations';
import {QuotesList} from './components/QuotesList/QuotesList';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchQuotes());
  },[dispatch])


  return (
    <div className="App">
      <QuotesList></QuotesList>
    </div>
  );
}

export default App;
