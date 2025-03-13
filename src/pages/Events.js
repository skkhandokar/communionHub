import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const Events = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-20", location: "Sylhet", category: "Charity", description: "A charity event for underprivileged kids." },
    { title: "Interfaith Meetup", date: "2025-04-10", location: "Dhaka", category: "Religious", description: "A discussion on faith and unity." }
  ]);
  
  const [filter, setFilter] = useState("All");

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      <div className="flex space-x-4 mb-6">
        <select className="border p-2 rounded" onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Religious</option>
          <option>Social</option>
          <option>Charity</option>
        </select>
      </div>

      <EventForm onAdd={addEvent} />

      <div className="mt-6 space-y-4">
        {filteredEvents.length ? (
          filteredEvents.map((event, index) => <EventCard key={index} event={event} />)
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
