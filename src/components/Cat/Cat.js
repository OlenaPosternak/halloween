import Lottie from "lottie-react";
import animationData from "./animation.json";
import "./cat.css";

export const Cat = ({ lottieRef }) => {
  return (
    <section className="cat-section">
      <div className="animationWrapper">
        <Lottie
          animationData={animationData}
          loop={true}
          lottieRef={lottieRef}
        />
      </div>
    </section>
  );
};

export default Cat;
