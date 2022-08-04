import React, { FC, useState } from "react";
import PepperCard from "./PepperCard"

const AllPeppers= () => {
    return(
        <div>
        <h2>All peppers component</h2>
            <PepperCard />
            <PepperCard />
            <PepperCard />
        </div>
    )
}

export default AllPeppers;