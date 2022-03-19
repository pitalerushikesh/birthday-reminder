import "./App.css";
import MuiAccordion from "./components/Accordion";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import data from "./data/data.json";

function App() {
  const queryData = data.queries;

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        width: "650px",
        p: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={4}
          justifyContent="center"
          alignItems="start"
          display="flex"
        >
          <Typography fontSize="1.5rem" fontFamily="Ubuntu">
            Questions And Answers About Login
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          {queryData.map((query, index) => {
            return (
              <MuiAccordion ques={query.ques} ans={query.ans} key={index} />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
