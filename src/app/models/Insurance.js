import Sequelize, { Model } from 'sequelize';

class Insurance extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            { sequelize, tableName: 'insurances' }
        );
        return this;
    }

    static associate(models) {
        this.hasOne(models.Card, { foreignKey: 'insurance_id' });
    }
}

export default Insurance;
