import React, { useState } from "react";
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
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcardsData.length);
    setFlipped(false);
    setUserInput("");
    setFeedback("");
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    setFlipped(false);
    setUserInput("");
    setFeedback("");
  };

  const shuffleCards = () => {
    setIndex(Math.floor(Math.random() * flashcardsData.length));
    setFlipped(false);
    setUserInput("");
    setFeedback("");
  };

  const checkAnswer = () => {
    if (userInput.trim().toLowerCase() === flashcardsData[index].answer.toLowerCase()) {
      setFeedback("Correct!");
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) setLongestStreak(streak + 1);
    } else {
      setFeedback(`Incorrect! The correct answer is: ${flashcardsData[index].answer}`);
      setStreak(0);
    }
    setFlipped(true);
  };

  return (
    <div className="app">
      <h1> TECH KNOWLEDGE FLASHCARDS </h1>
      <p>How well do you know your tech concepts?</p>
      <p>Number of Cards: {flashcardsData.length}</p>
      <p>Current Streak: {streak} | Longest Streak: {longestStreak}</p>
      <div className="frame-container">
      <div className="frame">
        <div className={`flashcard ${flipped ? "flipped" : ""}`}>
          {flipped ? flashcardsData[index].answer : flashcardsData[index].question}
        </div>
      </div>
      </div>
      <input
        type="text"
        placeholder="Enter your answer..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="answer-input"
      />
      <button onClick={checkAnswer} className="submit-btn">Submit Answer</button>
      <p className="feedback">{feedback}</p>
      <div className="buttons">
        <button onClick={prevCard} className="nav-btn">← Previous</button>
        <button onClick={nextCard} className="nav-btn">Next →</button>
        <button onClick={shuffleCards} className="shuffle-btn"> Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;

