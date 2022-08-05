import { Link } from "react-router-dom";
import "./PepperCard.css"
import React, { useState } from "react";
import PropTypes from 'prop-types';

const PepperCard = ({pepper, selected, isChecked}) => {

    const [checked, setChecked] = useState(isChecked);

    let handleChange = () => {
        setChecked(!checked);
        selected(pepper.id, !checked);
    }

    return (
        <div className="pepperCard">
            <Link to={`peppers/${pepper.id}`}>
            <h2>{pepper.name}</h2>
            </Link>
            <img className="pepperCardImage" src={pepper.imageUrl} />
            <h2>Spice Level: {pepper.spiceLevel}</h2>
            
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

PepperCard.propTypes = {
    pepper: PropTypes.object,
    selected: PropTypes.func,
    isChecked: PropTypes.bool,
}


export default PepperCard;