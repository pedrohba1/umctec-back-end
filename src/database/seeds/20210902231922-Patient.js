module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'patients',
            [
                {
                    id: 1,
                    name: 'Sudanka Bakalowits',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Brandon Neal',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 3,
                    name: 'Cao Yu',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 4,
                    name: 'Nicholas Hudson',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 5,
                    name: 'Xenie Dolezelová',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 6,
                    name: 'Mkhuseli Maling',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 7,
                    name: 'Tsutsui Ichiha',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 8,
                    name: 'Frances Salazar',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 9,
                    name: 'Salazar Frances',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 10,
                    name: ' Cristiano Rizza Neto',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 11,
                    name: 'Jessica Felix Lazzarini',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('patients', null, {});
    },
};
