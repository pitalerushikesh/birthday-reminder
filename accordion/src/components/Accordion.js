import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MuiAccordion = ({ ques, ans }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        elevation={2}
        sx={{
          mb: 2,
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <AiOutlineMinus color="#b4345c" />
            ) : (
              <AiOutlinePlus color="#b4345c" />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="bold" fontFamily="Roboto" fontSize="0.8rem">
            {ques}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="0.8rem">{ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
