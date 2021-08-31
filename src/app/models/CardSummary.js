import Sequelize, { Model } from 'sequelize';

class CardSummary extends Model {
    static init(sequelize) {
        super.init(
            {
                total_cards_ok: Sequelize.INTEGER,
                total_cards_warning: Sequelize.INTEGER,
                total_cards_delayed: Sequelize.INTEGER,
            },
            { sequelize, tableName: 'cards_summary' }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Activity, { foreignKey: 'activity_id' });
    }
}

export default CardSummary;
