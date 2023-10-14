import React, { useState } from 'react';
import './App.css';



export default function App() {
  const [Count, setWordCount] = useState(0);

  function countWords() {
    const textarea = document.getElementById('words');
    const text = textarea.value.trim();
    const words = text.split(/\s+/); 
    setWordCount(words.length);
}


  return (
    <div className='body'>
    <div className="counter">
      <h1>Word Counter</h1>
      <textarea id="words" cols="60" rows="10" ></textarea>
      <button onClick={countWords}>Count Words</button>
      <p>Word Count: {Count}</p>
    </div>
    </div>
  );
}
