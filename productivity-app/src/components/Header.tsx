// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1371px] max-md:max-w-full">
//       <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
//         <div className="flex gap-4 justify-between items-center self-stretch my-auto text-xl font-semibold whitespace-nowrap text-slate-900 w-[190px]">
//           <div className="flex gap-2.5 items-center self-stretch my-auto">
//             <img loading="lazy" src="http://b.io/ext_58-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//             <div className="self-stretch my-auto rounded-none w-[114px]">TaskMaster</div>
//           </div>
//           <img loading="lazy" src="http://b.io/ext_59-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.3] w-[26px]" />
//         </div>
//         <form className="flex flex-col self-stretch my-auto text-sm rounded-none min-w-[240px] text-zinc-500 w-[417px]">
//           <div className="flex gap-4 px-4 py-3 rounded-md bg-neutral-100">
//             <img loading="lazy" src="http://b.io/ext_60-" alt="" className="object-contain shrink-0 aspect-square w-[22px]" />
//             <input
//               type="text"
//               placeholder="Search for anything..."
//               aria-label="Search for anything"
//               className="flex-auto my-auto w-[341px] bg-transparent border-none focus:outline-none"
//             />
//           </div>
//         </form>
//       </div>
//       <div className="flex gap-10 justify-between items-center my-auto text-base text-right text-slate-900">
//         <div className="flex gap-4 items-center self-stretch my-auto">
//           <img loading="lazy" src="http://b.io/ext_61-" alt="Sunwoo Baek" className="object-contain shrink-0 self-stretch my-auto w-9 rounded-full aspect-square" />
//           <div className="self-stretch my-auto">Sunwoo Baek</div>
//         </div>
//         <img loading="lazy" src="http://b.io/ext_62-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1371px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <div className="flex gap-4 justify-between items-center self-stretch my-auto text-xl font-semibold whitespace-nowrap text-slate-900 w-[190px]">
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <img loading="lazy" src="src/assets/logo.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <div className="self-stretch my-auto rounded-none w-[114px]">TaskMaster</div>
          </div>
          <img loading="lazy" src="src/assets/leftarrows.png" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.3] w-[26px]" />
        </div>
        <form className="flex flex-col self-stretch my-auto text-sm rounded-none min-w-[240px] text-zinc-500 w-[417px]">
          <div className="flex gap-4 px-4 py-3 rounded-md bg-neutral-100">
            <img loading="lazy" src="src/assets/search.png" alt="" className="object-contain shrink-0 aspect-square w-[22px]" />
            <input type="search" placeholder="Search for anything..." aria-label="Search for anything" className="flex-auto my-auto w-[341px] bg-transparent border-none focus:outline-none" />
          </div>
        </form>
      </div>
      <div className="flex gap-10 justify-between items-center my-auto text-base text-right text-slate-900">
        <div className="flex gap-4 items-center self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be23ea2b751a45ed7dea21be98e6d28c8e625b5714c5dc1b6c031f98bbaabcf4?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="Sunwoo Baek" className="object-contain shrink-0 self-stretch my-auto w-9 rounded-full aspect-square" />
          <div className="self-stretch my-auto">Sunwoo Baek</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89b46925c5e6e9617f67cd7cbd29c93db1b5e229d573b46da0b3be365831cc1c?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
      </div>
    </header>
  );
};

export default Header;
