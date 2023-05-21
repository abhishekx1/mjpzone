import React from "react";
import "./studentComponentCss/StudentMain.css";
// import StudentDashboard from "./StudentDashboard";
import StudentAttendance from "./StudentAttendance";
import StudentFees from "./StudentFees";
import Main from "./FAQ/MainFAQ";
function StudentMain() {
    return (
        <div className="main">
            <nav className="mainNavbar">
                <h1>MJP Rohilkhand University, Bareilly</h1>
                <div className="profile-container">
                     {/* eslint-disable-next-line */}
                    <img src="/" alt="student picture" />
                    <h1>Abhishek Srivastav</h1>
                </div>
            </nav>
            {/* <StudentDashboard /> */}
            {/* <StudentAttendance /> */}
             <Main />
        </div>
    );
};

export default StudentMain;