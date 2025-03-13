const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white animate-fade-in-up hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-600">{event.date} - {event.location}</p>
      <p className="mt-2">{event.description}</p>
    </div>
  );
};

export default EventCard;