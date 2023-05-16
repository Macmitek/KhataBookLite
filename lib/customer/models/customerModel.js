"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    }
});
const Customer = (0, mongoose_1.model)("Customer", CustomerSchema);
exports.default = Customer;
//# sourceMappingURL=customerModel.js.map