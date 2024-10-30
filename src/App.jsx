import React, { useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Header from "./components/Header/Header"; // Import the Header component
import { ThemeProvider } from "styled-components"; // Import ThemeProvider from styled-components
import { lightTheme } from "./components/Theme/lightTheme"; // Import the light theme
import { darkTheme } from "./components/Theme/darkTheme"; // Import the dark theme
import "./App.css"; // Import your CSS file
import CharacterModal from "./components/CharacterModal/CharacterModal";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State to track the theme

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); // Toggle the theme state
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div
        style={{
          background: isDarkTheme
            ? darkTheme.background
            : lightTheme.background,
          color: isDarkTheme ? darkTheme.color : lightTheme.color,
        }} // Apply theme styles directly to the div
        className="appContainer"
      >
        <Header toggleTheme={toggleTheme} /> {/* Pass toggleTheme to Header */}
        <CharacterList /> {/* Render the CharacterList component */}
      </div>
    </ThemeProvider>
  );
};

export default App; // Export the App component
