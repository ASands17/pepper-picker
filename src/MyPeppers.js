import React, { FC, useState, useEffect } from "react";
import PepperCard from "./PepperCard.js"


const MyPeppers = (props) => {
    
    
    return (
        <div className="grid">
            {props.selectedPeppers.map(pepper => {
                return(
                <div className="cards-holder">
                <PepperCard pepper={pepper} selected={props.selected} isChecked={true}/>
                </div>
                )
            })}
        </div>  
    )
}

export default MyPeppers;


