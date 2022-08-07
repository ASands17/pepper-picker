import React, { FC, useEffect, useState } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "../Css/NavBar.css"
import { FaPepperHot } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { RiPlantLine } from 'react-icons/ri'

const NavBar= () => {
    return (
        <nav data-cy="navbar" className="navbar">
            <h1> <span className="pepper-icon"> <FaPepperHot /> </span> Pepper Picker </h1>
                <NavLink to="/" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>
                    <p className="links"> <span className="all-icon"> <RiPlantLine />  </span> All Peppers </p>
                </NavLink>
                <NavLink to="/my-peppers" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>
                    <p 
                    data-cy="my-peppers-link" 
                    className="links"> <span className="heart-icon"> <GrFavorite /> </span> My Peppers </p>
                </NavLink>
        </nav>
    )
}

export default NavBar;