module.exports = {
    up: async queryInterface => {
        const insert = queryInterface.bulkInsert(
            'bills',
            [
                {
                    id: 1,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 3,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 4,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 5,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 6,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 7,
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 8,
                    account: '1213091209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 9,
                    account: '1213091209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 10,
                    account: '1213091209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    bill_type: 'HOSPITALAR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
        await queryInterface.sequelize.query(
            `ALTER SEQUENCE "bills_id_seq" RESTART WITH ${11}`
        );
        return insert;
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('bills', null, {});
    },
};
