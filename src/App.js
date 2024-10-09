import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComponent from "./components/Drawer";
import { navItems } from "./assets/data/navItems";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [elevation, setElevation] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Handle scroll event to change AppBar elevation
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        setElevation(4); // Apply elevation when scrolled
      } else {
        setElevation(0); // Remove elevation when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={elevation}
        style={{ backgroundColor: "#035FAD" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={require("./assets/images/logo.png")}
              alt="logo"
              width={150}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff", fontSize: "14px", fontWeight: 400 }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <DrawerComponent
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </nav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: "100%",
            backgroundColor: "#F6F6F6",
            height: "100vh",
            overflow: "scroll",
          },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
