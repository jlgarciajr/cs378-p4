  import React, { useState, useEffect, useRef } from 'react';
  import './App.css';
  import AnimeCard from './components/AnimeCard.js';

    function App() {

      const [quote, setQuote] = useState('');

      useEffect(() => {
          fetch('https://animechan.xyz/api/random')
              .then(response => response.json())
              .then(data => {
                  console.log(data);
                  setQuote(data);
          })
          .catch(error => console.log('error', error));
      }, []);

      const [action, setAction] = useState(0);

      const updateAction = (inputAction) => {
        setAction(inputAction);
      };
      
      const inputRef = useRef(null);
      const [inText, setText] = useState('');
      const [responseQuote, setResponseQuote] = useState('');
      const enterText = () => {
        let inputValue = inputRef.current.value;
        inputValue = inputValue.replace(/ /g, '_');

        setText(inputValue);
        fetch('https://animechan.xyz/api/random/character?name=' + inputValue)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setResponseQuote(data);
          })
          .catch(error => console.log('error', error));

      };

      return (
      <div className="container">
        <div className="banner">
          <h1>Anime Fun</h1>
          <h4>Characters, Quotes and More!</h4>
        </div>

        <div>
          <h2>Random Quote:</h2>
          <p2>{quote.quote}</p2>
        </div>
        
        <div className="row-2">
          <button onClick={() => updateAction(1)}>Quote</button>
          <button onClick={() => updateAction(2)}>Character</button>
          <button onClick={() => updateAction(3)}>Anime</button>
        </div>

        <AnimeCard request={action}/>
        
        <div className='row'>
          <h2>Who's your favorite Character?</h2>
        </div>

        <div className="row">
          <div className='col-12'>
            <input
            ref={inputRef}
            type='text'
            />
          </div>
        </div>
        <div>
          <button onClick={enterText}>Submit</button>
        </div>

        <div>
          <p>{responseQuote.quote}</p>
        </div>

      </div>
      );
    }

    export default App;
