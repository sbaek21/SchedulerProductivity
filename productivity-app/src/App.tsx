import { useEffect, useState } from 'react';
import TaskMaster from './components/pages/ToDoList/TaskMaster.tsx';
import LogIn from './components/pages/Authentication/Login.tsx';
import SignUp from './components/pages/Authentication/SignUp.tsx'; // *** Newly Added ***
import { Task } from './types'; // Import your Task 
import Calendar from "./components/pages/Calendar/Calendar"; // Import your Calendar.tsx
import OAuth2Callback from "./components/pages/Calendar/OAuth2Callback"; // Add OAuth2 callback route

// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // *** Newly Added ***
  
  useEffect(() => {
    fetch('http://localhost:8081/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }, [tasks]);

  return (
    <Router>
      <Routes>
        {/* Redirect to login/signup if not authenticated */}
      <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/task" : "/log-in"} />} // *** Updated Default Route ***
          // element={<TaskMaster tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/log-in" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route 
          path="/task" 
          element={
            isAuthenticated ? (
              <TaskMaster tasks={tasks} setTasks={setTasks} />
            ) : (
              <Navigate to="/log-in" />
            )
          } 
        />
        {/* Google Calendar Integration */}
        <Route path="/calendar" element={<Calendar />} />
        {/* OAuth2 callback handler */}
        <Route path="/oauth2callback" element={<OAuth2Callback />} />
        {/* <Route path = "/log-in" element = {<LogIn />}/>
        <Route path="/sign-up" element={<SignUp />} /> *** Newly Added *** */}
        <Route path = "/task" element = {<TaskMaster tasks = {tasks} setTasks = {setTasks} />} />

      </Routes>
    </Router>
  );
}

export default App;


