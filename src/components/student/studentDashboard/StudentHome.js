import React from "react";
import StudentNavbar from "./StudentNavbar";
// import StudentMain from "./studentComponents/StudentMain";
import Profile from "./studentComponents/Profile";
import "../css/StudentHome.css";

function StudentHome() {
    return (
        <div className="dashboard">
            <StudentNavbar />
            <Profile />
            {/* <StudentMain /> */}
        </div>
    );
};

export default StudentHome;