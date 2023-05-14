const shop = require("mongoose");

const ShopKeeperSchema = new shop.Schema({
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

const shopdata = shop.model("Shopkeeper", ShopKeeperSchema);

module.exports = shopdata;