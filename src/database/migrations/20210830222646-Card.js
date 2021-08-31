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
                allowNull: true,
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
                allowNull: true,
            },
            insurance_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'insurances',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
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
            number_of_documens: Sequelize.INTEGER,
            number_of_not_recieved_documents: Sequelize.INTEGER,
            number_of_checklist_items: Sequelize.INTEGER,
            number_of_done_checklist_items: Sequelize.INTEGER,
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
