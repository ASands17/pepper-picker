import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import PepperCard from "./PepperCard"
import "./AllPeppers.css"


const AllPeppers= ({pepperPreview, error, selected}) => {


    let pepperPreviews= pepperPreview.map(pepper => {
        return(
            <div className="all-cards-holder" data-cy="all-cards-holder">
            <PepperCard pepper={pepper} selected={selected} isChecked={pepper.isSelected}/>
            </div>
        )
    })

    return(
        <div className="grid" data-cy="grid">
        {pepperPreviews}
        </div>
    )
}

AllPeppers.propTypes = {
    pepperPreview: PropTypes.array,
    error: PropTypes.string,
    selected: PropTypes.func
}

export default AllPeppers;
