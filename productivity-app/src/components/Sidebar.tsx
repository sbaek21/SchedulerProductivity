import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col items-start self-start mt-12 text-base font-medium whitespace-nowrap text-zinc-500 max-md:mt-10">
      <a href="#tasks" className="flex gap-3.5 items-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ff5f0b06bd30e059d375ff33ef68aec17cf7a9d3c799aa56ed6d8df6bb4703?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <span className="self-stretch my-auto">Tasks</span>
      </a>
      <a href="#timer" className="flex gap-3.5 items-center mt-7">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45d9fb697c5f606b6e905ed2e85fc61825acef41bcbdaa83484f1e5c3dfa0074?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <span className="self-stretch my-auto">Timer</span>
      </a>
      <a href="#calendar" className="flex gap-3.5 items-center self-stretch mt-7">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e4e50490fcb2f3cb0876bea378d1cfeeb39160e8a49afb3e5d1acdca10656e?placeholderIfAbsent=true&apiKey=4d7ed1808eb74d2f86f62f752e04c537" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <span className="self-stretch my-auto">Calendar</span>
      </a>
    </nav>
  );
};

export default Sidebar;
