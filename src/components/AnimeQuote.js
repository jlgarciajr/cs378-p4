import React from 'react';
import './AnimeQuote.css';

const AnimeQuote = ({quote, index}) => {
    return (
        <div>
            <h4>{index + 1}. "{quote}"</h4>
        </div>
    );
};

export default AnimeQuote;