"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DropDown() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography component="h3" variant="subtitle2">
            What does this app do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            color={"text.secondary"}
          >
            This is a music streaming website where you can listen to different
            music from different artists and also make your favorite music in
            the form of a playlist if you
            <Link
              href={`/auth/login?backUrl=${pathname}`}
              className=" text-[#1976d2] ml-1"
            >
              log in
            </Link>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h3" variant="subtitle2">
            What tool is this website made of?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            color={"text.secondary"}
          >
            This website is developed on the client side using nextJs, mui,
            apollo/client and on the server side using Express, MongoDB,
            GraphQL.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography component="h3" variant="subtitle2">
            Website features
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: "100%", md: "70%" } }}
          >
            The possibility of registering and logging in (authentication),
            seeing the list of artists, albums and songs, the page related to
            each of these items and creating a playlist and viewing the playlist
            with people's preferences and...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default DropDown;
