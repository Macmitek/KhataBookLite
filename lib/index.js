"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const customerRouter_1 = require("./customer/routes/customerRouter");
const shopKeeperRouter_1 = require("./shopkeeper/routes/shopKeeperRouter");
const path = require("path");
const dotenv_1 = require("dotenv");
const ENV_FILE = path.join(__dirname, '..', '.env');
(0, dotenv_1.config)({ path: ENV_FILE });
const app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.use('/customer', customerRouter_1.default);
app.use('/shopkeeper', shopKeeperRouter_1.default);
app.listen(process.env.server_port, () => {
    console.log("Server listening on port :", process.env.server_port);
});
//# sourceMappingURL=index.js.map