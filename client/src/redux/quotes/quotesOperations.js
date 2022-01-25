import {requestQuotes, getQuotes, failQuotes} from './quotesActions'
  import {socket} from '../../services/socket';
  
  const fetchQuotes = () => dispatch => {
    dispatch(requestQuotes());
    socket.emit('start');
    return socket.on('ticker', data =>
      data
        ? dispatch(getQuotes(data))
        : dispatch(failQuotes(new Error('fail'))),
    );
  };
  
  export  { fetchQuotes };