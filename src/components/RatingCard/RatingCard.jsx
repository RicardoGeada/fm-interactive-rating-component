import "./RatingCard.css";
import starIcon from "./../../assets/images/icon-star.svg";
import {useMediaQuery} from "react-responsive";

function RatingCard({rating, setRating, handleSubmit}) {
  const isTablet = useMediaQuery({query: "(min-width: 768px)"});

  return (
    <article className="rating-card">
      <div className="icon">
        <img src={starIcon} alt="star icon" />
      </div>
      <h1 className={isTablet ? "tp-1-bold" : "tp-2-bold"}>How did we do?</h1>
      <p className={isTablet ? "tp-4-regular" : "tp-5-regular"}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset className="rating-options">
            <legend className="sr-only">Rating options</legend>
            <label className="rating-option tp-3-bold">
              <span>1</span>
              <input type="radio" name="rating" value={1} onChange={(e) => setRating(Number(e.target.value))} checked={rating === 1}/>
            </label>
            <label className="rating-option tp-3-bold">
              <span>2</span>
              <input type="radio" name="rating" value={2} onChange={(e) => setRating(Number(e.target.value))} checked={rating === 2}/>
            </label>
            <label className="rating-option tp-3-bold">
              <span>3</span>
              <input type="radio" name="rating" value={3} onChange={(e) => setRating(Number(e.target.value))} checked={rating === 3}/>
            </label>
            <label className="rating-option tp-3-bold">
              <span>4</span>
              <input type="radio" name="rating" value={4} onChange={(e) => setRating(Number(e.target.value))} checked={rating === 4}/>
            </label>
            <label className="rating-option tp-3-bold">
              <span>5</span>
              <input type="radio" name="rating" value={5} onChange={(e) => setRating(Number(e.target.value))} checked={rating === 5}/>
            </label>
        </fieldset>
        <button className={"submit-btn " + (isTablet ? "tp-5-semibold" : "tp-5-bold")} type="submit">SUBMIT</button>
      </form>
    </article>
  );
}

export default RatingCard;
