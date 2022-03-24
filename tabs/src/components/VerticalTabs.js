import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import TabContent from "./TabContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: 224,
      }}
    >
      <Grid container>
        <Grid item lg={2} sm={12} xs={12}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            //sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Grid>
        <Grid item lg={10} sm={12} xs={12}>
          <TabPanel value={value} index={0}>
            <TabContent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerticalTabs;
