"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const connectDb = require('./mongoconfig');
const customerModel = require("./customer/models/customerModel");
const app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.post("/customer/postData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inside customer postadatda", JSON.stringify(req.body));
    connectDb();
    const customer = new customerModel(req.body);
    try {
        yield customer.save();
        res.send(customer);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.get("/customer/getData", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield customerModel.find({});
    try {
        response.send(users);
    }
    catch (error) {
        response.status(500).send(error);
    }
}));
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
//# sourceMappingURL=index.js.map