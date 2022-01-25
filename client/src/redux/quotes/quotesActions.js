import { createAction } from "@reduxjs/toolkit";

const requestQuotes = createAction('quotes/request')
const getQuotes = createAction('quotes/success')
const failQuotes = createAction('quotes/error')

export {requestQuotes, getQuotes, failQuotes}