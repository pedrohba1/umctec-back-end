import Sequelize, { Model } from 'sequelize';

class Activity extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                subtitle: Sequelize.STRING,
                sla: Sequelize.INTEGER,
            },
            { sequelize, tableName: 'activities' }
        );
        return this;
    }
}

export default Activity;
