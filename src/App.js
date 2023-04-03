import './App.css';
import FacultyLogin from './components/faculty/FacultyLogin';
import StudentsLogin from './components/student/StudentsLogin';

function App() {
  return (
    <div className="App">
      <StudentsLogin />
      <FacultyLogin />
    </div>
  );
}

export default App;
