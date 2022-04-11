import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const Label = ({ name, title }) => {
  return (
    <Box display="flex" alignItems="center">
      <Chip label={title} color="success" sx={{ margin: 1 }} />
      <Typography>{name}</Typography>
    </Box>
  );
};

const DetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
        }}
      >
        <Loader />
      </Container>
    );
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <Container>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            my: 4,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#476a2e",
              color: "#ffffff",
              px: 2,
              py: 0.5,
              "&:hover": {
                backgroundColor: "#d4e6a5",
                color: "#476a2e",
              },
            }}
            onClick={() => navigate("/")}
          >
            Back Home
          </Button>
        </Box>
        <Box
          sx={{
            my: 4,
          }}
        >
          <Typography
            textAlign="center"
            fontSize="2.5rem"
            fontWeight="bold"
            fontFamily="Ubuntu"
          >
            {name}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box component="img" src={image} width="80%" />
          </Grid>
          <Grid item xs={6}>
            <Label name={name} title="Name :" />
            <Label name={category} title="Category :" />
            <Label name={info} title="info :" />
            <Label name={glass} title="Glass :" />
            <Label name={instructions} title="Instructions :" />
            <Box display="flex" alignItems="center">
              <Chip label="Ingredients" color="success" sx={{ margin: 1 }} />
              <Box display="flex">
                {ingredients.map((ingredient, index) => {
                  return (
                    <Typography key={index}>{ingredient},&nbsp;</Typography>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
};
export default DetailPage;
