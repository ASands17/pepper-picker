import React, { useEffect, useState } from "react";
import AllPeppers from "./Components/AllPeppers"
import MyPeppers from "./Components/MyPeppers"
import PepperDetails from "./Components/PepperDetails"
import NavBar from "./Components/NavBar.js"
import NotFound from "./Components/NotFound.js"
import { Route, Switch} from "react-router-dom";


const App= () => {

  const [peppers, setPeppers] = useState([]);
  const [error, setError] = useState('');
  const [selectedPeppers, setSelectedPeppers] = useState([]);

  const getPeppers = async () => {
    try {
    const response = await fetch("https://polar-inlet-62371.herokuapp.com/peppers");
    const peppers = await response.json();
    const allPeppers = peppers.map(pep => ({...pep, isSelected: false }))

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


const getSelected = (id, isChecked) => {
  peppers.forEach((pep) => {
    if (pep.id === id && isChecked) {
      pep.isSelected = true;
      selectedPeppers.push(pep)
    } if (pep.id === id && !isChecked) {
      pep.isSelected = false;
    }
  });
  setPeppers(peppers);
  setSelectedPeppers(peppers.filter(pep => pep.isSelected))
}

  return(
    <div>
      <NavBar />
      <Switch>
      <Route
      exact path="/"
      render={() => (
        <AllPeppers 
        pepperPreview={peppers}
        error={error}
        selected={getSelected} 
        />
      )}
      />
      <Route
      exact path="/my-peppers"
      render={() => (
        <MyPeppers 
        selectedPeppers={selectedPeppers}
        pepperPreview={peppers}
        error={error}
        selected={getSelected} 
        />
      )}
      />
      <Route exact path="/peppers/:id">
          <PepperDetails />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      </Switch>
  
    </div>
  )
}

export default App;
