import React, { useState } from "react";
// Import uuid and axios are moved to the useAxios.js custom hook
// import uuid from "uuid";
// import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  // call useAxios.js custom hook
  const [cards, getData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* getData retrieves information for name and url. There is no name attribute in the playing card deck so this is set to undefined. We only want the url */}
        <button onClick={() => getData()}>Add a playing card!</button>
        {/* <button onClick={addCard}>Add a playing card!</button> */}
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
