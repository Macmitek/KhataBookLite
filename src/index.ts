// import bodyParser = require('body-parser');
// import * as express from 'express';
// import customerRouter from './customer/routes/customerRouter';
// import shopKeeperRouter from './shopkeeper/routes/shopKeeperRouter';
// import * as path from 'path';
// import { config } from 'dotenv';


// const ENV_FILE = path.join(__dirname, '..', '.env');
// config({ path: ENV_FILE });


// const app = express();


// app.use(bodyParser.urlencoded({limit :'50mb', extended : true}));
// app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: '50mb' }));

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.use('/customer', customerRouter);
// app.use('/shopkeeper', shopKeeperRouter);

// app.listen(process.env.server_port, () => {
//   console.log("Server listening on port :",process.env.server_port);
// });
import { App } from './common/App';

const app = new App();
app.start();