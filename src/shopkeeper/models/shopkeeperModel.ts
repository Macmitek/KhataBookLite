const shop = require("mongoose");

const ShopKeeperSchema = new mongose.Schema({
  name: {
    type: String,
    required: true,
  },
    phoneNo: {
    type: Number,
    required: true,
  },
  emailID :{
    type : String,
    required : false
  }
});

const shopdata = mongose.model("Shopkeeper", ShopKeeperSchema);

module.exports = shopdata;