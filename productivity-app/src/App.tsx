// import { useEffect, useState } from 'react';
// import TaskMaster from './components/TaskMaster';
// import { Task } from './types'; // Import your Task type

// function App() {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:8081/tasks')
//       .then(res => res.json())
//       .then(data => setTasks(data))
//       .catch(err => console.log(err));
//   }, [tasks]);

//   return (
//     <TaskMaster tasks={tasks} setTasks={setTasks} />
//   );
// }

// export default App;

<<<<<<< Updated upstream

// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import TaskColumn from './components/TaskColumn';
// import Calendar from './components/Calendar';
// import Events from './components/Events';
// import TaskModal from './components/TaskModal';

// const TaskMaster: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [taskToEdit, setTaskToEdit] = useState(null);
//   const [tasks, setTasks] = useState([
//     { id: 1, status: 'Not Started', title: 'ECE 374 Assignment', description: 'Backtracking and Dynamic Programming', dueDate: '23 Mar 2024', dueTime: '1:30 pm' },
//     // Add other existing tasks with unique IDs
//   ]);

//   const handleAddTask = () => {
//     setTaskToEdit(null); // Reset to add a new task
//     setShowModal(true);
//   };

//   const handleEditTask = (task) => {
//     setTaskToEdit(task); // Set task for editing
//     setShowModal(true);
//   };

//   const handleSaveTask = (newTask) => {
//     if (taskToEdit) {
//       setTasks(tasks.map(task => (task.id === taskToEdit.id ? { ...task, ...newTask } : task)));
//     } else {
//       setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
//     }
//     setShowModal(false);
//   };

//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <main className="flex flex-col px-6 pt-9 bg-white rounded-lg">
//       <Header />
//       <div className="flex mt-3 ml-3.5 gap-5">
//         <Sidebar />
//         <div className="flex flex-1 gap-5" style={{ marginRight: '1rem' }}>
//           <div className="flex w-full gap-5">
//             <TaskColumn
//               title="Not Started"
//               count={tasks.filter(t => t.status === 'Not Started').length}
//               tasks={tasks.filter(t => t.status === 'Not Started')}
//               onEditTask={handleEditTask}
//             />
//             <TaskColumn
//               title="In Progress"
//               count={tasks.filter(t => t.status === 'In Progress').length}
//               tasks={tasks.filter(t => t.status === 'In Progress')}
//               onEditTask={handleEditTask}
//             />
//             <TaskColumn
//               title="Completed"
//               count={tasks.filter(t => t.status === 'Completed').length}
//               tasks={tasks.filter(t => t.status === 'Completed')}
//               onEditTask={handleEditTask}
//             />
//           </div>
//           <aside className="w-[30%]">
//             <Calendar />
//             <Events />
//           </aside>
//         </div>
//       </div>
//       {showModal && (
//         <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} initialData={taskToEdit} />
//       )}
//     </main>
//   );
// };

// export default TaskMaster;


// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import TaskColumn from './components/TaskColumn';
// import Calendar from './components/Calendar';
// import Events from './components/Events';
// import TaskModal from './components/TaskModal';

// const TaskMaster: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [taskToEdit, setTaskToEdit] = useState(null);
//   const [tasks, setTasks] = useState([
//     { id: 1, status: 'Not Started', title: 'ECE 374 Assignment', description: 'Backtracking and Dynamic Programming', dueDate: '23 Mar 2024', dueTime: '1:30 pm' },
//     // Add other existing tasks with unique IDs
//   ]);

//   const handleAddTask = () => {
//     setTaskToEdit(null); // Reset to add a new task
//     setShowModal(true);
//   };

//   const handleEditTask = (task) => {
//     setTaskToEdit(task); // Set task for editing
//     setShowModal(true);
//   };

//   const handleSaveTask = (newTask) => {
//     if (taskToEdit) {
//       setTasks(tasks.map(task => (task.id === taskToEdit.id ? { ...task, ...newTask } : task)));
//     } else {
//       setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
//     }
//     setShowModal(false);
//   };

