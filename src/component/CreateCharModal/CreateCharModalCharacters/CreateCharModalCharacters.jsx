import "./style.css";
import useUser from "../../../Hooks/useUser";

function CreateCharModalCharacters(props) {
  const { setUser } = useUser();
  const id = `card_${props.id}`;
  return (
    <li key={props.id} className="CreateCharModal_CharacterCard">
      <div
        onClick={(e) => {
          props.changeCard(props.cardChoise)
          setUser((prev) => ({
            ...prev,
            avatar: props.cardInfo.imgPath,
            classe: props.cardInfo.name
          }));
        }}
        id={id}
        style={{ opacity: `${props.opacity}` }}
        className="CreateCharModal_CardWrapper"
      ></div>
      <h2>{props.cardInfo.name}</h2>
      <div className="CreateCharModal_CharacterCard_AvatarWrapper">
        <img
          src={require(`../../../assests/images/characters/${props.cardInfo.imgPath}`)}
          alt={props.cardInfo.alt}
        />
      </div>
      <p>{props.cardInfo.descricao}</p>
    </li>
  );
}
export default CreateCharModalCharacters;
