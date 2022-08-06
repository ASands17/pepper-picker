import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./PepperDetails.css"

const PepperDetails = () => {
    const params = useParams();
    const currentId = params.id;

    const [pepperInfo, setPepperInfo] = useState([]);
    const [errorDetails, setErrorDetails] = useState('');
    
    const getDetails = async () => {
        try {
            const response = await fetch(`https://polar-inlet-62371.herokuapp.com/peppers/${currentId}`);
            const allInfo = await response.json();
            setPepperInfo(allInfo[0]);
        } catch (error) {
            setErrorDetails(
                "Sorry, there has been a problem loading your page. Try again!"
            );
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return(
        <div className="detailsDisplay">
            <h1 data-cy="details-name"> {pepperInfo.name} </h1>
            <img data-cy="details-image" className="detailsDisplayImage" src={pepperInfo.imageUrl} />
            <h2>Care Instructions</h2>
            <p data-cy="details-water"> {pepperInfo.waterInfo} </p>
            <p data-cy="details-sun"> {pepperInfo.sunInfo} </p>
            <p data-cy="details-harvest"> {pepperInfo.harvestInfo} </p>
            <h2>More information</h2>
            <p data-cy="details-origin"> Origin: {pepperInfo.origin}</p>
            <p data-cy="details-flavor"> {pepperInfo.flavorProfile} </p>
            <p data-cy="details-scoville"> {pepperInfo.scovilleUnits} </p>
            <p data-cy="details-fact"> {pepperInfo.funFact} </p>
            <p data-cy="details-link"> {pepperInfo.seedLink} </p>
        </div>
    )
}

export default PepperDetails;