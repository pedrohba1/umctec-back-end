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
}

export default Insurance;
