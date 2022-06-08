const { Schema, model, Types } = require("mongoose");

const AnimalSchema = new Schema({
  ID_SENASA: {
    type: String,
    unique: true,
    required: [true, "The SENASA ID is required"],
    maxLength: [16, "The SENASA ID should contain 16 characters"],
  },
  type: {
    type: String,
    required: true,
    enum: ["Novillo", "Toro", "Vaquillona"],
  },
  weight: {
    type: Number,
    required: true,
  },
  device: {
    type: Map,
    of: new Schema({
      type: { type: String, required: true, enum: ["COLLAR", "CARAVANA"] },
      number: { type: String, required: true, maxlength: 8 },
    }),
  },
});

module.exports = model("Animal", AnimalSchema);
