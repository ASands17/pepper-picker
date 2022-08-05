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
            <h1> {pepperInfo.name} </h1>
            <img className="detailsDisplayImage" src={pepperInfo.imageUrl} />
            <h2>Care Instructions</h2>
            <p> {pepperInfo.waterInfo} </p>
            <p> {pepperInfo.sunInfo} </p>
            <p> {pepperInfo.harvestInfo} </p>
            <h2>More information</h2>
            <p> Origin: {pepperInfo.origin}</p>
            <p> {pepperInfo.flavorProfile} </p>
            <p> {pepperInfo.scovilleUnits} </p>
            <p> {pepperInfo.funFact} </p>
            <p> {pepperInfo.seedLink} </p>
        </div>
    )
}

export default PepperDetails;