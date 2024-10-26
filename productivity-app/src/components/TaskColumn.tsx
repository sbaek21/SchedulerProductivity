// import React from 'react';
// import TaskCard from './TaskCard';

// interface Task {
//   id: number;
//   status: string;
//   title: string;
//   description: string;
//   dueDate?: string;
//   dueTime?: string;
// }

// interface TaskColumnProps {
//   title: string;
//   count: number;
//   tasks: Task[];
//   onEditTask: (task: Task) => void;
// }

// const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks, onEditTask }) => {
//   // Set the color based on the column title
//   const getStatusColor = () => {
//     switch (title) {
//       case 'Not Started':
//         return '#5030E5';
//       case 'In Progress':
//         return '#FB9318';
//       case 'Completed':
//         return '#30E578';
//       default:
//         return '#5030E5';
//     }
//   };

//   return (
//     <div className="flex flex-col w-full md:w-1/4 lg:w-1/3 bg-neutral-100 rounded-xl min-h-[603px] px-3.5 pt-3.5">
//       <div className="flex justify-between items-center mb-2">
//         <div className="text-xs font-medium text-slate-900 flex items-center gap-1">
//           <span>{title}</span>
//           <span className="bg-gray-300 text-gray-600 rounded-full px-2">{count}</span>
//         </div>
//         <div className="text-xl font-bold text-gray-500 cursor-pointer">...</div>
//       </div>
//       <div className="h-1 w-full rounded-full mb-4" style={{ backgroundColor: getStatusColor() }}></div>

//       {/* Center the tasks vertically with spacing */}
//       <div className="flex-grow flex flex-col items-center space-y-2">
//         {tasks.map((task) => (
//           <TaskCard
//             key={task.id}
//             title={task.title}
//             description={task.description}
//             dueDate={task.dueDate || ''}
//             dueTime={task.dueTime || ''}
//             status={task.status as 'Not Started' | 'In Progress' | 'Completed'}
//             onEdit={() => onEditTask(task)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskColumn;



import React from 'react';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  status: string;
  title: string;
  description: string;
  dueDate?: string;
  dueTime?: string;
}

interface TaskColumnProps {
  title: string;
  count: number;
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  className?: string;
}


const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks, onEditTask, onDeleteTask }) => {
  const getStatusColor = () => {
    switch (title) {
      case 'Not Started':
        return '#5030E5';
      case 'In Progress':
        return '#FB9318';
      case 'Completed':
        return '#30E578';
      default:
        return '#5030E5';
    }
  };

  return (
    <div className="flex flex-col w-full md:w-1/4 lg:w-1/3 bg-neutral-100 rounded-xl min-h-[603px] px-3.5 pt-3.5">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs font-medium text-slate-900 flex items-center gap-1">
          <span>{title}</span>
          <span className="bg-gray-300 text-gray-600 rounded-full px-2">{count}</span>
        </div>
        <div className="text-xl font-bold text-gray-500 cursor-pointer">...</div>
      </div>
      <div className="h-1 w-full rounded-full mb-4" style={{ backgroundColor: getStatusColor() }}></div>

      <div className="flex-grow flex flex-col items-center space-y-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate || ''}
            dueTime={task.dueTime || ''}
            status={task.status as 'Not Started' | 'In Progress' | 'Completed'}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task.id)} // Pass onDelete function to TaskCard
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
