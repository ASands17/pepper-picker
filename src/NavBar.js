import React, { FC, useEffect, useState } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar= () => {


    return (
            <nav data-cy="navbar" className="navbar">
                <h1> Pepper Picker </h1>
                <Link to="/">
                    <p> All Peppers </p>
                </Link>
                <Link to="/my-peppers">
                    <p data-cy="my-peppers-link"> My Peppers </p>
                </Link>
            </nav>
    )
}


export default NavBar;