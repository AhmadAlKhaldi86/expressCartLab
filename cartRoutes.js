const express = require("express");
const cart = express.Router()
cart.use(express.json());
let itemList = require("./items");
const pool = require("./connection");
var cors = require('cors');
cart.use(cors({origin: 'http://localhost:4200'}));
// use it before all route definitions




// ============================== Get Static Data from a file =======================
/*
cart.get("/", (req, res) => {
  res.status(200).json(itemList);
});


cart.get("/:id", (req, res) => {
  let item = itemList[req.params.id];
  if (item) {
    res.status(200).json(itemList[req.params.id]);
  } else {
    res.status(404).json("Id Not Found");
  }
});




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

// by default number parameters are strings. You can use "" or convert it.
*/ 





// ===================== Get Data From DB ==========================
function getTable(req, res) {
  pool.query("SELECT * FROM \"shoppingCart\"").then(result => {
    res.json(result.rows);
  });
}


cart.get("/", function(req, res) {
  getTable(req, res);
});


cart.get("/:id", function(req, res) {
  // pool.query("select * from Animals where name=$1::text order by id", [req.params.id])
  pool.query("SELECT * FROM \"shoppingCart\" WHERE id =" + req.params.id).then(result => {
    if (result.rows.length < 1) {
      res.send("ID does not exist")
      // 404 status to add.
    } else {
      res.json(result.rows);
    }
 });
});


cart.post("/", (req, res) => {
  pool.query("insert into \"shoppingCart\" (id,product,price,quantity) values($1,$2,$3,$4)", [req.body.id, req.body.product, req.body.price, req.body.quantity]).then(result => {
  getTable(req, res);
  }).catch(err => {
    res.send(err.detail)
  })
});


cart.put("/:id", (req, res) => {
  pool.query("SELECT * FROM \"shoppingCart\" WHERE id =" + req.params.id).then(result => {
    if (result.rows.length < 1) {
      res.send("ID does not exist")
    } else {
      pool.query("update \"shoppingCart\" set price=$1::money where id=$2::int",
      [req.body.price, req.params.id]).then(() => {
      getTable(req, res);
      }).catch(err => {
        res.send(err.detail)
      })
    }
 });
});


cart.delete("/:id", (req, res) => {
  pool.query("SELECT * FROM \"shoppingCart\" WHERE id =" + req.params.id).then(result => {
    if (result.rows.length < 1) {
      res.send("ID does not exist")
    } else {
      pool.query("delete from \"shoppingCart\" where id=$1::int",
      [req.params.id]).then(() => {
      getTable(req, res);
      }).catch(err => {
        res.send(err.detail)
      })
   }
 });
});


module.exports = cart;