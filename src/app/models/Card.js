import Sequelize, { Model, DataTypes } from 'sequelize';
import daysBetween from '../utils/daysBetween';

class Card extends Model {
    static init(sequelize) {
        super.init(
            {
                visityId: {
                    type: Sequelize.STRING,
                    field: 'visity_id',
                },
                billId: {
                    type: Sequelize.STRING,
                    field: 'bill_id',
                },
                billType: {
                    type: Sequelize.ENUM('HOSPITALAR', 'AMBULATORIAL'),
                    field: 'bill_type',
                },
                daysSinceCreated: {
                    type: DataTypes.VIRTUAL,
                    get() {
                        return daysBetween(this.get('createdAt'), new Date());
                    },
                },
                totalAmount: {
                    type: Sequelize.FLOAT,
                    field: 'total_amount',
                },
                numberOfPendencies: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_pendencies',
                },
                numberOfOpenPendencies: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_open_pendencies',
                },
                numberOfDocuments: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_documents',
                },
                numberOfNotReceivedDocuments: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_not_received_documents',
                },
                numberOfChecklistItems: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_checklist_items',
                },
                numberOfDoneChecklistItems: {
                    type: Sequelize.INTEGER,
                    field: 'number_of_done_checklist_items',
                },
            },
            { sequelize, tableName: 'cards' }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Insurance, {
            foreignKey: 'insurance_id',
            as: 'insurance',
        });
        this.belongsTo(models.Patient, {
            foreignKey: 'patient_id',
            as: 'patient',
        });
    }
}

export default Card;
