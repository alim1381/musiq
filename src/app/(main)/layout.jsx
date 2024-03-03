import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./components/layout/Sidebar";
import MusicPlayer from "@/app/(main)/components/music-player";
import PlayerButton from "./components/music-player/PlayerButton";

const drawerWidth = 240;

function MainLayout(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }} />
        <MusicPlayer />
        <PlayerButton />
        <br />
        {props.children}
      </Box>
    </Box>
  );
}

export default MainLayout;
