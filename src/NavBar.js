import React, { FC, useEffect, useState } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar= () => {


    return (
            <nav className="navbar">
                <h1> Pepper Picker </h1>
                <Link to="/">
                    <p> All Peppers Link Here </p>
                </Link>
                <Link to="/my-peppers">
                    <p> My Peppers Link Here </p>
                </Link>
            </nav>
    )
}

export default NavBar;