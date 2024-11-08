import React, { useState, useEffect } from 'react';
import { Task } from '../types';

interface TaskEditModalProps {
  onClose: () => void;
  onSave: (task: Task) => void;
  initialData: Task;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({ onClose, onSave, initialData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [status, setStatus] = useState('Not Started');


  useEffect(() => {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setDueDate(initialData.dueDate);
      setDueTime(initialData.dueTime);
      setStatus(initialData.status);
  },[]);

  const handleSave = () => {
    const task: Task = {
      id: initialData.id,
      title: title,
      description: description,
      dueDate: dueDate,
      dueTime: dueTime,
      status: status as 'Not Started' | 'In Progress' | 'Completed'
    }
    console.log(task.title, task.description);
    onSave(task);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Task</h2>

        <label className="block text-sm font-medium text-gray-700">Task Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as 'Not Started' | 'In Progress' | 'Completed')}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label className="block text-sm font-medium text-gray-700 mt-4">Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Due Time:</label>
        <input
          type="time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-indigo-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;