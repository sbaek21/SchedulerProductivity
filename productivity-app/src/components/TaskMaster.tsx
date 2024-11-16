import React, { useState, useEffect, } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TaskColumn from './TaskColumn';
import Calendar from './Calendar';
import Events from './Events';
import TaskEditModal from './TaskEditModal';
import TaskAddModal from './TaskAddModal';
import axios from 'axios';
import { Task } from '../types'; // Import Task type

interface TaskMasterProps {
  tasks: Task[]; // Define the type for the tasks prop
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Function to update tasks
}

const TaskMaster: React.FC<TaskMasterProps> = ({ tasks, setTasks }) => {
  
  const [editTask, setEditTask] = useState<Task | null>(null)
  const [modalEdit, setEditModal] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const emptyTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    dueTime: '',
    status: 'Not Started'
  };

  useEffect(() => {
    // Fetch tasks from the backend
    axios.get<Task[]>('http://localhost:8081/tasks')
      .then((response) => {
        setTasks(response.data); // Now response.data is recognized as Task[]
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, [setTasks]); // Include setTasks in the dependency array

  const handleEditTask = (editTask: Task) => {
   
    axios.put(`http://localhost:8081/tasks/${editTask.id}`, {
      title: editTask.title,
      description: editTask.description,
      dueDate: editTask.dueDate,
      dueTime: editTask.dueTime,
      status: editTask.status
    })
          .then(response => {
              const updatedTask: Task = response.data as Task; // Cast the response to Task type
              setTasks(prevTasks =>
                  prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
              );
              setShowModal(false); // Close the modal after saving
          })
          .catch(error => console.error('Error updating task:', error));
    };


  const handleDeleteTask = (taskId: number) => {
    axios.delete(`http://localhost:8081/tasks/${taskId}`)
      .then(() => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId)); // Update state after deletion
      });
  };



  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [
        ...prevTasks,
        newTask // Use the task object returned from the server
    ]);

    axios.post<Task>('http://localhost:8081/tasks', newTask)
    .then(response => {
        const createdTask: Task = response.data; // Cast the response to Task type
        setTasks(prevTasks => [
            ...prevTasks,
            createdTask // Use the task object returned from the server
        ]);
        setShowModal(false); // Close the modal after saving
    })
    .catch(error => console.error('Error adding task:', error));
  };
  
  const taskAddClicked = () => {
    setEditModal(false);
    setShowModal(true);
  };

  const taskEditClicked = (editTask: Task) => {
    setEditModal(true);
    setShowModal(true);
    setEditTask(editTask);
  }

  //Later add in deleting screen instead of deleting the task right away. 
  const taskDeleteClicked = (taskId: number) => {
    handleDeleteTask(taskId);
  }

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
            taskEditClicked={taskEditClicked}
            taskDeleteClicked={taskDeleteClicked}
            className="flex-1 min-w-[280px]"
          />
          <TaskColumn
            title="In Progress"
            count={tasks.filter(t => t.status === 'In Progress').length}
            tasks={tasks.filter(t => t.status === 'In Progress')}
            taskEditClicked={taskEditClicked}
            taskDeleteClicked={taskDeleteClicked}
            className="flex-1 min-w-[280px]"
          />
          <TaskColumn
            title="Completed"
            count={tasks.filter(t => t.status === 'Completed').length}
            tasks={tasks.filter(t => t.status === 'Completed')}
            taskEditClicked={taskEditClicked}
            taskDeleteClicked={taskDeleteClicked}
            className="flex-1 min-w-[280px]"
          />
        </div>
        
        <aside className="w-[260px] ml-6">
          <Calendar />
          <Events />
        </aside>
      </div>
      {showModal && !modalEdit && (
        <TaskAddModal onClose={() => setShowModal(false)} onSave={handleAddTask} />
      )}
      {showModal && modalEdit && (
        <TaskEditModal onClose = {() => setShowModal(false)} onSave={handleEditTask} initialData={editTask ? editTask : emptyTask} />
      )}
      <div className="flex justify-center mt-6">
        <button onClick={taskAddClicked} className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Add Task</button>
      </div>
    </main>
  );
};

export default TaskMaster;