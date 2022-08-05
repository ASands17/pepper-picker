import { Link } from "react-router-dom";
import "./PepperCard.css"
import React, { useState } from "react";

const PepperCard = (props) => {

    const [checked, setChecked] = useState(props.isChecked);

    let handleChange = () => {
        setChecked(!checked);
        props.selected(props.pepper.id, !checked);
    }

    


    return (
        <div className="pepperCard">
            <Link to={`peppers/${props.pepper.id}`}>
            <h2>{props.pepper.name}</h2>
            </Link>
            <img className="pepperCardImage" src={props.pepper.imageUrl} />
            <h2>Spice Level: {props.pepper.spiceLevel}</h2>
            
            <label>
                <input 
                type="checkbox"
                checked={checked}
                onChange={handleChange} 
                />
                Add to My Peppers
            </label>
        </div>
        
    )
}

export default PepperCard;