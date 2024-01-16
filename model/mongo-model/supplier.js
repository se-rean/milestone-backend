// models/Supplier.js

const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    data: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

const SupplierModel = mongoose.model("supplier", supplierSchema);

module.exports = SupplierModel;
