import React, { FC, useState } from "react";
import "./PepperCard.css"

const PepperCard= (props) => {
    return (
        <div className="pepperCard">
            <h2>{props.pepper.name}</h2>
            <img className="pepperCardImage" src={props.pepper.imageUrl} />
            <h2>Spice Level: {props.pepper.spiceLevel}</h2>
        </div>
    )
}

export default PepperCard;