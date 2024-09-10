import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function MyCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from('cards1')
        .select('*')

      if (error) {
        console.error('Error fetching cards:', error);
      } else {
        setCards(data);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="my-cards">
      <h2>My Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            Card for {card.name} - Created on {new Date(card.created_at).toLocaleDateString()}
            <br />
            Shareable link: <a href={`${window.location.origin}/share/${card.unique_id}`} target="_blank" rel="noopener noreferrer">
              {`${window.location.origin}/share/${card.unique_id}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCards;