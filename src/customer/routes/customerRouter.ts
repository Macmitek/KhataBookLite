import express = require("express");
const connectDb = require("../../common/mongoconfig");
const customerModel = require("../models/customerModel")

const customerRouter = express();

customerRouter.post("/postData",async (req,res) => {
    console.log("inside customer postadatda",JSON.stringify(req.body))
    connectDb();
    const customer = new customerModel(req.body)
    try {
      await customer.save();
      res.send(customer);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  
  customerRouter.get("/getData", async (request, response) => {
    connectDb();
    const users = await customerModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  
export default customerRouter;