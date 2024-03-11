import React, { useState, useEffect } from 'react';
import './AnimeCard.css';
import AnimeQuote from './AnimeQuote';

function AnimeCard(props) {
    const option = [
        "Ten Random Quotes",
        "Ten Random Quotes by",
        "Ten Random Quotes from"
    ];

    const apiOptions = [
        "https://animechan.xyz/api/quotes",
        "https://animechan.xyz/api/quotes/character?name=",
        "https://animechan.xyz/api/quotes/anime?title="
    ];

    const characters = [
        "Saitama",
        "Goku",
        "Vegeta",
        "Yuji_Itadori",
        "Naruto_Uzumaki",
        "Sasuke_Uchiha",
        "Eren_Jaeger",
        "Levi_Ackerman",
        "Light_Yagami",
        "Ryuk"
    ];

    const animes = [
        "one_piece",
        "naruto",
        "dragon_ball",
        "one_punch_man",
        "bleach",
        "hunter_x_hunter",
        "my_hero_academia",
        "attack_on_titan",
        "sword_art_online",
        "black_clover",
        "Jujutsu_Kaisen",
    ];

    let label = "";

    const [quote, setQuote] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                label = (props.request === 2 ? characters[Math.floor(Math.random() * 10)] : props.request === 3 ? animes[Math.floor(Math.random() * 10)] : "");
                const response = await fetch(apiOptions[props.request - 1] + label);
                const data = await response.json();
                console.log("API Response:", data); // Log the API response
                console.log("Type", typeof data); // Log the type of data (should be an array of objects
                setQuote(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [props.request]);

    return (
        <div>
            <h2>{option[props.request - 1]} {quote.length > 0 && (props.request === 2 ? quote[0].character : props.request === 3 ? quote[0].anime : "")}</h2>
            {quote.map((quote, index) => (
                <AnimeQuote index = {index} quote = {quote.quote} />
            ))}
        </div>
    );
}

export default AnimeCard;
