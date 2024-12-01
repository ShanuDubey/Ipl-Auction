const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const ListSchema = new Schema(
    {
      user: {
        type: String,
      },
  
      player: {
        type: String,
      },
  
      role: {
        type: String,
      },
      amount: {
        type: String,
      },
    }

  );

  ListSchema.methods.getPublicProfile = function () {
    const list = this.toObject();
    return list;
  };

  const List = mongoose.model("List", ListSchema);
  module.exports = List;