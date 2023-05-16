import { Schema, model, Document } from "mongoose";
interface ICustomer extends Document {
  name: string;
  phoneNo: number;
}

const CustomerSchema = new Schema<ICustomer>({
  name: {
    type: String,
    required: true,
  },
    phoneNo: {
    type: Number,
    required: true,
  }
});

const Customer = model<ICustomer>("Customer", CustomerSchema);

export default Customer;