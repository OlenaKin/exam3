// import PropTypes from "prop-types";

// const ThemeToggle = ({ toggleTheme }) => {
//   return <button onClick={toggleTheme}>Toggle Theme</button>;
// };

// ThemeToggle.propTypes = {
//   toggleTheme: PropTypes.func.isRequired, // Validate that toggleTheme is a required function
// };

// export default ThemeToggle;

// import React from "react";
// import PropTypes from "prop-types";

// const ThemeToggle = ({ toggleTheme }) => {
//   return <button onClick={toggleTheme} className="themeButton"></button>; // Button to trigger theme change
// //   return <button onClick={toggleTheme}>{theme.buttonText}</button>;
// };

// ThemeToggle.propTypes = {
//   toggleTheme: PropTypes.func.isRequired, // Validate that toggleTheme is a required function
// };

// export default ThemeToggle; // Export the ThemeToggle component

import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components"; // Import hook to access theme properties

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme(); // Get current theme
  return (
    <button onClick={toggleTheme} className="themeButton">
      {theme.buttonText}
    </button>
  ); // Use theme.buttonText
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
