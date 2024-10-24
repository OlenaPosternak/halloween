import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { ReactComponent as Pumpkin } from "../../images/pumpkin.svg";
import { ReactComponent as Frank } from "../../images/frankenstein.svg";
import { ReactComponent as Hat } from "../../images/hat.svg";
import "./header.css";
export const Header = ({ onChange }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    onChange();
    toggleTheme();
  };

  return (
    <div className="header-container">
      <div className="title-wrapper">
        <h1 className="header-title">Play with a cat</h1>
        <Hat className="cat-hat" />
      </div>
      <div className="toggle-wrapper" onClick={handleClick}></div>
      <div className={`toggle-container ${theme}`}>
        <label htmlFor="themeToggle">
          <input
            type="checkbox"
            id="themeToggle"
            onChange={toggleTheme}
            aria-label="Toggle theme mode"
          />
          <div className="toggle-inner">
            {theme === "dark-theme" ? (
              <Frank className="frnakenstein" />
            ) : (
              <Pumpkin className="pumpkin" />
            )}
          </div>
          <p
            className={`toogle-text ${
              theme === "dark-theme" ? "dark-theme" : "light-theme"
            }`}
          >
            {theme === "dark-theme" ? "STOP" : "PLAY"}
          </p>
        </label>
      </div>
    </div>
  );
};
