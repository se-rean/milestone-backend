const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const SupplierModel = require("../model/mongo-model/supplier");
const SupplierController = {};

SupplierController.post = async (req, res) => {
  try {
    const { supplier } = req.body;
    const supplierData = {
      data: supplier,
    };
    const result = await SupplierModel.create(supplierData);
    result.data = result.toJSON();
    console.log(result);
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: result.toJSON(),
        })
      )
    );
  } catch (error) {
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

// SupplierController.put = async (req, res) => {
//   try {
//     const { supplier } = req.body;
//     const supplierData = {
//       data: supplier,
//     };
//     const result = await SupplierModel.updateOne(
//       { _id: new ObjectId(documentId) },
//       { $set: supplierData }
//     );
//     result.data = result.toJSON();
//     console.log(result);
//     res.send(
//       dataToSnakeCase(
//         apiResponse({
//           statusCode: 200,
//           message: "sucessful",
//           data: result.toJSON(),
//         })
//       )
//     );
//   } catch (error) {
//     res.send(
//       dataToSnakeCase(
//         apiResponse({
//           isSuccess: false,
//           statusCode: 200,
//           message: error.message,
//         })
//       )
//     );
//   }
// };

SupplierController.getById = async (req, res) => {
  const supplierId = req.params.id;
  try {
    const supplier = await SupplierModel.findById(supplierId);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: supplier.toJSON(),
        })
      )
    );
  } catch (error) {
    console.error("Error retrieving supplier:", error);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

SupplierController.get = async (req, res) => {
  try {
    const supplier = await SupplierModel.find();
    console.log(supplier);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }

    res.send(
      // dataToSnakeCase(
      apiResponse({
        statusCode: 200,
        message: "sucessful",
        data: supplier,
      })
      // )
    );
  } catch (error) {
    console.error("Error retrieving supplier:", error);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

SupplierController.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const supplier = await SupplierModel.findByIdAndDelete(id);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }

    res.send(
      // dataToSnakeCase(
      apiResponse({
        statusCode: 200,
        message: "sucessful",
        data: supplier,
      })
      // )
    );
  } catch (error) {
    console.error("Error retrieving supplier:", error);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

SupplierController.put = async (req, res) => {
  const supplierId = req.params.id;
  const updateFields = req.body; // Assuming you send the update fields in the request body

  try {
    const existingSupplier = await SupplierModel.findById(supplierId);

    if (!existingSupplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    console.log(existingSupplier.data);
    // Merge existing data with the updateFields
    const mergedFields = {
      ...existingSupplier.data,
      ...updateFields,
    };
    console.log(mergedFields);
    const updatedSupplier = await SupplierModel.findByIdAndUpdate(
      supplierId,
      { $set: { [`data`]: mergedFields } },
      { new: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    console.log("updated", updatedSupplier);

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: updatedSupplier.toJSON(),
        })
      )
    );
  } catch (error) {
    console.error("Error updating multiple fields:", error);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

module.exports = SupplierController;
