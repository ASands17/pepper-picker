import React, { FC, useEffect, useState } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar= () => {
    return (
        <nav data-cy="navbar" className="navbar">
            <h1> Pepper Picker </h1>
            <NavLink to="/" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>
                <p> All Peppers </p>
            </NavLink>
            <NavLink to="/my-peppers" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>
                <p data-cy="my-peppers-link"> My Peppers </p>
            </NavLink>
        </nav>
    )
}


export default NavBar;