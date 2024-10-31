// import { useState, useEffect } from "react";
// import CharacterCard from "../CharacterCard/CharacterCard";
// import CharacterModal from "../CharacterModal/CharacterModal";
// import axios from "axios";
// import SearchBar from "../SearchBar/SearchBar";
// import md5 from "crypto-js/md5";
// import "./style.css";

// const CharacterList = () => {
//   const [characters, setCharacters] = useState([]);
//   const [characterName, setCharacterName] = useState("");
//   const [selectedCharacter, setSelectedCharacter] = useState(null);

//   const publicKey = "c1263ac0fe61a6a8b5531e230b3d772f";
//   const privateKey = "64eb042cddc517484656e6abe5eb9f254ed13c4f";

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       const ts = new Date().getTime();
//       const hash = md5(`${ts}${privateKey}${publicKey}`).toString();

//       try {
//         const response = await axios.get(
//           `https://gateway.marvel.com/v1/public/characters`,
//           {
//             params: {
//               ts,
//               apikey: publicKey,
//               hash,
//               nameStartsWith: characterName,
//             },
//           }
//         );
//         setCharacters(response.data.data.results);
//       } catch (error) {
//         console.error("Error fetching data from Marvel API:", error);
//       }
//     };

//     fetchCharacters();
//   }, [characterName]);

//   const handleCardClick = (character) => {
//     setSelectedCharacter(character); // Open the modal with the selected character
//   };

//   const closeModal = () => {
//     setSelectedCharacter(null); // Close the modal
//   };

//   return (
//     <div className="characterList">
//       <SearchBar setCharacterName={setCharacterName} />
//       <div className="character-grid">
//         {characters.map((character) => (
//           <CharacterCard
//             key={character.id}
//             character={character}
//             onClick={handleCardClick} // Pass the click handler
//           />
//         ))}
//       </div>
//       {selectedCharacter && (
//         <CharacterModal character={selectedCharacter} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default CharacterList;

import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterModal from "../CharacterModal/CharacterModal";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import md5 from "crypto-js/md5";
import "./style.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Marvel API keys
  const publicKey = "c1263ac0fe61a6a8b5531e230b3d772f";
  const privateKey = "64eb042cddc517484656e6abe5eb9f254ed13c4f";

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = new Date().getTime();
      const hash = md5(`${ts}${privateKey}${publicKey}`).toString();

      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters`,
          {
            params: {
              ts,
              apikey: publicKey,
              hash,
              ...(characterName && { nameStartsWith: characterName }), // Add only if characterName exists
            },
          }
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data from Marvel API:", error);
      }
    };

    fetchCharacters();
  }, [characterName]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="characterList">
      <SearchBar setCharacterName={setCharacterName} />
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default CharacterList;
