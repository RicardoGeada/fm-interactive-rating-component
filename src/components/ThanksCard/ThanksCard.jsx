import "./ThanksCard.css";
import thankYouImg from "./../../assets/images/illustration-thank-you.svg";

function ThanksCard({rating}) {
  return (
    <article className="thanks-card">
      <img src={thankYouImg} alt="illustration" />
      <div>You selected {rating} out of 5</div>
      <h1>Thank you</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
}

export default ThanksCard;
