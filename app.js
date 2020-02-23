const express = require("express");
const app = express();
const port = 3000;


const cart = ('./cartRoutes');
app.use("/cart-items", cart);


app.listen(port, () => console.log(`Listening on port: ${port}.`));







