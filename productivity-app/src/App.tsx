import { useEffect, useState } from "react";
import TaskMaster from "./components/TaskMaster";
import { Task } from "./types"; // Import your Task type
import Calendar from "./components/Calendar"; // Import your Calendar.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OAuth2Callback from "./components/OAuth2Callback"; // Add OAuth2 callback route

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:8081/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, [tasks]);

  return (
    <Router>
      <Routes>
        {/* Main TaskMaster route */}
        <Route
          path="/"
          element={<TaskMaster tasks={tasks} setTasks={setTasks} />}
        />
        {/* Google Calendar Integration */}
        <Route path="/calendar" element={<Calendar />} />
        {/* OAuth2 callback handler */}
        <Route path="/oauth2callback" element={<OAuth2Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
