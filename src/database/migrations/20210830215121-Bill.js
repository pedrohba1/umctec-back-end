module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('bills', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
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
            bill_type: {
                type: Sequelize.ENUM('HOSPITALAR', 'AMBULATORIAL'),
                allowNull: false,
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
        return queryInterface.dropTable('bills');
    },
};
