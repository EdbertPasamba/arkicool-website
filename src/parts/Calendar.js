import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Optional: Default styles for the calendar
import { v4 as uuidv4 } from 'uuid'; // You can use this for generating unique event IDs

const App = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date()); // State to store the selected date

  // Function to add events to the calendar
  const handleEventAdd = (event) => {
    setEvents([...events, { ...event, id: uuidv4() }]); // Adds a new event with a unique id
  };

  // Function to update an existing event
  const handleEventUpdate = (updatedEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  // Function to delete an event
  const handleEventDelete = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  // Function to handle the selected date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Optional: A simple render for the events that belong to the selected date
  const renderEventsForDate = (selectedDate) => {
    return events.filter((event) => event.date === selectedDate.toISOString().split('T')[0]); // Filter events for the selected date
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-5 text-theme-blue">Event Calendar</h1>

      <div className="flex flex-col items-center">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="border border-gray-300 rounded-md shadow-lg"
        />
        
        <div className="mt-5">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => handleEventAdd({ date: date.toISOString().split('T')[0], title: 'New Event' })}
          >
            Add Event
          </button>
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-semibold">Events for {date.toDateString()}:</h2>
          <ul className="mt-3 space-y-2">
            {renderEventsForDate(date).map((event) => (
              <li key={event.id} className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                <span>{event.title}</span>
                <div className="space-x-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleEventUpdate({ ...event, title: 'Updated Event' })}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleEventDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
