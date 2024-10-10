import React, { useState, useEffect } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Handle scroll event to change AppBar elevation
  useEffect(() => {
    const disableInspect = (e) => {
      // Disable right-click context menu
      if (e.type === "contextmenu") {
        e.preventDefault();
      }

      // Key combinations to block inspect tools
      if (
        e.key === "F12" || // F12 for all OS
        (e.ctrlKey &&
          e.shiftKey &&
          (e.key === "I" || e.key === "J" || e.key === "C")) || // Ctrl+Shift+I/J/C for Windows/Linux
        (e.metaKey &&
          e.altKey &&
          (e.key === "I" || e.key === "J" || e.key === "C")) || // Cmd+Opt+I/J/C for macOS
        (e.ctrlKey && e.key === "U") || // Ctrl+U for View Source in Windows/Linux
        (e.metaKey && e.key === "U") // Cmd+U for View Source in macOS
      ) {
        e.preventDefault();
      }
    };

    // Attach event listeners
    document.addEventListener("contextmenu", disableInspect);
    document.addEventListener("keydown", disableInspect);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableInspect);
      document.removeEventListener("keydown", disableInspect);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={4}
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
