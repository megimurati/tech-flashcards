import React, { useState } from "react";
import FlashcardList from "./FlashCardList";
import "./styles.css";

const flashcardsData = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building UI." },
  { id: 2, question: "What is a closure in JavaScript?", answer: "A function that retains access to its outer scope." },
  { id: 3, question: "What is the time complexity of quicksort?", answer: "O(n log n) on average." },
  { id: 4, question: "What is TailwindCSS?", answer: "A utility-first CSS framework." },
  { id: 5, question: "What is the difference between let, const, and var?", answer: "let & const are block-scoped, var is function-scoped." }
];

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcardsData.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
  };

  return (
    <div className="app">
      <h1> TECH KNOWLEDGE FLASHCARDS </h1>
      <p>How well do you know your tech concepts?</p>
      <p>Number of Cards: {flashcardsData.length}</p>
      <FlashcardList flashcard={flashcardsData[index]} />
      <div className="buttons">
        <button onClick={prevCard}>← Previous</button>
        <button onClick={nextCard}>Next →</button>
      </div>
    </div>
  );
}

export default App;

