import React, { FC, useState, useEffect } from "react";
import PepperCard from "./PepperCard.js"
import PropTypes from 'prop-types';


const MyPeppers = ({selectedPeppers, pepperPreview, error, selected}) => {

    return (
        <div className="grid">
            {selectedPeppers.map(pepper => {
                return(
                <div className="cards-holder">
                <PepperCard pepper={pepper} selected={selected} isChecked={true}/>
                </div>
                )
            })}
        </div>  
    )
}

MyPeppers.propTypes = {
    selectedPeppers: PropTypes.array,
    pepperPreview: PropTypes.array,
    error: PropTypes.string,
    selected: PropTypes.func
}

export default MyPeppers;
