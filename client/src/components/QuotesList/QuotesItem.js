import s from './QuotesList.module.css'
export default function QuotesItem ({ticker, price, change_percent, dividend}){

    const getFullNameTicker = ticker => {
        switch (ticker) {
          case 'AAPL':
            return 'Apple';
      
          case 'GOOGL':
            return 'Alphabet';
      
          case 'MSFT':
            return 'Microsoft';
      
          case 'AMZN':
            return 'Amazon';
      
          case 'FB':
            return 'Facebook';
      
          case 'TSLA':
            return 'Tesla';
          default:
            return 'Unknown';
        }
      };
    return(
        <>
        <div className={s.item_name}>{getFullNameTicker(ticker)}</div>
        <div className={s.item_element}>{price}</div>
        <div className={s.item_element}>{change_percent}</div>
        <div className={s.item_element}>{dividend}</div>
        </>
    )
}