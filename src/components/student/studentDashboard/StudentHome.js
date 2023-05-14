import React from "react";
import StudentNavbar from "./StudentNavbar";
<<<<<<< HEAD
import StudentMain from "./studentComponents/StudentMain";
import "../css/StudentHome.css";
=======
// import StudentMain from "./studentComponents/StudentMain";
import "../css/StudentHome.css";
import FacultyPage from "./studentComponents/FacultyPage";
// import EventNotice from "./studentComponents/EventNotice";
// import EventRegistration from "./studentComponents/EventRegistration";
// import StudentMain from "./studentComponents/StudentMain";
import Schedule from "./studentComponents/Schedule";


>>>>>>> d77dda31fd6826c096e2d12af1cd6c10ae50f9e9

function StudentHome() {
    return (
        <div className="dashboard">
            <StudentNavbar />
<<<<<<< HEAD
            <StudentMain />
=======
             {/* <StudentMain /> */}
             {/* <FacultyPage/>  */}
             {/* <EventNotice/> */}
            {/* <EventRegistration />  */}
            <Schedule/>

           
>>>>>>> d77dda31fd6826c096e2d12af1cd6c10ae50f9e9
        </div>
    );
};

export default StudentHome;