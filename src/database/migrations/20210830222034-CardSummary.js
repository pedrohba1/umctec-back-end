module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cards_summary', {
            id: Sequelize.INTEGER,
            total_cards_ok: Sequelize.INTEGER,
            total_cards_warning: Sequelize.INTEGER,
            total_cards_delayed: Sequelize.INTEGER,
            activity_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'activities',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('cards_summary');
    },
};
