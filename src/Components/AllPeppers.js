import PropTypes from 'prop-types';
import PepperCard from "./PepperCard"
import "../Css/AllPeppers.css"

const AllPeppers= ({pepperPreview, error, selected}) => {
    let pepperPreviews= pepperPreview.map(pepper => {
        return(
            <div key={pepper.name} className="all-cards-holder" data-cy="all-cards-holder">
                <PepperCard 
                key={pepper.id.toString()} 
                pepper={pepper} 
                selected={selected} 
                isChecked={pepper.isSelected}/>
            </div>
        )
    })

    //& conditionally rendering either pepperPreviews page or error page depending on presence of error

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
    pepperPreview: PropTypes.array.isRequired,
    error: PropTypes.string,
    selected: PropTypes.func.isRequired
}

export default AllPeppers;
