import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./PepperDetails.css"
import { FiSun } from 'react-icons/fi';
import { GiWateringCan } from 'react-icons/gi';
import { TbPepper } from 'react-icons/tb';

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
        <div> {errorDetails ? (<h2 data-cy="error-message" className="error-message"> {errorDetails} </h2>) 
        : (
            <div>
                
                <div className="detailsDisplay">
                    <div>
                        <img data-cy="details-image" className="detailsDisplayImage" src={pepperInfo.imageUrl} />
                    </div>
                    
                    <div className="care-instructions">
                    <h1 className="detailsName" data-cy="details-name"> {pepperInfo.name} </h1>
                        <h2 className="informationHeader">Care Instructions</h2>
                        <ul className="informationList">
                            <li data-cy="details-water"> <GiWateringCan /> {pepperInfo.waterInfo}</li>
                            <li data-cy="details-sun"> <FiSun /> {pepperInfo.sunInfo}</li>
                            <li data-cy="details-harvest"> <TbPepper /> {pepperInfo.harvestInfo}</li>
                        </ul>
                        <h2>More information</h2>
                        <ul className="informationList">
                            <li data-cy="details-origin"><span className="boldInformation">Origin: </span>{pepperInfo.origin}</li>
                            <li data-cy="details-flavor"><span className="boldInformation">Flavor Profile: </span>{pepperInfo.flavorProfile} </li>
                            <li data-cy="details-scoville"><span className="boldInformation">Scoville Units: </span>{pepperInfo.scovilleUnits}</li>
                            <li data-cy="details-fact"><span className="boldInformation">Fun Fact: </span> {pepperInfo.funFact} </li>
                            <p data-cy="details-link">Buy seeds <a className="buyHere" href={pepperInfo.seedLink} target="_blank">HERE!</a> </p>
                        </ul>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default PepperDetails;