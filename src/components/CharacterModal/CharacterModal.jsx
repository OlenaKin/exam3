// import PropTypes from "prop-types";
// import { getThumbnailUrl } from "../../utils";

// const CharacterModal = ({ character, onClose }) => {
//   if (!character) return null;

//   return (
//     <div className="modal">
//       <button onClick={onClose}>Close</button>
//       <h2>{character.name}</h2>
//       <img src={getThumbnailUrl(character.thumbnail)} alt={character.name} />
//       <p>{character.description || "No description available."}</p>
//     </div>
//   );
// };

// // Define PropTypes to validate props
// CharacterModal.propTypes = {
//   character: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     thumbnail: PropTypes.shape({
//       path: PropTypes.string.isRequired,
//       extension: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default CharacterModal;

import PropTypes from "prop-types";
import "./style.css"; // Style your modal

const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <h2>{character.name}</h2>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="modal-image"
        />
        <p>{character.description || "No description available."}</p>
      </div>
    </div>
  );
};

CharacterModal.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default CharacterModal;
