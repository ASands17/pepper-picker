import { Link } from "react-router-dom";
import "./PepperCard.css"

const PepperCard= (props) => {

    return (
        <div className="pepperCard">
            <Link to={`peppers/${props.pepper.id}`}>
            <h2>{props.pepper.name}</h2>
            </Link>
            <img className="pepperCardImage" src={props.pepper.imageUrl} />
            <h2>Spice Level: {props.pepper.spiceLevel}</h2>
        </div>
    )
}

export default PepperCard;