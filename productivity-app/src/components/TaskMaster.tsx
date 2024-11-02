
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TaskColumn from './TaskColumn';
import Calendar from './Calendar';
import Events from './Events';
import TaskModal from './TaskModal';
import { Task } from '../types'; // Import Task type

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