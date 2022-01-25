// import { socket } from "../../services/socket"
// import React, {useEffect, useState} from "react"
import QuotesItem from './QuotesItem'
import { useSelector } from 'react-redux'
import {getQuotes} from '../../redux/quotes/quotesSelectors'
import s from './QuotesList.module.css'

export  function QuotesList() {
    
// const [quotes, setQuotes] = useState([]) 
const quotes = useSelector(getQuotes)
// useEffect(()=>{
//     socket.emit('start');
//     socket.on('ticker',(responce) =>{
//     console.log(responce)
//     setQuotes(responce)
// })
// }, [])

    
return(
    <>
    <ul className={s.list}>
        {quotes.map((item) => 
        <li className = {s.item} key = {item.ticker}>
            <QuotesItem 
            ticker={item.ticker} 
            price={item.price} 
            change_percent = {item.change_percent} 
            dividend = {item.dividend}>
            </QuotesItem>
        </li>)}
    </ul>
    </>
)
}