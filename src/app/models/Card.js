import Sequelize, { Model, DataTypes } from 'sequelize';
import daysBetween from '../utils/daysBetween';

class Card extends Model {
    static init(sequelize) {
        super.init(
            {
                visitId: {
                    type: Sequelize.STRING,
                    field: 'visit_id',
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
            foreignKey: 'insuranceId',
            as: 'insurance',
        });
        this.belongsTo(models.Patient, {
            foreignKey: 'patientId',
            as: 'patient',
        });
        this.belongsTo(models.Bill, {
            foreignKey: 'billId',
            as: 'bill',
        });
    }
}

export default Card;
