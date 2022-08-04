import React, { FC, useEffect, useState } from "react";
import AllPeppers from "./AllPeppers"
import PepperDetails from "./PepperDetails"

const App= () => {

  const [peppers, setPeppers] = useState([]);
  const [error, setError] = useState('');
  
  const getPeppers = async () => {
    try {
    const response = await fetch("https://polar-inlet-62371.herokuapp.com/peppers");
    const allPeppers = await response.json();
    setPeppers(allPeppers);
  } catch (error) {
    setError(
      "Sorry, there has been a problem loading your page. Try again!"
      );
  }
}

useEffect(() => {
  getPeppers();
}, []);


  return(
    <div>
      <h1>FULL APP RENDER</h1>
    <AllPeppers pepperPreview={peppers} error={error}/>
    <PepperDetails />
    </div>
  )
}

export default App;
