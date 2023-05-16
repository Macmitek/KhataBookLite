import express = require("express");
const connectDb = require("../../common/mongoconfig");
const shopdata = require("../models/shopkeeperModel")

const shopKeeperRouter = express();

shopKeeperRouter.post("/postData",async (req,res) => {
    console.log("inside shopKeeper postadatda",JSON.stringify(req.body))
    connectDb();
    const shopKeeper = new shopdata(req.body)
    try {
      await shopKeeper.save();
      res.send(shopKeeper);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  
  shopKeeperRouter.get("/getData", async (request, response) => {
    connectDb();
    const users = await shopdata.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  
export default shopKeeperRouter;