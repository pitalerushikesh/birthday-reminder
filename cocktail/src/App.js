import { Container, Grid } from "@mui/material";
import "./App.css";
import { useGlobalContext } from "./components/context";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import SearchCard from "./components/SearchCard";

function App() {
  const { cocktails } = useGlobalContext();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchCard />
      <Header />
      <Grid container>
        {cocktails.map((cocktail) => {
          return (
            <Grid item xs={4}>
              <ItemCard key={cocktail.id} {...cocktail} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
