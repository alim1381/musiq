"use client";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MainLogo from "./MainLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import AlbumIcon from "@mui/icons-material/Album";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import useAuthClient from "@/hooks/useAuthClient";

function AppNavBar({
  container,
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  drawerWidth,
}) {
  const pathname = usePathname();
  const { userData } = useAuthClient();

  const drawerIcons = {
    "New Tracks": <AudiotrackIcon />,
    Artists: <PersonIcon />,
    Alboms: <AlbumIcon />,
    "About Us": <InfoIcon />,
    search: <SearchIcon />,
    "New Playlist": <AddIcon />,
  };
  const drawer = (
    <div>
      <MainLogo />
      <Divider />
      <List>
        {[
          { name: "search", path: "search" },
          { name: "New Tracks", path: "tracks" },
          { name: "Artists", path: "artists" },
          { name: "Alboms", path: "albums" },
          { name: "Playlists", path: "playlists" },
          { name: "About Us", path: "about-us" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={`/${item.path}`} passHref className=" w-full">
              <ListItemButton>
                <ListItemIcon>
                  {drawerIcons[item.name] || <ArrowForwardIosIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      {!userData && (
        <div className=" w-full flex justify-center mt-4">
          <Link
            href={`/auth/login?backurl=${pathname}`}
            className=" bg-white text-black w-3/4 text-center p-2 rounded-lg font-bold"
          >
            Login
          </Link>
        </div>
      )}
      {userData && (
        <List>
          {[{ name: "New Playlist", path: "new-playlist" }].map(
            (item, index) => (
              <ListItem key={index} disablePadding>
                <Link href={`/${item.path}`} passHref className=" w-full">
                  <ListItemButton>
                    <ListItemIcon>
                      {drawerIcons[item.name] || <ArrowForwardIosIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          )}
        </List>
      )}
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
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
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default AppNavBar;
