import bodyParser = require('body-parser');
import * as express from 'express';
const connectDb = require('./mongoconfig');
const customerModel = require("./customer/models/customerModel")

const app = express();


app.use(bodyParser.urlencoded({limit :'50mb', extended : true}));
app.use(bodyParser.json());

app.use(bodyParser.json({ limit: '50mb' }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/customer/postData",async (req,res) => {
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

app.get("/customer/getData", async (request, response) => {
  const users = await customerModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
