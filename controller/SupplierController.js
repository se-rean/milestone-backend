const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const {
  SupplierModel,
  RoleModel,
  DivisionModel,
  sequelize,
  UserModel,
} = require("../init/mysql-init");
const SupplierController = {};

SupplierController.post = async (req, res) => {
  try {
    const { supplier } = req.body;

    const result = await SupplierModel.create(supplier);
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
    const supplier = await SupplierModel.findAll({ where: { id: supplierId } });
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
    const { companyId } = req.query;
    console.log("companyId", companyId);
    if (!companyId) {
      return res.status(404).json({ error: "Company Id not found" });
    }

    const supplier = await SupplierModel.findAll({
      where: {
        companyId: companyId,
      },
    });
    console.log(supplier);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }

    const supplierOwner = await UserModel.findAll({
      where: {
        company_id: companyId,
      },
      raw: true,
    });

    supplier.forEach((item) => {
      supplierOwner.forEach((div) => {
        if (div.id == item.supplierOwner) {
          item.supplierOwner = div.first_name + " " + div.last_name;
        }
      });
    });
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
    const supplier = await SupplierModel.destroy({ where: { id: id } });
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
    console.log(updateFields);
    const existingSupplier = await SupplierModel.findAll({
      where: { id: supplierId },
    });

    if (!existingSupplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    // Merge existing data with the updateFields

    const updatedSupplier = await SupplierModel.update(updateFields, {
      where: { id: supplierId },
    });

    if (!updatedSupplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    console.log("updated", updatedSupplier);

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: updatedSupplier,
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
