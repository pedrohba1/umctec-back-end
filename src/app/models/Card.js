import Sequelize, { Model } from 'sequelize';

class Card extends Model {
    static init(sequelize) {
        super.init(
            {
                visity_id: {
                    type: Sequelize.STRING,
                },
                bill_id: {
                    type: Sequelize.STRING,
                },
                bill_type: {
                    type: Sequelize.ENUM('HOSPITALAR', 'AMBULATORIAL'),
                },
                total_amount: {
                    type: Sequelize.FLOAT,
                },
                number_of_pendencies: Sequelize.INTEGER,
                number_of_open_pendencies: Sequelize.INTEGER,
                number_of_documents: Sequelize.INTEGER,
                number_of_not_recieved_documents: Sequelize.INTEGER,
                number_of_checklist_items: Sequelize.INTEGER,
                number_of_done_checklist_items: Sequelize.INTEGER,
            },
            { sequelize, tableName: 'cards' }
        );
        return this;
    }
}

export default Card;
