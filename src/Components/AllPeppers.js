import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import PepperCard from "./PepperCard"
import "../Css/AllPeppers.css"


const AllPeppers= ({pepperPreview, error, selected}) => {

    let pepperPreviews= pepperPreview.map(pepper => {
        return(
            <div className="all-cards-holder" data-cy="all-cards-holder">
                <PepperCard key={pepper.id.toString()} pepper={pepper} selected={selected} isChecked={pepper.isSelected}/>
            </div>
        )
    })

    return(
        <div>
            {error ? (
                <h2 data-cy="error-message" className="error-message"> {error} </h2>
            ) : (
            <div className="grid" data-cy="grid">
            {pepperPreviews}
            </div>
            )}
        </div>
    )
}

AllPeppers.propTypes = {
    pepperPreview: PropTypes.array,
    error: PropTypes.string,
    selected: PropTypes.func
}

export default AllPeppers;