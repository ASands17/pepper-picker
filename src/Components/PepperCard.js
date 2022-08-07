import { Link } from "react-router-dom";
import "../Css/PepperCard.css"
import React, { useState } from "react";
import PropTypes from 'prop-types';

const PepperCard = ({pepper, selected, isChecked}) => {
    
    const [checked, setChecked] = useState(isChecked);
    
    let handleChange = () => {
        setChecked(!checked);
        selected(pepper.id, !checked);
    }

    return (
        <div className="pepper-card">
            <Link to={`peppers/${pepper.id}`} style={{ textDecoration: 'none' }}>
                <h2 className="pepper-name" data-cy="pepper-name-link">{pepper.name}</h2>
            </Link>
            <img className="pepper-card-image" src={pepper.imageUrl} />
            <h2 className="pepper-spice">Spice Level: {pepper.spiceLevel}</h2>
            <label className="pepper-label">
                <input
                className="pepper-checkbox"
                data-cy="checkbox"
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