// import { getEventListeners } from "nodemailer/lib/xoauth2";
// import { createContext, useState, useEffect, useCallback, useMemo } from "react";
// import { getEvents } from "../data/api";

// const EventsContext = createContext();

// export const EventsProvider = ({ children }) => {

//     const [events, setEvents] = useState({});
//     const sampleEvents = {
//     upcoming: [ {             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0},{             "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [3,5,7,52,5],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0}],
//     ongoing: [ {          
//     "_id": "6210890da0ff0c38e0ed5e94",
//     "eventname": "Juhu Beach Cleanup",
//     "description": "Cleaning this dirty af beach",
//     "activity": "Beach cleanup",
//     "eventhost": [
//         "620fe9188d14fdbdd0b512f9"
//     ],
//     "membersjoined": [2,4,5,6,7,8],
//     "status": "scheduled",
//     "createdAt": "2022-02-19T06:07:09.117Z",
//     "updatedAt": "2022-02-19T06:07:09.117Z",
//     "__v": 0 }],
//   } 

//   const setEventsFn = async () => {
//     const response = await getEvents();
//     setEvents(response);
// }


//   return <EventsContext.Provider value={{events, sampleEvents, setEventsFn}}>{children}</EventsContext.Provider>;
// };
// export default EventsContext;
