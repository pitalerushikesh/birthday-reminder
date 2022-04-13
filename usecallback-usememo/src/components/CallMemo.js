import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useCallback, useMemo } from "react";
import { useFetch } from "../services/useFetch";
import Header from "./Header";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};
const CallMemo = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  return (
    <Container>
      <Header
        title="Count : "
        value={count}
        text="Click Me"
        onClick={() => setCount(count + 1)}
      />
      <Header title="Cart : " value={cart} />
      <Header title="Most expensive : " value={mostExpensive} />
      <BigList products={products} addToCart={addToCart} />
    </Container>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <Grid container>
      {products.map((product) => {
        return (
          <Grid item xs={4}>
            <SingleProduct
              key={product.id}
              {...product}
              addToCart={addToCart}
            ></SingleProduct>
          </Grid>
        );
      })}
    </Grid>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  // useEffect(() => {
  //   console.count('hello from product');
  // });
  return (
    <Card
      sx={{
        m: 2,
      }}
    >
      <Box
        component="img"
        src={image}
        width="500px"
        height="350px"
        alt={name}
      />
      <Typography textTransform="uppercase" variant="h6" fontWeight="bold">
        {name}
      </Typography>
      <Typography
        sx={{
          my: 1,
        }}
      >
        ${price}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#46a0e2",
          color: "#ffffff",
          "&:hover": {
            color: "#46a0e2",
            backgroundColor: "#000000",
          },
        }}
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};
export default CallMemo;
