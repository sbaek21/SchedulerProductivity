// import React from 'react';

// interface Task {
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
// }

// const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks }) => {
//   return (
//     <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
//       <div className="flex overflow-hidden flex-col px-3.5 pt-3.5 mx-auto w-full rounded-xl bg-neutral-100 min-h-[603px] max-md:pb-24 max-md:mt-6">
//         <div className="flex gap-10 justify-between items-center w-full max-w-[223px]">
//           <div className="flex gap-1.5 items-start self-stretch my-auto font-medium">
//             <div className="px-3 text-xs text-slate-900 w-[69px]">{title}</div>
//             <div className="flex flex-col text-xs whitespace-nowrap rounded-lg text-zinc-500 w-[13px]">
//               <div className="px-px rounded-lg bg-neutral-200 h-[13px] w-[13px]">{count}</div>
//             </div>
//           </div>
//           <div className="self-stretch my-auto text-base font-extrabold tracking-tighter text-slate-900 w-[26px]">. . .</div>
//         </div>
//         <img loading="lazy" src="http://b.io/ext_66-" alt="" className="object-contain mt-3.5 max-w-full aspect-[100] w-[210px]" />
//         {tasks.map((task, index) => (
//           <div key={index} className="flex overflow-hidden flex-col items-center px-0.5 py-1 mt-3.5 max-w-full bg-white rounded-xl min-h-[115px] shadow-[0px_1px_13px_rgba(0,0,0,0.12)] w-[204px]">
//             <div className="flex flex-col justify-between py-1 min-h-[57px]">
//               <div className="flex gap-10 items-center">
//                 <div className={`flex gap-1 justify-center items-center self-stretch my-auto text-xs font-medium text-white ${task.status === 'Completed' ? 'bg-green-400' : 'bg-indigo-600'} rounded min-h-[15px] w-[61px]`}>
//                   <img loading="lazy" src="http://b.io/ext_67-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.87] w-[7px]" />
//                   <div className="self-stretch my-auto w-[43px]">{task.status}</div>
//                 </div>
//                 <div className="flex gap-1.5 items-center self-stretch my-auto">
//                   <img loading="lazy" src="http://b.io/ext_68-" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
//                   <img loading="lazy" src="http://b.io/ext_69-" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
//                 </div>
//               </div>
//               <div className="flex flex-col mt-3 max-w-full w-[175px]">
//                 <div className="text-xs font-semibold text-slate-900">{task.title}</div>
//                 <div className="text-xs text-zinc-500">{task.description}</div>
//               </div>
//             </div>
//             {task.dueDate && task.dueTime && (
//               <div className="flex overflow-hidden flex-col justify-center px-3.5 py-2.5 mt-2.5 w-full rounded-xl bg-neutral-100 max-w-[200px]">
//                 <div className="flex gap-10 justify-between items-start w-full max-w-[170px]">
//                   <div className="flex gap-1 items-center">
//                     <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
//                       <img loading="lazy" src="http://b.io/ext_70-" alt="" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
//                     </div>
//                     <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{task.dueDate}</div>
//                   </div>
//                   <div className="flex gap-1 items-center">
//                     <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
//                       <img loading="lazy" src="http://b.io/ext_71-" alt="" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
//                     </div>
//                     <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{task.dueTime}</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskColumn;

import React from 'react';

interface Task {
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
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks }) => {
  return (
    <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-3.5 pt-3.5 mx-auto w-full rounded-xl bg-neutral-100 min-h-[603px] max-md:pb-24 max-md:mt-6">
        <div className="flex gap-10 justify-between items-center w-full max-w-[223px]">
          <div className="flex gap-1.5 items-start self-stretch my-auto font-medium">
            {/* 맨위에 Status 들어가는 라인 */}
            <div className="px-3 text-xs text-slate-900 w-[69px]">{title}</div>
            <div className="flex flex-col text-xs whitespace-nowrap rounded-lg text-zinc-500 w-[13px]">
              {/* 이 status및에 task가 몇개인지 count로 받아서 display하는 라인 */}
              <div className="px-px rounded-lg bg-neutral-200 h-[13px] w-[13px]">{count}</div>
            </div>
          </div>
          <div className="self-stretch my-auto text-base font-extrabold tracking-tighter text-slate-900 w-[26px]">. . .</div>
        </div>
        {/* 그냥 주황색 바... */}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c35f7a179634f267bed2ba21d24b86298c311c37b63682659e741886959afdd?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain mt-3.5 max-w-full aspect-[100] w-[210px]" />
        {/*잘 이해 안됌... Task[].map function이 뭔지 좀 찾아봐야할듯  */}
        {tasks.map((task, index) => (
          <div key={index} className="flex overflow-hidden flex-col items-center px-0.5 py-1 mt-3.5 max-w-full bg-white rounded-xl min-h-[115px] shadow-[0px_1px_13px_rgba(0,0,0,0.12)] w-[204px]">
            <div className="flex flex-col justify-between py-1 min-h-[57px]">
              <div className="flex gap-10 items-center">
                {/* 여기에서 task의 status가 뭔지 체크 하는데 여걸로 잘하면 쉽게 코드 짤 수 있을수도...? */}
                <div className={`flex gap-1 justify-center items-center self-stretch my-auto text-xs font-medium text-white ${task.status === 'Completed' ? 'bg-green-400' : 'bg-indigo-600'} rounded min-h-[15px] w-[99px]`}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2985fa226d0efcfcf74517ec7543cf4f7d07a875bf206308cec4a96e2765c67b?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.87] w-[7px]" />
                  {/* 각 task위에 status display 해주는 라인 */}
                  <div className="self-stretch my-auto w-[43px]">{task.status}</div>
                </div>
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  {/* 편집이랑 삭제 아이콘. 버튼형식으로 만들면 나중에 사용 가능할듯 */}
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f30a132fc24f8b35641e725d627340c77ae58af5c23ed98783bdd0671a2c852c?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a2868b6dd6e0264e9083d5d28bb91a1b945e35242470e54c646af0ec8f1d0e?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                </div>
              </div>
              <div className="flex flex-col mt-3 max-w-full w-[175px]">
                {/* task title이랑 description */}
                <div className="text-xs font-semibold text-slate-900">{task.title}</div>
                <div className="text-xs text-zinc-500">{task.description}</div>
              </div>
            </div>
            {/* 위에거랑 비슷함. 이해 안되는건 tasks.map((task, index) => html code {task.duedate && task.dueTime && htmlcode})라는 이상한 syntax가 어떻게 작용하는지 이해안됌.... */}
            {task.dueDate && task.dueTime && (
              <div className="flex overflow-hidden flex-col justify-center px-3.5 py-2.5 mt-2.5 w-full rounded-xl bg-neutral-100 max-w-[200px]">
                <div className="flex gap-10 justify-between items-start w-full max-w-[170px]">
                  <div className="flex gap-1 items-center">
                    <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91f3dae3-f367-4372-9b05-9845447cf52a?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
                    </div>
                    <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{task.dueDate}</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="flex gap-1.5 justify-center items-center self-stretch my-auto min-h-[23px] w-[23px]">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0de72b0-3a04-4b1b-8e6d-49640282e291?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain self-stretch my-auto bg-white rounded-full aspect-square h-[23px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] w-[23px]" />
                    </div>
                    <div className="self-stretch my-auto text-xs font-medium text-zinc-700">{task.dueTime}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;