import { Schema, model, Document } from "mongoose";

interface IShopkeeper extends Document {
  name: string;
  phoneNo: number;
  emailID?: string;
}

const ShopKeeperSchema = new Schema<IShopkeeper>({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  emailID: {
    type: String,
    required: false,
  },
});

const Shopdata = model<IShopkeeper>("Shopkeeper", ShopKeeperSchema);

export default Shopdata;
