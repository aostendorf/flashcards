import React from 'react';
  
  const Cards = ({cards}) => {
    return (
    <div>
      <ul>
         { cards.map( card => <li key={card.id}>{card.question}</li>) } 
      </ul>
        </div> )
   }


export default Cards;