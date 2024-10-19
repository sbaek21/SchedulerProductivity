import React from 'react';
import editTaskIcon from '../assets/icon_task.png'; // Adjust the path as necessary
import binIcon from '../assets/icon_bin.png';
import calendarIcon from '../assets/icon_calendar.png';
import timeIcon from '../assets/icon_time.png';

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, dueDate, dueTime, status }) => {
  const getStatusLabel = () => {
    switch (status) {
      case 'not-started':
        return 'Not Started';
      case 'in-progress':
        return '58 Min Left';
      case 'completed':
        return 'Completed';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'not-started':
        return 'bg-indigo-600';
      case 'in-progress':
        return 'bg-black';
      case 'completed':
        return 'bg-green-400';
    }
  };
  
  return (
    <div className="flex overflow-hidden flex-col items-center px-0.5 pt-1 pb-3.5 mt-4 w-full bg-white rounded-xl max-w-[204px] min-h-[115px] shadow-[0px_1px_13px_rgba(0,0,0,0.12)]">
      <div className="flex gap-10 items-center w-full max-w-[186px]">
        <div className={`flex gap-1 justify-center items-center self-stretch my-auto text-xs font-medium text-white ${getStatusColor()} rounded min-h-[15px] w-[61px]`}>
          <img loading="lazy" src={`http://b.io/ext_${status === 'not-started' ? '13' : status === 'in-progress' ? '29' : '39'}-`} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[7px]" />
          <div className="self-stretch my-auto w-[43px]">{getStatusLabel()}</div>
        </div>
        <div className="flex gap-1.5 items-center self-stretch my-auto">
          <img loading="lazy" src={editTaskIcon} alt="Task Edit Icon" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
          <img loading="lazy" src={binIcon} alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.92]" />
        </div>
      </div>
      <div className="flex flex-col justify-between mt-2.5 max-w-full h-[21px] w-[178px]">
        <div className="flex flex-col w-full">
          <div className="text-xs font-semibold text-slate-900">{title}</div>
          <div className="text-xs text-zinc-500">{description}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-3.5 py-2.5 mt-2.5 w-full rounded-xl bg-neutral-100 max-w-[200px]">
        <div className="flex gap-10 justify-between items-start w-full max-w-[170px]">
          <div className="flex gap-1 items-center">
            <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
              <img loading="lazy" src={calendarIcon} alt="Calendar Icon" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
            </div>
            <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{dueDate}</div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
              <img loading="lazy" src={timeIcon} alt="Time Icon" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
            </div>
            <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{dueTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;