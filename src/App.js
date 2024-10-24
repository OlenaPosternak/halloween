import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./components/Theme";
import { Header } from "./components/Header/Header";
import { ReactComponent as Ghost } from "./images/ghost.svg";
import { Cat } from "./components/Cat/Cat";
import { CustomCursor } from "./components/CustomCursore/CustomCursor";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const lottieRef = useRef();

  const handleAnimationChange = () => {
    if (theme === "light-theme") {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  };

  useEffect(() => {
    if (theme === "light-theme") {
      lottieRef.current.stop();
    }
  }, [theme, lottieRef]);

  return (
    <>
      <CustomCursor />
      <div className={`App ${theme}`}>
        <Header onChange={handleAnimationChange} />
        <div className="ghost-wrapper right">
          <Ghost className="ghost-right" />
        </div>
        <Cat lottieRef={lottieRef} />
        <div className="ghost-wrapper left">
          <Ghost className="ghost-left" />
        </div>
      </div>
    </>
  );
}

export default App;
