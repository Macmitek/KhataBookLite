import express, { Request, Response } from "express";
import connectDb from "../../common/mongoconfig";
import customerModel from "../models/customerModel";



export class customerRouter{
  public router: express.Router;
  public connectobj= new connectDb();
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private  initializeRoutes(): void {
    this.router.post("/postData",async (req,res) => {
      console.log("inside customer postadatda",JSON.stringify(req.body))
      await connectDb.connect();
      const customer = new customerModel(req.body)
      try {
        await customer.save();
        res.send(customer);
      } catch (error) {
        res.status(500).send(error);
      }
    })
  
  this.router.get("/getData", async (request, response) => {
    await connectDb.connect();
    const users = await customerModel.find({});
    
      try {
        response.send(users);
      } catch (error) {
        response.status(500).send(error);
      }
    })
  }
}
