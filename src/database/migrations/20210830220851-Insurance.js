module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('insurances', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('insurances');
    },
};
