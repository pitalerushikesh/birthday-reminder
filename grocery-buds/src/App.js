import "./App.css";
import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Box } from "@mui/system";

import ItemCard from "./components/ItemCard";

function App() {
  const [name, setName] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert({ show: true, message: "Please enter a name", type: "danger" });
    } else if (name && isEditing) {
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert({ show: true, message: "Value Changed", type: "success" });
    } else {
      showAlert({ show: true, message: "Item Added", type: "success" });
      const newItem = { id: new Date().getTime().toString(), title: name };
      setGroceryList([...groceryList, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: show, message: msg, type: type });
  };

  const clearList = () => {
    showAlert({ show: true, message: "List Cleared", type: "success" });
    setGroceryList([]);
  };

  const deleteItem = (id) => {
    showAlert({ show: true, message: "Item Deleted", type: "danger" });
    setGroceryList(groceryList.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = groceryList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);
  console.log(groceryList);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          width: "600px",
          my: 4,
        }}
      >
        <CardContent>
          <Header />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              sx={{
                mx: 2,
              }}
              fullWidth
              size="small"
              autoComplete="off"
              placeholder="eg. 1 bag of beans"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              sx={{
                backgroundColor: "#49a6e9",
                color: "#063251",
                letterSpacing: "0.1rem",
                px: 2,
              }}
              onClick={handleSubmit}
            >
              {isEditing ? "Update" : "Add"}
            </Button>
          </Box>
        </CardContent>
      </Card>
      {groceryList.length > 0 && (
        <Card
          sx={{
            width: "600px",
          }}
        >
          <CardContent>
            {groceryList.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  title={item.title}
                  removeItem={() => deleteItem(item.id)}
                  editItem={() => editItem(item.id)}
                />
              );
            })}
            <Box justifyContent="center" display="flex" aliognItems="center">
              <Button
                sx={{
                  color: "#ff0000",
                  textTransform: "none",
                  letterSpacing: "0.1rem",
                }}
                onClick={clearList}
              >
                Clear All Items
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;
