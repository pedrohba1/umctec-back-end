import Sequelize, { Model } from 'sequelize';

class Patient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            { sequelize, tableName: 'patients' }
        );
        return this;
    }

    static associate(models) {
        this.hasOne(models.Card, { foreignKey: 'patient_id' });
    }
}

export default Patient;
