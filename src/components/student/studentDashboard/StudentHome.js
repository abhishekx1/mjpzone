import React from "react";
import StudentNavbar from "./StudentNavbar";
import StudentMain from "./studentComponents/StudentMain";
import CourseDetails from "./studentComponents/CourseDetails";
import "../css/StudentHome.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemesterResults from "./studentComponents/SemesterResults";
// import FacultyPage from "./studentComponents/FacultyPage";
// import EventNotice from "./studentComponents/EventNotice";
// import EventRegistration from "./studentComponents/EventRegistration";
// import StudentMain from "./studentComponents/StudentMain";

function StudentHome() {
  return (
    <div className="dashboard">
      <StudentNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentMain />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
          <Route path="/SemesterResults" element={<SemesterResults />} />
          {/* <Route path="/FacultyPage" element={<FacultyPage />} />
          <Route path="/EventNotice" element={<EventNotice />} />
          <Route path="/EventRegistration" element={<EventRegistration />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default StudentHome;
