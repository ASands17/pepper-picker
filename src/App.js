import React, { FC, useState } from "react";
import AllPeppers from "./AllPeppers"
import PepperDetails from "./PepperDetails"

const App= () => {
  return(
    <div>
      <h1>FULL APP RENDER</h1>
    <AllPeppers />
    <PepperDetails />
    </div>
  )
}

export default App;
