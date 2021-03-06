module.exports = {
    up: async queryInterface => {
        const insert = queryInterface.bulkInsert(
            'activities',
            [
                {
                    id: 1,
                    title: 'Unidade de internação I',
                    subtitle: '',
                    sla: 10,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    title: 'Unidade de internação II',
                    subtitle: '',
                    sla: 15,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 3,
                    title: 'Unidade de internação III',
                    subtitle: '',
                    sla: 20,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );

        await queryInterface.sequelize.query(
            `ALTER SEQUENCE "activities_id_seq" RESTART WITH ${4}`
        );
        return insert;
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('activities', null, {});
    },
};
