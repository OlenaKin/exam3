// Header.jsx

// import PropTypes from "prop-types";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
// // import "./style.css"; // Optional: add styling here

// const Header = ({ toggleTheme }) => {
//   return (
//     <header className="header">
//       <h1 className="header-title">Marvel Characters</h1>
//       <ThemeToggle toggleTheme={toggleTheme} />
//     </header>
//   );
// };

// Header.propTypes = {
//   toggleTheme: PropTypes.func.isRequired,
// };

// export default Header;

import React from "react";
import PropTypes from "prop-types";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; // Import your ThemeToggle button
import "./style.css"; // Optional: add styling here

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="header-title">Marvel Characters</h1>
      <ThemeToggle toggleTheme={toggleTheme} />{" "}
      {/* Pass toggleTheme to ThemeToggle */}
    </header>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired, // Validate that toggleTheme is a required function
};

export default Header; // Export the Header component
