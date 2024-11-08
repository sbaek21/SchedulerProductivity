import React from 'react';
import editTaskIcon from '../assets/icon_task.png';
import binIcon from '../assets/icon_bin.png';
import clockIcon from '../assets/clock.png';
import calendarIcon from '../assets/icon_calendar.png';
import timeIcon from '../assets/icon_time.png';
import {Task} from '../types'

interface TaskCardProps {
  key: number;
  task: Task;
  taskEditClicked: () => void;
  taskDeleteClicked: () => void; // Add onDelete prop
}



const TaskCard: React.FC<TaskCardProps> = ({ key, task, taskEditClicked, taskDeleteClicked }) => {
  const getStatusLabel = () => {
    switch (task.status) {
      case 'Not Started':
        return 'Not Started';
      case 'In Progress':
        return 'In Progress';
      case 'Completed':
        return 'Completed';
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'Not Started':
        return 'bg-indigo-600';
      case 'In Progress':
        return 'bg-orange-500';
      case 'Completed':
        return 'bg-green-500';
    }
  };

  

  return (
    <div className="flex flex-col items-center px-3 pt-2 pb-4 bg-white rounded-xl shadow max-w-[200px] w-full">
      <div className="flex justify-between w-full items-center">
        <div className={`flex items-center text-xs font-semibold text-white ${getStatusColor()} rounded-full px-2 py-0.5`}>
          <img src={clockIcon} alt="Clock Icon" className="w-3 h-3 mr-1" />
          {getStatusLabel()}
        </div>
        <div className="flex gap-2">
          <img src={editTaskIcon} alt="Edit Icon" className="w-4 h-4 cursor-pointer" onClick={taskEditClicked} />
          <img src={binIcon} alt="Delete Icon" className="w-4 h-4 cursor-pointer" onClick={taskDeleteClicked} /> 
        </div>
      </div>
      <div className="mt-3 w-full text-sm font-semibold">{task.title}</div>
      <div className="text-xs text-gray-500">{task.description}</div>
      <div className="flex justify-between w-full text-xs mt-2">
        <div className="flex items-center">
          <img src={calendarIcon} alt="Calendar Icon" className="w-4 h-4 mr-1" />
          {task.dueDate}
        </div>
        <div className="flex items-center">
          <img src={timeIcon} alt="Time Icon" className="w-4 h-4 mr-1" />
          {task.dueTime}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
