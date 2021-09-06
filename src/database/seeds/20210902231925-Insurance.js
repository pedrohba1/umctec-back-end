module.exports = {
    up: async queryInterface => {
        const insert = queryInterface.bulkInsert(
            'insurances',
            [
                {
                    id: 1,
                    name: 'Convênio 1',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Convênio 2',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 3,
                    name: 'Convênio 3',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 4,
                    name: 'Saude Golden',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 5,
                    name: 'Unicorp Blue',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
        await queryInterface.sequelize.query(
            `ALTER SEQUENCE "insurances_id_seq" RESTART WITH ${6}`
        );
        return insert;
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('insurances', null, {});
    },
};
