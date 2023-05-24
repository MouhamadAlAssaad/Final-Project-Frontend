import React, { useState, useEffect ,useContext } from 'react';
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';
import '../calendar/calendar.scss';
import { parse, startOfWeek, getDay } from 'date-fns';
import '../calendar/calendar.css'




const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Calendars = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/appointment/`)
      .then(response => {
        const transformedEvents = response.data.response.map(event => ({
          title: `${event.first_name} ${event.last_name} `,
          start: new Date(event.date),
          end: new Date(new Date(event.date).getTime() + 30 * 60000),
          allDay: false,
        }));
        setEvents(transformedEvents);
      })
      .catch(error => console.error(error));
  },[]);
  const minTime = new Date();
  minTime.setHours(7, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(20, 0, 0);
  return (
    <div className='all_calendar'>
      <div className="calendar" style={{    backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px gray' }}>
      <h1 style={{  marginBottom: '15px' ,textAlign:'center' , marginTop:'-5px' ,color:'#447695'}}>Appointments</h1>

        <Calendar
        className='calendar_content'
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height:500 }}
          defaultView="day"
          min={minTime}
          max={maxTime}
        />
      </div>
    </div>
  );
};

export default Calendars;