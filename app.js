const express = require("express");
const app = express();
const port = 3000;
const cart = require("./cartRoutes");

app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.use("/cart-items", cart);


