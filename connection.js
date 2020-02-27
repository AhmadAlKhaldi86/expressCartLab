const { Pool } = require("pg");
const credentials = new Pool({
user: "postgres",
password: "Amman_1986",
host: "localhost",
port: 5432,
database: "ExpressShopDB",
ssl: false
});

module.exports = credentials;

// Should be imported in routesFile

