import './index.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskColumn from './components/TaskColumn';
import Calendar from './components/Calendar';
import Events from './components/Events';

const TaskMaster: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col px-6 pt-9 bg-white rounded-[36px] max-md:pl-5">
      <Header />
      <div className="flex gap-10 mt-3 ml-3.5 w-full max-md:flex-col">
        <Sidebar />
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <TaskColumn
              title="Not Started"
              count={2}
              tasks={[
                {
                  status: 'Not Started',
                  title: 'ECE 374 Assignment',
                  description: 'Backtracking and Dynamic Programming',
                  dueDate: '23 Mar 2024',
                  dueTime: '1:30 pm'
                },
                {
                  status: 'Not Started',
                  title: 'Stat Assignment',
                  description: 'HW5',
                  dueDate: '25 Mar 2024',
                  dueTime: '1:30 pm'
                },
                {
                  status: 'Not Started',
                  title: 'Brainstorming',
                  description: 'Brainstorming with team on storlly app',
                  dueDate: '26 Mar 2024',
                  dueTime: '12:45 pm'
                }
              ]}
            />
            <TaskColumn
              title="In Progress"
              count={3}
              tasks={[
                {
                  status: '58 Min Left',
                  title: 'Discussion Homework',
                  description: 'Discussion on re-branding of dermo Brand',
                  dueDate: '23 Mar 2024',
                  dueTime: '1:30 pm'
                },
                {
                  status: '12 Min Left',
                  title: 'Brainstorming',
                  description: 'Brainstorming with team on storlly app',
                  dueDate: '24 Mar 2024',
                  dueTime: '12:45 pm'
                },
                {
                  status: '2 Days Left',
                  title: 'UI/UX testing',
                  description: 'Perform user Testing on product',
                  dueDate: '25 Mar 2024',
                  dueTime: '10:00 am'
                }
              ]}
            />
            <TaskColumn
              title="Completed"
              count={2}
              tasks={[
                {
                  status: 'Completed',
                  title: 'Schedule Post',
                  description: 'schedule instagram post of dust & dawn'
                },
                {
                  status: 'Completed',
                  title: 'Holi Post',
                  description: 'Design Post for Holi'
                }
              ]}
            />
          </div>
          <button className="flex overflow-hidden flex-wrap gap-1.5 justify-center items-center py-1.5 pr-3.5 pl-3 mt-24 text-xs font-medium tracking-normal leading-loose bg-white rounded-md border-solid border-[0.5px] border-zinc-400 text-zinc-400 max-md:mt-10 max-md:mr-1.5">
            <img loading="lazy" src="http://b.io/ext_54-" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
            <span>Add Task</span>
          </button>
        </div>
        <aside className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-10">
            <div className="flex gap-6 items-start self-end mr-7 max-md:mr-2.5">
              <img loading="lazy" src="http://b.io/ext_55-" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              <img loading="lazy" src="http://b.io/ext_56-" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              <img loading="lazy" src="http://b.io/ext_57-" alt="" className="object-contain shrink-0 w-6 aspect-square" />
            </div>
            <Calendar />
            <Events />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default TaskMaster;
