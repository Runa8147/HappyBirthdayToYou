// src/components/CardCreator.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

function CardCreator() {
  const [template, setTemplate] = useState('template1');
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uniqueId = uuidv4();
      const { data, error } = await supabase
        .from('cards1')
        .insert([{ template, image_url: imageUrl, name, message, unique_id: uniqueId }])
        .select();

      if (error) throw error;

      navigate(`/my-cards`);
      alert(`Card created successfully! Shareable link: ${window.location.origin}/share/${uniqueId}`);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <div className="card-creator">
      <h2>Create a Birthday Card</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Template:
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
        </label>
        <label>
          Image URL:
          <input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </label>
        {imageUrl && <img src={imageUrl} alt="Preview" style={{maxWidth: '200px', marginTop: '10px'}} />}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}

export default CardCreator;