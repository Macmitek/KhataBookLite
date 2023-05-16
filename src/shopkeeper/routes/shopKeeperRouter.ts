import express, { Request, Response } from "express";
import connectDb from "../../common/mongoconfig";
import ShopkeeperModel from "../models/shopkeeperModel";

export class ShopKeeperRouter {
  public router: express.Router;
  public connectobj= new connectDb();
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/postData", async (req: Request, res: Response) => {
      console.log("inside shopKeeper postadatda", JSON.stringify(req.body));
      await connectDb.connect();
      const shopKeeper = new ShopkeeperModel(req.body);
      try {
        await shopKeeper.save();
        res.send(shopKeeper);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    this.router.get("/getData", async (req: Request, res: Response) => {
      await connectDb.connect();
      try {
        const users = await ShopkeeperModel.find({});
        res.send(users);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}

