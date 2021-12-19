const { Schema, model } = require("mongoose");

const AuctionSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadlinetime: {
      type:String,
      required: true,
    },
    auctionstart: {
      type: String,
      required: true,
    },
    endauction: {
      type: String,
      required: true,
    },
    startingprice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Auction", AuctionSchema);
