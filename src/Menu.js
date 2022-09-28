import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <aside>
        <Drawer
          variant="permanent"
          open
          style={{
            [`& .MuiDrawerPaper`]: {
              background: "rgb(235, 235, 235)",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawerPaper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box style={{ background: "rgb(235, 235, 235)" }}>
            <List>
              {[
                { path: "/creditsafeHome", Icon: InboxIcon, label: "Home" },
                { path: "/monitoring", Icon: MailIcon, label: "Monitoring" },
                { path: "/protect", Icon: InboxIcon, label: "Protect" },
                { path: "/creditRisk", Icon: MailIcon, label: "Credit & Risk" },
              ].map((menuItem, index) => (
                <ListItem key={menuItem.label} disablePadding>
                  <ListItemButton onClick={() => navigate(menuItem.path)}>
                    <ListItemIcon>
                      <menuItem.Icon />
                    </ListItemIcon>
                    <ListItemText primary={menuItem.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </aside>
    </>
  );
};

export default SideMenu;
