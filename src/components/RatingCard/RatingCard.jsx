function RatingCard() {
  return (
    <article>
      <div className="icon">
        <img src="" alt="star icon" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form action="">
        <fieldset>
            <legend>Rating options</legend>
            <label htmlFor="rating-1">1</label>
            <input type="radio" name="rating" id="rating-1" value={1} />
            <label htmlFor="rating-2">2</label>
            <input type="radio" name="rating" id="rating-2" value={2} />
            <label htmlFor="rating-3">3</label>
            <input type="radio" name="rating" id="rating-3" value={3} />
            <label htmlFor="rating-4">4</label>
            <input type="radio" name="rating" id="rating-4" value={4} />
            <label htmlFor="rating-5">5</label>
            <input type="radio" name="rating" id="rating-5" value={5} />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
}

export default RatingCard;
