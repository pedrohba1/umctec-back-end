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
}

export default Patient;
