module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cards_summary', {
            id: Sequelize.INTEGER,
            totalCardsOk: Sequelize.INTEGER,
            totalCardsWarning: Sequelize.INTEGER,
            totalCardsDelayed: Sequelize.INTEGER,
            activityId: {
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
