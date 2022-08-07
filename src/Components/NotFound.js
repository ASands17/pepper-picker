import "../Css/NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
        <h1> 404: Page not found </h1>
        <h2> Please click All Peppers to go back home. </h2>
        <img className="error-image" src="https://img.freepik.com/premium-vector/cute-sad-crying-red-pepper-character_464314-1063.jpg?w=2000" alt="Red pepper cries and wipes his eyes" />
        </div>
    )
}

export default NotFound;