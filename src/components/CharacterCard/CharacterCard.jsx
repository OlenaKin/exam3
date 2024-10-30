import PropTypes from "prop-types";
import "./style.css";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div onClick={() => onClick(character)} className="charactersCard">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="characterImage"
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
