import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './supabaseClient';
import '../cardDisplay.css'


function CardDisplay() {
  const { uniqueId } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const { data, error } = await supabase
        .from('cards1')
        .select('*')
        .eq('unique_id', uniqueId)
        .single();

      if (error) {
        console.error('Error fetching card:', error);
      } else {
        setCard(data);
      }
    };
    fetchCard();
  }, [uniqueId]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-display">
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          {card.image_url && (
            <img src={card.image_url} alt="Birthday Card" className="card-image" />
          )}
          <h1>Dear {card.name}</h1>
        </div>
  
        {/* Back of the card */}
        <div className="card-back">
          <h2>{card.message}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay;