//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <main className="flex flex-col px-6 pt-9 bg-white rounded-lg">
//       <Header />
//       <div className="flex mt-3 ml-3.5 gap-5">
//         <Sidebar />
//         <div className="flex-auto">
//           <div className="flex gap-5">
//             <TaskColumn
//               title="Not Started"
//               count={tasks.filter(t => t.status === 'Not Started').length}
//               tasks={tasks.filter(t => t.status === 'Not Started')}
//               onEditTask={handleEditTask}
//             />
//             <TaskColumn
//               title="In Progress"
//               count={tasks.filter(t => t.status === 'In Progress').length}
//               tasks={tasks.filter(t => t.status === 'In Progress')}
//               onEditTask={handleEditTask}
//             />
//             <TaskColumn
//               title="Completed"
//               count={tasks.filter(t => t.status === 'Completed').length}
//               tasks={tasks.filter(t => t.status === 'Completed')}
//               onEditTask={handleEditTask}
//             />
//           </div>
          
//           {/* Centered Add Task Button */}
//           <div className="flex justify-center mt-6">
//             <button onClick={handleAddTask} className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Add Task</button>
//           </div>
//         </div>

//         <aside className="ml-5 w-[32%]">
//           <Calendar />
//           <Events />
//         </aside>
//       </div>

//       {showModal && (
//         <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} initialData={taskToEdit} />
//       )}
//     </main>
//   );
// };

// export default TaskMaster;

=======
import { useEffect, useState } from "react";
import TaskMaster from "./components/TaskMaster";
import { Task } from "./types"; // Import your Task type
import GoogleCalendarIntegration from "./components/Calendar.tsx"; // Import the Google Calendar component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OAuth2Callback from "./components/OAuth2Callback"; // Add OAuth2 callback route
>>>>>>> Stashed changes


<<<<<<< Updated upstream

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskColumn from './components/TaskColumn';
import Calendar from './components/Calendar';
import Events from './components/Events';
import TaskModal from './components/TaskModal';
import { Task } from './types'; // Import Task type

const TaskMaster: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      status: 'Not Started',
      title: 'ECE 374 Assignment',
      description: 'Backtracking and Dynamic Programming',
      dueDate: '23 Mar 2024',
      dueTime: '1:30 pm',
    },
  ]);

  const handleAddTask = () => {
    setTaskToEdit(null);
    setShowModal(true);
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const handleSaveTask = (newTask: Task) => {
    if (taskToEdit) {
      setTasks(tasks.map(task => (task.id === taskToEdit.id ? { ...task, ...newTask } : task)));
    } else {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <main className="flex flex-col px-6 pt-8 bg-white rounded-lg">
      <Header />
      <div className="flex mt-4 ml-8 gap-6">
        <Sidebar />
        <div className="flex-auto flex gap-5">
          <TaskColumn
            title="Not Started"
            count={tasks.filter(t => t.status === 'Not Started').length}
            tasks={tasks.filter(t => t.status === 'Not Started')}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            className="flex-1 min-w-[280px]"
          />
          <TaskColumn
            title="In Progress"
            count={tasks.filter(t => t.status === 'In Progress').length}
            tasks={tasks.filter(t => t.status === 'In Progress')}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            className="flex-1 min-w-[280px]"
          />
          <TaskColumn
            title="Completed"
            count={tasks.filter(t => t.status === 'Completed').length}
            tasks={tasks.filter(t => t.status === 'Completed')}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            className="flex-1 min-w-[280px]"
          />
        </div>
        
        <aside className="w-[260px] ml-6">
          <Calendar />
          <Events className="mt-6" />
        </aside>
      </div>
      {showModal && (
        <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} initialData={taskToEdit} />
      )}
      <div className="flex justify-center mt-6">
        <button onClick={handleAddTask} className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Add Task</button>
      </div>
    </main>
  );
};

export default TaskMaster;
=======
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
        <Route path="/calendar" element={<GoogleCalendarIntegration />} />
        {/* OAuth2 callback handler */}
        <Route path="/oauth2callback" element={<OAuth2Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> Stashed changes
