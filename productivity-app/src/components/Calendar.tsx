import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div className="flex flex-col self-start px-11 pt-4 pb-11 mt-5 bg-white rounded-lg border border-gray-200 border-solid shadow-[0px_2px_19px_rgba(170,170,170,0.03)] max-md:px-5">
      <div className="flex gap-9 items-center self-start text-xs font-medium tracking-normal leading-loose text-black whitespace-nowrap">
        <div className="gap-2.5 self-stretch py-2 my-auto border-b-2 border-solid border-b-indigo-600">Monthly</div>
        <div className="self-stretch my-auto">Daily</div>
      </div>
      <div className="mt-6 w-60 max-w-full border border-solid border-stone-300 min-h-[3px]" />
      <div className="flex gap-5 justify-between mt-6 w-full max-w-[241px]">
        <div className="text-sm font-bold text-center text-zinc-800">October 2024</div>
        <div className="flex gap-2.5 items-center my-auto">
          <img loading="lazy" src="http://b.io/ext_72-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[1.183px] stroke-zinc-800 w-[7px]" />
          <img loading="lazy" src="http://b.io/ext_73-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[1.183px] stroke-zinc-800 w-[7px]" />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-center mt-6 max-w-full text-sm font-medium text-center whitespace-nowrap w-[245px]">
        <div className="flex flex-col w-full max-w-[245px]">
          <div className="flex gap-5 text-zinc-800">
            <div className="grow">Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
          <div className="flex gap-7 self-end mt-5 text-neutral-300 max-md:mr-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="flex gap-5 justify-between mt-5 text-neutral-300 max-md:ml-1.5">
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>
          <div className="flex gap-5 mt-5 text-neutral-300 max-md:ml-1">
            <div className="grow">11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
          </div>
          <div className="flex gap-5 mt-3 max-md:ml-1">
            <div className="flex gap-6 my-auto text-neutral-300">
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="grow self-stretch my-auto text-neutral-300">22</div>
              <div className="self-stretch px-2 text-white bg-indigo-600 rounded-full fill-indigo-600 h-[33px] w-[33px]">23</div>
              <div className="self-stretch my-auto text-stone-500">24</div>
            </div>
          </div>
          <div className="flex gap-5 mt-3 text-stone-500 max-md:mr-1">
            <div className="grow">25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;