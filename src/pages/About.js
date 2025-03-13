import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import teamMembers from "../data/TeamMembers"; 

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="text-center animate-fade-in">
        <Typography variant="h2" className="font-bold text-4xl mb-4">
          About Communion App
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 text-lg mb-8">
          Connecting people of all faiths through events, support, and meaningful connections.
        </Typography>
        <Link to="/events">
          <Button variant="contained" color="primary" className="hover:scale-105 transition-transform duration-300">
            Explore Events
          </Button>
        </Link>
      </div>

  
      <div className="mt-16 max-w-3xl mx-auto animate-fade-in-up">
        <Typography variant="h4" className="font-bold text-2xl mb-4">
          Our Mission
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          At Communion App, we believe in fostering unity and understanding among people of all faiths and backgrounds. Our mission is to create a platform where individuals can come together to share experiences, support one another, and build meaningful connections through events and community initiatives.
        </Typography>
      </div>

     
      <div className="mt-16 animate-fade-in-up">
        <Typography variant="h4" className="font-bold text-2xl text-center mb-8">
          Meet Our Team
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
             
              <Typography variant="h6" className="font-semibold">
                {member.name}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                {member.role}
              </Typography>
              <Typography variant="body1" className="mt-2 text-gray-600">
                {member.bio}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center animate-fade-in">
        <Typography variant="h4" className="font-bold text-2xl mb-4">
          Join Our Community
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          Be a part of something bigger. Connect with people, share your faith, and make a difference.
        </Typography>
        <Link to="/events">
          <Button variant="contained" color="primary" className="hover:scale-105 transition-transform duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;