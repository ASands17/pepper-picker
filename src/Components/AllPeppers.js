import PropTypes from 'prop-types';
import PepperCard from "./PepperCard"
import "../Css/AllPeppers.css"

const AllPeppers= ({pepperPreview, error, getSelected}) => {
    let pepperPreviews= pepperPreview.map(pepper => {
        return(
            <div key={pepper.name} className="all-cards-holder" data-cy="all-cards-holder">
                <PepperCard 
                key={pepper.id.toString()} 
                pepper={pepper} 
                getSelected={getSelected} 
                isChecked={pepper.isSelected}/>
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
    pepperPreview: PropTypes.array.isRequired,
    error: PropTypes.string,
    selected: PropTypes.func.isRequired
}

export default AllPeppers;
