import "./ThanksCard.css";
import thankYouImg from "./../../assets/images/illustration-thank-you.svg";
import { useMediaQuery } from "react-responsive";

function ThanksCard({rating}) {
  const isTablet = useMediaQuery({query: "(min-width: 768px)"});  

  return (
    <article className="thanks-card">
      <img src={thankYouImg} alt="illustration" />
      <div className={isTablet ? "tp-4-regular" : "tp-5-regular"}>You selected {rating} out of 5</div>
      <h1 className={isTablet ? "tp-1-bold" : "tp-2-bold"}>Thank you!</h1>
      <p className={isTablet ? "tp-4-regular" : "tp-5-regular"}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
}

export default ThanksCard;
