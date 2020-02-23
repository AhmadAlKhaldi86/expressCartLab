const express = require("express");
const cart = express.Router();

cart.use(express.json());

let itemList = require("./items");


cart.get("/", (req, res) => {
  res.status(200).json(itemList);
});

/*
cart.get("/:id", (req, res) => {
  let item = itemList[req.params.id];
  if (item) {
    res.status(200).json(itemList[req.params.id]);
  } else {
    res.status(404).json("Id Not Found");
  }
});
*/


/*
cart.post("/", (req, res) => {
    itemList.push({
      id: req.body.id, 
      product: req.body.product,
      price: req.body.price,
      quantity: req.body.quantity
    });
    res.status(201).json({
        id: req.body.id, 
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity
    })
});
*/

/*
cart.put("/:id", (req, res) => {
  let selectedItem = itemList.find(item => item.id === req.params.id);
  // console.log(selectedItem);
  // console.log(itemList[0].id);
  if (selectedItem) {
    const selectedIndex = itemList.indexOf(selectedItem);
    itemList[selectedIndex] = req.body;
    res.json(itemList[selectedIndex]);
  } else {
    res.status(404).json("Item Not Found");
  }
});
*/

/*
cart.delete("/:id", (req, res) => {
  let selectedItem = itemList.find(item => item.id === req.params.id);
  if (selectedItem) {
    const selectedIndex = itemList.indexOf(selectedItem);
    itemList.splice(selectedIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json("That student isn't in this class!");
  }
});
*/


// by default number parameters are strings. You can use "" or convert it.


module.exports = cart;