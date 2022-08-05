import React, { FC, useState } from "react";
import PepperCard from "./PepperCard.js"

const MyPeppers = (props) => {

    // console.log("Selected", props.selectedPeppers)

    const selectedPeppers = props.selectedPeppers.map(pepper => {
        return(
        <div className="cards-holder">
        <PepperCard pepper={pepper} selected={props.selected} />
        </div>
        )
    })

    return (
        <div className="grid">
            {selectedPeppers}
        </div>  
    )
}

export default MyPeppers;


