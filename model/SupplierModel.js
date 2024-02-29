const Sequelize = require("sequelize");

class SupplierModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        supplierName: DataTypes.STRING(255),
        supplierTradingAs: DataTypes.STRING(255),
        companyRegistrationAbnNo: DataTypes.STRING(255),
        companyRegistrationAcnNo: DataTypes.STRING(255),
        website: DataTypes.STRING(255),
        bsb: DataTypes.STRING(255),
        bankAccountNumber: DataTypes.STRING(255),
        bankAccountName: DataTypes.STRING(255),
        localOrOverseasSupplier: DataTypes.STRING(255),
        supplierAddress: DataTypes.STRING(255),
        country: DataTypes.STRING(255),
        state: DataTypes.STRING(255),
        subUrb: DataTypes.STRING(255),
        postCode: DataTypes.STRING(255),
        contactPersonName: DataTypes.STRING(255),
        supplierPhoneNumber: DataTypes.STRING(255),
        supplierEmailId: DataTypes.STRING(255),
        "24x7ContactPersonName": DataTypes.STRING(255),
        contactPersonPhoneNumber: DataTypes.STRING(255),
        contactPersonEmailId: DataTypes.STRING(255),
        paymentTerms: DataTypes.STRING(255),
        specialConditionsOrAdditionalNotes: DataTypes.STRING(255),
        supplierCategory: DataTypes.STRING(255),
        supplierType: DataTypes.STRING(255),
        serviceManaged: DataTypes.STRING(255),
        purposeOfSupplier: DataTypes.STRING(255),
        dataSharedWithSupplier: DataTypes.STRING(255),
        departmentManagingSupplier: DataTypes.STRING(255),
        supplierOwner: DataTypes.STRING(255),
        slaDetails: DataTypes.STRING(255),
        creditLimit: DataTypes.STRING(255),
        ISO27001: DataTypes.STRING(255),
        ISO9001: DataTypes.STRING(255),
        ISO14001: DataTypes.STRING(255),
        ISO45001: DataTypes.STRING(255),
        modernSlaveryActApplicable: DataTypes.STRING(255),
        modernSlaveryStatementPublishedDate: DataTypes.STRING(255),
        anyOtherCertification: DataTypes.STRING(255),
        estimatedAnnualBudgetValue: DataTypes.STRING(255),
        contractCommencementDate: DataTypes.STRING(255),
        contractEndDate: DataTypes.STRING(255),
        Sensitivity_of_data_involved: DataTypes.STRING(255),
        threat: DataTypes.STRING(255),
        matrix_to_be_used_for_risk_assessment: DataTypes.STRING(255),
        likelihood: DataTypes.STRING(255),
        impact: DataTypes.STRING(255),
        inherent_risk_level: DataTypes.STRING(255),
        risk_assessment_completed: DataTypes.STRING(255),
        supplier_assessment_required: DataTypes.STRING(255),
        supplier_assessment_due_date: DataTypes.STRING(255),
        supplier_assessment_status: DataTypes.STRING(255),
        supplier_assessment_reviewer_person: DataTypes.STRING(255),
        supplier_agreement: DataTypes.STRING(255),
        supplier_approval_status: DataTypes.STRING(255),
        date_entered: DataTypes.STRING(255),
        decision_date: DataTypes.STRING(255),
        companyId: DataTypes.STRING(255),
      },
      {
        modelName: "supplier",
        tableName: "supplier",
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = SupplierModel;
