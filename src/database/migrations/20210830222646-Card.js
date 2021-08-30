module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cards', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
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
            // TODO: slaStatus will be a virtual field
            patientId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'patients',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            insuranceId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'insurances',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            visityId: {
                type: Sequelize.STRING,
            },
            billId: {
                type: Sequelize.STRING,
            },
            billType: {
                type: Sequelize.ENUM('HOSPITALAR', 'AMBULATORIAL'),
            },
            totalAmount: {
                type: Sequelize.FLOAT,
            },
            numberOfPendencies: Sequelize.INTEGER,
            numberOfOpenPendencies: Sequelize.INTEGER,
            numberOfDocuments: Sequelize.INTEGER,
            numberOfNotReceivedDocuments: Sequelize.INTEGER,
            numberOfChecklistItem: Sequelize.INTEGER,
            numberOfDoneChecklistItem: Sequelize.INTEGER,
            // pageInfo will be a virtual field
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
        return queryInterface.dropTable('cards');
    },
};
