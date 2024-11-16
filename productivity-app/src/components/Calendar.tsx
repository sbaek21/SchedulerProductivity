// import React from 'react';

// const Calendar: React.FC = () => {
//   return (
//     <div className="flex flex-col self-start px-8 py-6 bg-white rounded-lg shadow border border-gray-200 max-w-[220px]">
//       <div className="flex gap-5 items-center text-xs font-medium">
//         <div className="py-1 border-b-2 border-solid border-indigo-600">Monthly</div>
//         <div>Daily</div>
//       </div>
//       <div className="mt-6 border-t border-stone-300" />
//       <div className="flex justify-between mt-6 text-sm font-bold text-center">
//         <span>October 2024</span>
//         <div className="flex gap-1">
//           <button>&lt;</button>
//           <button>&gt;</button>
//         </div>
//       </div>
//       <div className="mt-6 text-sm font-medium text-center">
//         <div className="grid grid-cols-7 gap-2">
//           {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
//             <span key={day}>{day}</span>
//           ))}
//         </div>
//         <div className="grid grid-cols-7 gap-2 mt-2">
//           {/* Replace with dynamic generation of dates */}
//           {Array.from({ length: 31 }, (_, i) => (
//             <span key={i} className={i + 1 === 23 ? 'bg-indigo-600 text-white rounded-full' : ''}>
//               {i + 1}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;



// 달력연결 됨, 근데 이벤트 형식임
// import { useEffect, useState } from "react";
// import { gapi } from "gapi-script";

// // Replace with your actual Client ID from Google Cloud Console
// const CLIENT_ID = "440495161601-euo30mmdprkp2b7hb0o7gt5e4ls0nbbb.apps.googleusercontent.com";
// const SCOPES = "https://www.googleapis.com/auth/calendar";

// // Define the type for Google Calendar events
// interface CalendarEvent {
//   summary: string;
//   start: { dateTime?: string; date?: string };
// }

// const GoogleCalendarIntegration = () => {
//   const [events, setEvents] = useState<CalendarEvent[]>([]); // State to store fetched events

//   useEffect(() => {
//     const initClient = () => {
//       gapi.client
//         .init({
//           clientId: CLIENT_ID,
//           scope: SCOPES,
//           ux_mode: "popup", // Ensures popup-based authentication
//         })
//         .then(() => {
//           console.log("Google API client initialized");
//         })
//         .catch((err: unknown) =>
//           console.error("Error initializing Google API client:", err)
//         );
//     };

//     // Load the Google API library and initialize the client
//     gapi.load("client:auth2", initClient);
//   }, []);

//   // Handle the Google Sign-In process
//   const handleAuthClick = async () => {
//     try {
//       const auth = gapi.auth2.getAuthInstance();
//       const user = await auth.signIn(); // Trigger Google Sign-In
//       const authResponse = user.getAuthResponse(); // Get the auth response (includes access token)

//       console.log("Auth Response:", authResponse);

//       // Use the access token directly to load calendar events
//       const accessToken = authResponse.access_token;
//       if (accessToken) {
//         console.log("Access Token:", accessToken);
//         loadCalendarEvents(accessToken); // Use the access token to fetch events
//       } else {
//         throw new Error("Access token not found");
//       }
//     } catch (err: unknown) {
//       console.error("Error during sign-in:", err);
//     }
//   };

//   // Fetch Google Calendar events
//   const loadCalendarEvents = async (accessToken: string) => {
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`, // Use the access token for authorization
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Events:", data.items); // Log the events
//       setEvents(data.items); // Store the events in state
//     } catch (err: unknown) {
//       console.error("Error fetching calendar events:", err);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleAuthClick}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#4285F4",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Connect Google Calendar
//       </button>

//       <div style={{ marginTop: "20px" }}>
//         <h3>Upcoming Events</h3>
//         {events.length > 0 ? (
//           <ul>
//             {events.map((event, index) => (
//               <li key={index}>
//                 <strong>{event.summary || "No Title"}</strong>
//                 <p>
//                   {event.start?.dateTime || event.start?.date || "No Date Available"}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GoogleCalendarIntegration;



// 연결함, 캘린더 연동 잘됨
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
