import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AppMenuBar from "./components/AppMenuBar";
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import menu from "./data/MenuData.js";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(menu);

  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <>
      <Header />
      <AppMenuBar categories={categories} filterItems={filterItems} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {items.map((item) => {
            return (
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <MenuItems
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
