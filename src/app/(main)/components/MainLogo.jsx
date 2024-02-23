import { Typography } from "@mui/material";
import EarbudsIcon from "@mui/icons-material/Earbuds";

import React from "react";
import { green } from "@mui/material/colors";

function MainLogo() {
  return (
    <Typography
      textAlign={"center"}
      variant="h6"
      component={"h1"}
      color={green[500]}
      fontWeight={800}
      padding={2}
    >
      <EarbudsIcon color={green[500]} sx={{ marginRight: "2px" }} />
      Musi-Q
    </Typography>
  );
}

export default MainLogo;
