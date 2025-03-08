import React, { useState } from "react";

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  if (!flashcard) return <p>No flashcard found.</p>;

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-content">
        {flipped ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
}

export default Flashcard;




