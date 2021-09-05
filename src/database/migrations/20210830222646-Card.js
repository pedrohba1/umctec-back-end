module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cards', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            activity_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'activities',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            // TODO: slaStatus will be a virtual field
            patient_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'patients',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            insurance_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'insurances',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            visit_id: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            bill_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'bills',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            total_amount: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            number_of_pendencies: Sequelize.INTEGER,
            number_of_open_pendencies: Sequelize.INTEGER,
            number_of_documents: Sequelize.INTEGER,
            number_of_not_received_documents: Sequelize.INTEGER,
            number_of_checklist_items: Sequelize.INTEGER,
            number_of_done_checklist_items: Sequelize.INTEGER,
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
