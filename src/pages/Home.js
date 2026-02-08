import React from "react";
import "../styles.css"

import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';

import headshot from '../assets/headshot.jpg';

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="home-page">
                <div className="intro-text">
                    <h1 className="typed">Hi, I'm Vansh!</h1>
                    <h2 className="fadein frame2">Welcome to my personal site.</h2>
                    <br></br>
                    <p className="fadein frame2">Right now, I'm a 1st-year student at <a href="https://www.sgsits.ac.in/" target="_blank" rel="noopener noreferrer">UCLA</a> majoring in Electronics and minoring in Data Science.</p>
                    <br></br>
                    <p className="fadein frame2">I'm also </p>
                    <ul className="fadein frame2">
                     interested in full stack web development.
                    <li> Exploring real-world projects </li>
                    <li>Learning by building </li>
                    <li>Growing one skill at a time </li>
                    </ul>
                    <br></br>
                </div>
                <img className="fadein" src={headshot} alt="Vansh Patni."></img>
            </div>
        </div>
        <Contact />
        </>
    )
}

export default Home;
