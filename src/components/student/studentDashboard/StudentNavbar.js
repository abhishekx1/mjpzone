import React from "react";
import Logo from "../loginImage/mjpru-logo.png";
import "../css/StudentNavbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faAddressCard, faClipboardCheck, faCalendarDays, faList, faClipboard, faUsers, faAngleDown, faCalendarPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function StudentHome() {
    return (
        <nav className="navbar">
            <a href="/" className='title'>
                <h1><img src={Logo} alt="logo" /> MJPZONE</h1>
            </a>
            <a href="/" className="home nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faHouseChimney} /> Home
            </a>
            <a href="/" className="profile nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faAddressCard} /> Profile
            </a>
            <a href="/" className="attendance nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faClipboardCheck} /> Attendance
            </a>
            <a href="/" className="timeTable nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faCalendarDays} /> Time Table
            </a>
            <a href="/" className="courseDetail nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faList} /> Course Details
            </a>
            <a href="/" className="results nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faClipboard} /> Semester Results
            </a>
            <a href="/FacultyPage.js" className="faculty nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faUsers} /> My Faculty
            </a>
            <a href="/" className="event nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faCalendarPlus} /> Events
                <FontAwesomeIcon className="fontawesome" icon={faAngleDown} />
            </a>
            <a href="/" className="sub-event nav-link">
                <FontAwesomeIcon className="fontawesome" icon={faAngleRight} /> Upcoming Event
            </a>
            <a href="/" className="sub-event nav-link register-event ">
                <FontAwesomeIcon className="fontawesome" icon={faAngleRight} /> Register Event
            </a>
        </nav>
    );
};

export default StudentHome;