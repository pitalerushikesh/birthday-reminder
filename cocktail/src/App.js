import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import { useGlobalContext } from "./components/context";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Loader from "./components/Loader";
import SearchCard from "./components/SearchCard";

function App() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
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

        <Loader />
      </Container>
    );
  }
  if (cocktails.length === 0) {
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
        <Typography
          textAlign="center"
          fontSize="2.5rem"
          fontWeight="bold"
          fontFamily="Ubuntu"
        >
          No Cocktails Matched Your Search Criteria
        </Typography>
      </Container>
    );
  }

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
            <Grid key={cocktail.id} item xs={4}>
              <ItemCard {...cocktail} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
