import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Fade, Grow } from "@mui/material";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    
      <Fade in={true} timeout={1000}>
        <h1 className="text-4xl font-bold text-center mb-4">
          Connecting People Across Faiths & Interests
        </h1>
      </Fade>

 
      <Grow in={true} timeout={1500}>
        <p className="text-lg text-center mb-6">
          Join a global community that bridges faiths and interests through
          events, support, and meaningful connections.
        </p>
      </Grow>

      <Fade in={true} timeout={2000}>
        <Link to="/events">
          <Button variant="contained" color="primary">
            Explore Events
          </Button>
        </Link>
      </Fade>
    </div>
  );
};

export default Home;