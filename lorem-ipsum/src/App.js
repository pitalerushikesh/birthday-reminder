import "./App.css";
import {
  Button,
  Container,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { useState } from "react";
import { Box } from "@mui/system";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [paras, setParas] = useState("");
  const getLormIpsum = async (e) => {
    e.preventDefault();
    var url = `https://hipsum.co/api/?type=hipster-centric&paras=${paras}`;
    let options = {
      method: "GET",
      url: url,
      Headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    };
    try {
      await Axios(options).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box display="flex" alignItems="center" justifyContent="space-evenly">
        <FormLabel
          sx={{
            fontSize: "1.25rem",
            color: "#063251",
            letterSpacing: "0.1rem",
          }}
        >
          Paragraphs:
        </FormLabel>
        <TextField
          sx={{
            mx: 2,
          }}
          type="number"
          size="small"
          value={paras}
          autoComplete="off"
          onChange={(e) => setParas(e.target.value)}
        />
        <Button
          onClick={getLormIpsum}
          sx={{
            backgroundColor: "#49a6e9",
            color: "#063251",
            letterSpacing: "0.1rem",
            px: 2,
          }}
        >
          Generate
        </Button>
      </Box>

      {data &&
        data.map((item) => {
          return (
            <Box width="65%">
              <Typography
                textAlign="center"
                sx={{
                  fontSize: "1rem",
                  mt: 3,
                  color: "#617d98",
                }}
              >
                {item}
              </Typography>
            </Box>
          );
        })}
    </Container>
  );
}

export default App;
