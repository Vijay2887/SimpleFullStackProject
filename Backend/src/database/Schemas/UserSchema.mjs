import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  age: {
    type: Schema.Types.Number,
    required: true,
    default: 18,
  },
});

export const User = mongoose.model("user", UserSchema);
