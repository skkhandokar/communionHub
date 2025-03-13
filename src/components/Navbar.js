import { Link } from "react-router-dom";
import { Button, Typography, Fade, Grow, Slide } from "@mui/material"; 
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-4 shadow-lg overflow-hidden flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center space-y-4 md:space-y-0">
       
        <Fade in={true} timeout={1000}>
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Communion Logo"
              className="w-10 h-10"
            />
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": { color: "#ddd" },
                textDecoration: "none",
              }}
            >
              Communion App
            </Typography>
          </div>
        </Fade>

        <Slide in={true} direction="left" timeout={1500}>
          <div className="flex space-x-4">
            <Button
              component={Link}
              to="/"
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#ddd" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/events"
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#ddd" },
              }}
            >
              Events
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#ddd" },
              }}
            >
              About
            </Button>
          </div>
        </Slide>
      </div>
    </nav>
  );
};

export default Navbar;