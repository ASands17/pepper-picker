import React, { FC, useEffect, useState } from "react";
import AllPeppers from "./AllPeppers"
import MyPeppers from "./MyPeppers"
import PepperDetails from "./PepperDetails"
import NavBar from "./NavBar.js"
import { Route, Link } from "react-router-dom";

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
      <NavBar />
      <Route
      exact path="/"
      render={() => (
        <AllPeppers pepperPreview={peppers} error={error}/>
      )}
      />
      <Route
      exact path="/my-peppers"
      render={() => (
        <MyPeppers />
      )}
      />
    {/* <AllPeppers pepperPreview={peppers} error={error}/>
    <PepperDetails /> */}
    </div>
  )
}

export default App;
