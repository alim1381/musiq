import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./components/layout/Sidebar";

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
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }} />
        {props.children}
      </Box>
    </Box>
  );
}

export default MainLayout;
