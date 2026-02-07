import React from "react";
import "../styles.css";

import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import CardList from '../components/CardList';

const Work = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <h1>Projects</h1>
            <br></br>
            <CardList />
        </div>
        <Contact />
        </>
    )
}

export default Work;