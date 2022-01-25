import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {requestQuotes, getQuotes, failQuotes} from './quotesActions'

export const quotesReducer = createReducer([], {}
)
const quotesItems = createReducer([], {
    [getQuotes]: (_, { payload }) => payload,
  });
  
  const error = createReducer(null, {
    [failQuotes]: (_, { payload }) => payload,
  });
  const isConnected = createReducer(false, {
    [requestQuotes]: () => true,
  
    [failQuotes]: () => false,
  });
  
  export default combineReducers({
    quotes: quotesItems,
    isConnected,
    error,
  });