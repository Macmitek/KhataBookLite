const mongose = require("mongoose");

const CustomerSchema = new mongose.Schema({
  name: {
    type: String,
    required: true,
  },
    phoneNo: {
    type: Number,
    required: true,
  }
});

const Customer = mongose.model("Customer", CustomerSchema);

module.exports = Customer;