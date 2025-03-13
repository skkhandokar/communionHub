import { useState } from "react";
import { Button, TextField, MenuItem, Fade, Grow } from "@mui/material"; 

const categories = ["Religious", "Social", "Charity"];

const EventForm = ({ onAdd }) => {
  const [event, setEvent] = useState({ title: "", date: "", location: "", category: "", description: "" });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.title && event.date && event.category) {
      onAdd(event);
      setEvent({ title: "", date: "", location: "", category: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg">
      {/* Fade Animation for Title Field */}
      <Fade in={true} timeout={500}>
        <TextField fullWidth label="Title" name="title" value={event.title} onChange={handleChange} required />
      </Fade>

   
      <Fade in={true} timeout={700}>
        <TextField fullWidth type="date" name="date" value={event.date} onChange={handleChange} required />
      </Fade>


      <Fade in={true} timeout={900}>
        <TextField fullWidth label="Location" name="location" value={event.location} onChange={handleChange} />
      </Fade>

      <Grow in={true} timeout={1100}>
        <TextField fullWidth select label="Category" name="category" value={event.category} onChange={handleChange} required>
          {categories.map((cat) => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
        </TextField>
      </Grow>

      <Fade in={true} timeout={1300}>
        <TextField fullWidth multiline rows={3} label="Description" name="description" value={event.description} onChange={handleChange} />
      </Fade>

   
      <Grow in={true} timeout={1500}>
        <Button type="submit" variant="contained" color="primary">Add Event</Button>
      </Grow>
    </form>
  );
};

export default EventForm;