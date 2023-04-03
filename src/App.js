import './App.css';
import FacultyLogin from './components/faculty/FacultyLogin';
import StudentsLogin from './components/student/StudentsLogin';

function App() {
  return (
    <div className="App">
      <h1>MJPZone</h1>
      <StudentsLogin />
      <FacultyLogin />
    </div>
  );
}

export default App;
