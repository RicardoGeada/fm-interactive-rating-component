import { useState } from "react";
import "./App.css";
import RatingCard from "./components/RatingCard/RatingCard";
import ThanksCard from "./components/ThanksCard/ThanksCard";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");
    if(!rating) return;

    setIsSubmitted(true);
  }

  return (
    <>
      <main className="main">
        {isSubmitted ? <ThanksCard rating={rating} /> : <RatingCard rating={rating} setRating={setRating} handleSubmit={handleSubmit} />}
      </main>
    </>
  );
}

export default App;
