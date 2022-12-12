import PepperCard from "./PepperCard.js"
import PropTypes from 'prop-types';
import "../Css/MyPeppers.css"

const MyPeppers = ({selectedPeppers, error, getSelected}) => {
    return (
        <div> {error ? (
            <h2 data-cy="error-message" className="error-message"> {error} </h2>
        ) : (
            <div className="my-peppers-grid">
                {selectedPeppers.map(pepper => {
                        return(
                            <div data-cy="selected-cards-holder" className="cards-holder">
                                <PepperCard 
                                key={pepper.id.toString()} 
                                pepper={pepper} 
                                getSelected={getSelected}
                                isChecked={pepper.isSelected}/>
                            </div>
                    )}
                )}
            </div>
        )}
        </div>
    )
}

MyPeppers.propTypes = {
    selectedPeppers: PropTypes.array.isRequired,
    error: PropTypes.string,
    getSelected: PropTypes.func.isRequired
}

export default MyPeppers;
