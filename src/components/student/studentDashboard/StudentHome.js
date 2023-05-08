import React from "react";
import StudentNavbar from "./StudentNavbar";
// import StudentMain from "./studentComponents/StudentMain";
import "../css/StudentHome.css";
import FacultyPage from "./studentComponents/FacultyPage";
// import EventNotice from "./studentComponents/EventNotice";
// import EventRegistration from "./studentComponents/EventRegistration";
// import StudentMain from "./studentComponents/StudentMain";



function StudentHome() {
    return (
        <div className="dashboard">
            <StudentNavbar />
             {/* <StudentMain /> */}
             <FacultyPage/> 
             {/* <EventNotice/> */}
            {/* <EventRegistration />  */}

           
        </div>
    );
};

export default StudentHome;