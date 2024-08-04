import mongoose, { Schema } from "mongoose";
const subscriptionSchema = Schema(
  {
    subsriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeStamps: true }
);
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
