import { Button, Card, Typography } from "@mui/material";
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
    <>
      <Header title="Count" />: {count}
      <Button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </Button>
      <Header title="Cart" />: ${cart}
      <Header title="Most expensive" />: ${mostExpensive}
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <Box>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </Box>
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
    <Card>
      <Box component="img" src={image} alt={name} />
      <Typography>{name}</Typography>
      <Typography>${price}</Typography>
      <Button onClick={addToCart}>Add to Cart</Button>
    </Card>
  );
};
export default CallMemo;
