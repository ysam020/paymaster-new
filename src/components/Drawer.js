import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { navItems } from "../assets/data/navItems";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function DrawerComponent(props) {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="temporary"
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
        MUI
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => navigate(item.url)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
