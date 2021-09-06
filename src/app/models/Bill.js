import Sequelize, { Model } from 'sequelize';

class Bill extends Model {
    static init(sequelize) {
        super.init(
            {
                account: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                attendance: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                shipping: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                batch: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                billType: {
                    type: Sequelize.ENUM('HOSPITALAR', 'AMBULATORIAL'),
                    field: 'bill_type',
                },
            },
            { sequelize, tableName: 'bills' }
        );
        return this;
    }
}

export default Bill;
