import React from 'react';
import ReactDOM from 'react-dom/client';
import ParkSearch from './ParkSearch.js';
import ParkInfo from './ParkInfo.js';
import HomePage from './HomePage.js';
import Navbar from './GlobalComponents/Navbar.jsx';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Footer from './GlobalComponents/Footer.jsx';

import './Style/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename="/Exploring-National-Parks">
        <Navbar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/ParkSearch" element={<ParkSearch />} />
            <Route path="/ParkInfo" element={<ParkInfo />} />
        </Routes>
        <Footer/>
    </Router>
);

// const activities = ReactDOM.createRoot(document.getElementById('activitiesDropdown'));
// activities.render(
//     <Activities />
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

