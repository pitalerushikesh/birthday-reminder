import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid, Button } from "@mui/material";
import TabContent from "./TabContent";
import data from "../data/experiences.json";
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
  const items = data.tabs;
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
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
            {items.map((item) => {
              return (
                <Tab
                  label={`${item.name}`}
                  sx={{
                    fontSize: "1.2rem",
                    color: "#000",
                    "&:focus": {
                      color: "#2caeba",
                    },
                  }}
                />
              );
            })}
          </Tabs>
        </Grid>
        <Grid item lg={10} sm={12} xs={12}>
          {items.map((item, index) => {
            return (
              <TabPanel value={value} index={index}>
                <TabContent
                  title={item.title}
                  name={item.name}
                  active={item.active}
                  desc1={item.desc1}
                  desc2={item.desc2}
                  desc3={item.desc3}
                  desc4={item.desc4}
                />
              </TabPanel>
            );
          })}
        </Grid>
      </Grid>
      <Box justifyContent="center" alignItems="center" display="flex" pt={2}>
        <Button
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "#2caeba",
            py: 0.5,
            px: 6,
            color: "#bff8fd",
            "&:hover": {
              backgroundColor: "#88ebf2",
            },
          }}
        >
          More Info
        </Button>
      </Box>
    </Box>
  );
};

export default VerticalTabs;
