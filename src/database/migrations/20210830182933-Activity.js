module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('activities', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: Sequelize.STRING,
            subtitle: Sequelize.STRING,
            sla: Sequelize.INTEGER, // postgreSQL couldn't use UNSIGNED, unfortunately. :(
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
        return queryInterface.dropTable('activities');
    },
};
