import express from 'express';
import { Request, Response } from 'express';
import { config } from 'dotenv';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import {customerRouter} from './../customer/routes/customerRouter';
import {ShopKeeperRouter} from './../shopkeeper/routes/shopKeeperRouter';

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.init();
    this.routes();
  }

  private init(): void {
    const ENV_FILE = path.join(__dirname, '..', '.env');
    config({ path: ENV_FILE });

    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    this.app.use(bodyParser.json());
  }
  

  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      console.log("inside homepage")
      res.send('Home Page');
    });

    this.app.use('/customer', new customerRouter().router);
    this.app.use('/shopkeeper',new  ShopKeeperRouter().router);
  }

  public start(): void {
    const serverPort = process.env.server_port || 3000;

    this.app.listen(serverPort, () => {
      console.log('Server listening on port:', serverPort);
    });
  }
}
