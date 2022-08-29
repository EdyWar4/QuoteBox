
import { useState } from 'react'
import quotes from '../quotes.json';

const QuoteBox = () => {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  }

  console.log(quotes);

  const colors = ['#845EC2', '#D65DB1','#FF6F91','#FF9671','#FFC75F', '#F9F871']

  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`


  return (
    <div className="quote-box" >
      <div className="container" style={{color: colors[randomColor]}}>
       <p><i class="fa-solid fa-quote-left"></i>{" "}{quotes[index].quote}</p>
         <h1>{quotes[index].author}</h1>
          <div class="btn">
         <button onClick={changeQuote} style={{background: colors[randomColor]}}><i class="fa-solid fa-chevron-right"></i></ button>
         </div>
      </div>
      
    </div>
  );
};

export default QuoteBox;