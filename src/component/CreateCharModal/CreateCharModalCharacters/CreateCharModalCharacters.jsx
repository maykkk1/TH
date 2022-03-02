import "./style.css";
import useUser from "../../../Hooks/useUser";

function CreateCharModalCharacters(props) {
  const { user, setUser } = useUser();

  const cardSelected = () => {
    
  }
  return (
    <div
      onClick={(e) => {
        e.target.style.backgroundColor = "rgba(0, 0, 0, .5)";
        setUser((prev) => ({
          ...prev,
          avatar: props.cardInfo.imgPath,
        }));
      }}
      className="CreateCharModal_CharacterCard"
    >
      <h2>{props.cardInfo.name}</h2>
      <div className="CreateCharModal_CharacterCard_AvatarWrapper">
        <img
          src={require(`../../../assests/images/characters/${props.cardInfo.imgPath}`)}
          alt={props.cardInfo.alt}
        />
      </div>
      <p>{props.cardInfo.descricao}</p>
    </div>
  );
}

export default CreateCharModalCharacters;
