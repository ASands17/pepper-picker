import PepperCard from "./PepperCard.js"
import PropTypes from 'prop-types';
import "../Css/MyPeppers.css"

const MyPeppers = ({selectedPeppers, error, selected}) => {
    return (
        <div> {error ? (
            <h2 data-cy="error-message" className="error-message"> {error} </h2>
        ) : (
            <div className="my-peppers-grid">
                {selectedPeppers.map(pepper => {
                    if (pepper.isSelected) {
                        return(
                            <div data-cy="selected-cards-holder" className="cards-holder">
                                <PepperCard key={pepper.id.toString()} pepper={pepper} selected={selected} isChecked={true}/>
                            </div>
                    )}
                })}
            </div>
        )}
        </div>
    )
}

MyPeppers.propTypes = {
    selectedPeppers: PropTypes.array.isRequired,
    error: PropTypes.string,
    selected: PropTypes.func.isRequired
}

export default MyPeppers;
