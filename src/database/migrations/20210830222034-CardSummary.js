module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cards_summary', {
            id: Sequelize.INTEGER,
            totalCardsOk: Sequelize.INTEGER,
            totalCardsWarning: Sequelize.INTEGER,
            totalCardsDelayed: Sequelize.INTEGER,
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('cards_summary');
    },
};
