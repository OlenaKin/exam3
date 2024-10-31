import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const SearchBar = ({ setCharacterName }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a character name.");
      return;
    }
    setError("");
    setCharacterName(inputValue);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setError("");
        }}
        className="input search-form input"
      />
      <button onClick={handleSearch} className="searchButton">
        Search
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

// Define PropTypes to validate props
SearchBar.propTypes = {
  setCharacterName: PropTypes.func.isRequired,
};

export default SearchBar;
