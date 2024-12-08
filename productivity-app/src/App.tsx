import { useEffect, useState } from 'react';
import TaskMaster from './components/pages/ToDoList/TaskMaster.tsx';
import SignUp from './components/pages/Authentication/SignUp.tsx';
import LogIn from './components/pages/Authentication/Login.tsx';
import { Task } from './types'; // Import your Task 
import Calendar from "./components/pages/Calendar/Calendar"; // Import your Calendar.tsx
import OAuth2Callback from "./components/pages/Calendar/OAuth2Callback"; // Add OAuth2 callback route

// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:8081/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }, [tasks]);

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<TaskMaster tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/oauth2callback" element={<OAuth2Callback />} />
        <Route path = "/sign-up" element = {<SignUp />}/>
        <Route path = "/log-in" element = {<LogIn />}/>
        <Route path = "/task" element = {<TaskMaster tasks = {tasks} setTasks = {setTasks} />} />

      </Routes>
    </Router>
  );
}

export default App;


