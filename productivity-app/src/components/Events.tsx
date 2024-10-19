import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="flex flex-col pl-3 mt-6 font-medium">
      <div className="self-start text-2xl text-black">Events</div>
      <div className="flex flex-col items-start mt-6 text-base leading-none text-gray-600">
        <div className="gap-2.5 max-w-full bg-white w-[312px]">Discussion Meeting</div>
        <div className="gap-2.5 mt-8 max-w-full w-[312px]">Meeting with Codable</div>
        <div className="flex gap-2.5 self-stretch mt-8 min-h-[23px]" />
      </div>
    </div>
  );
};

export default Events;