import React, { FC, useState } from "react";
import PepperCard from "./PepperCard"
import "./AllPeppers.css"


const AllPeppers= (props) => {


    let pepperPreviews= props.pepperPreview.map(pepper => {
        return(
            <div className="all-cards-holder">
            <PepperCard pepper={pepper} selected={props.selected} isChecked={pepper.isSelected}/>
            </div>
        )
    })

    return(
        <div className="grid">
        {pepperPreviews}
        </div>
    )
}

export default AllPeppers;