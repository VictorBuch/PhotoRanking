const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoRankSchema = new Schema({
  username: { type: String, required: true },
  rank: { type: Number, required: true },
  date: { type: Date, required: true },
});

const User = mongoose.model("PhotoRank", photoRankSchema);

export default User;
