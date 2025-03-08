import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcard }) {
  return (
    <div className="flashcard-container">
      {flashcard ? <Flashcard flashcard={flashcard} /> : <p>Loading...</p>}
    </div>
  );
}

export default FlashcardList;




