import PropTypes from "prop-types";
import "./style.css";

const CharacterCard = ({ character, onClick }) => {
  const imageUrl =
    character.thumbnail.path.replace(/^http:/, "https:") +
    "." +
    character.thumbnail.extension;
  return (
    <div onClick={() => onClick(character)} className="charactersCard">
      <img
        // src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        src={imageUrl}
        loading="lazy"
        alt={character.name}
        className="characterImage"
        width="200" // Set explicit width
        height="300" // Set explicit height
      />
      <h3>{character.name}</h3>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CharacterCard;
