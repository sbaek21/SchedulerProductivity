// import React from 'react';

// const Calendar: React.FC = () => {
//   return (
//     <div className="flex flex-col self-start px-11 pt-4 pb-11 mt-5 bg-white rounded-lg border border-gray-200 border-solid shadow-[0px_2px_19px_rgba(170,170,170,0.03)] max-md:px-5">
//       <div className="flex gap-9 items-center self-start text-xs font-medium tracking-normal leading-loose text-black whitespace-nowrap">
//         <div className="gap-2.5 self-stretch py-2 my-auto border-b-2 border-solid border-b-indigo-600">Monthly</div>
//         <div className="self-stretch my-auto">Daily</div>
//       </div>
//       <div className="mt-6 w-60 max-w-full border border-solid border-stone-300 min-h-[3px]" />
//       <div className="flex gap-5 justify-between mt-6 w-full max-w-[241px]">
//         <div className="text-sm font-bold text-center text-zinc-800">October 2024</div>
//         <div className="flex gap-2.5 items-center my-auto">
//           <img loading="lazy" src="http://b.io/ext_72-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[1.183px] stroke-zinc-800 w-[7px]" />
//           <img loading="lazy" src="http://b.io/ext_73-" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[1.183px] stroke-zinc-800 w-[7px]" />
//         </div>
//       </div>
//       <div className="flex overflow-hidden flex-col items-center mt-6 max-w-full text-sm font-medium text-center whitespace-nowrap w-[245px]">
//         <div className="flex flex-col w-full max-w-[245px]">
//           <div className="flex gap-5 text-zinc-800">
//             <div className="grow">Mo</div>
//             <div>Tu</div>
//             <div>We</div>
//             <div>Th</div>
//             <div>Fr</div>
//             <div>Sa</div>
//             <div>Su</div>
//           </div>
//           <div className="flex gap-7 self-end mt-5 text-neutral-300 max-md:mr-1">
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//           </div>
//           <div className="flex gap-5 justify-between mt-5 text-neutral-300 max-md:ml-1.5">
//             <div>4</div>
//             <div>5</div>
//             <div>6</div>
//             <div>7</div>
//             <div>8</div>
//             <div>9</div>
//             <div>10</div>
//           </div>
//           <div className="flex gap-5 mt-5 text-neutral-300 max-md:ml-1">
//             <div className="grow">11</div>
//             <div>12</div>
//             <div>13</div>
//             <div>14</div>
//             <div>15</div>
//             <div>16</div>
//             <div>17</div>
//           </div>
//           <div className="flex gap-5 mt-3 max-md:ml-1">
//             <div className="flex gap-6 my-auto text-neutral-300">
//               <div>18</div>
//               <div>19</div>
//               <div>20</div>
//               <div>21</div>
//             </div>
//             <div className="flex gap-2 items-center">
//               <div className="grow self-stretch my-auto text-neutral-300">22</div>
//               <div className="self-stretch px-2 text-white bg-indigo-600 rounded-full fill-indigo-600 h-[33px] w-[33px]">23</div>
//               <div className="self-stretch my-auto text-stone-500">24</div>
//             </div>
//           </div>
//           <div className="flex gap-5 mt-3 text-stone-500 max-md:mr-1">
//             <div className="grow">25</div>
//             <div>26</div>
//             <div>27</div>
//             <div>28</div>
//             <div>29</div>
//             <div>30</div>
//             <div>31</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import calendar styles

// Replace with your actual Client ID from Google Cloud Console
const CLIENT_ID = "440495161601-euo30mmdprkp2b7hb0o7gt5e4ls0nbbb.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/calendar";

// Define the type for Google Calendar events
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

const localizer = momentLocalizer(moment); // Localizer for react-big-calendar

const GoogleCalendarIntegration = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]); // State to store calendar events
  const [error, setError] = useState<string | null>(null); // State to store error messages

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: SCOPES,
          ux_mode: "popup", // Ensures popup-based authentication
        })
        .then(() => {
          console.log("Google API client initialized");
        })
        .catch((err: unknown) => {
          if (err instanceof Error) {
            console.error("Error initializing Google API client:", err.message);
          } else {
            console.error("Unknown error initializing Google API client:", err);
          }
        });
    };

    // Load the Google API library and initialize the client
    gapi.load("client:auth2", initClient);
  }, []);

  // Handle the Google Sign-In process
  const handleAuthClick = async () => {
    try {
      const auth = gapi.auth2.getAuthInstance();
      const user = await auth.signIn();
      const accessToken = user.getAuthResponse().access_token;

      if (accessToken) {
        console.log("Access Token:", accessToken);
        loadCalendarEvents(accessToken);
        setError(null); // Clear any previous errors
      } else {
        throw new Error("Access token not found");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error during sign-in:", err.message);
      } else {
        console.error("Unknown error during sign-in:", err);
      }
      setError("Failed to authenticate with Google.");
    }
  };

  // Fetch Google Calendar events
  const loadCalendarEvents = async (accessToken: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Events:", data.items);

      // Transform events into a format suitable for react-big-calendar
      const formattedEvents = data.items
        .filter((event: any) => event.start && event.end) // Ensure events have start and end times
        .map((event: any) => ({
          title: event.summary || "No Title",
          start: moment(event.start.dateTime || event.start.date).toDate(),
          end: moment(event.end.dateTime || event.end.date).toDate(),
        }));

      setEvents(formattedEvents);
      setError(null); // Clear any previous errors
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching calendar events:", err.message);
      } else {
        console.error("Unknown error fetching calendar events:", err);
      }
      setError("Failed to load calendar events. Please try again.");
    }
  };

  return (
    <div>
      <button
        onClick={handleAuthClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Connect Google Calendar
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Render the calendar using react-big-calendar */}
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default GoogleCalendarIntegration;