module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'cards',
            [
                {
                    id: 1,
                    activity_id: 1,
                    patient_id: 1,
                    insurance_id: 1,
                    visit_id: '13451',
                    bill_id: '34902',
                    bill_type: 'HOSPITALAR',
                    total_amount: 1502.1,
                    number_of_pendencies: 2,
                    number_of_open_pendencies: 0,
                    number_of_documents: 4,
                    number_of_not_received_documents: 1,
                    number_of_checklist_items: 4,
                    number_of_done_checklist_items: 4,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    activity_id: 1,
                    patient_id: 2,
                    insurance_id: 2,
                    visit_id: '13451',
                    bill_id: '34902',
                    bill_type: 'HOSPITALAR',
                    total_amount: 500.5,
                    number_of_pendencies: 2,
                    number_of_open_pendencies: 0,
                    number_of_documents: 4,
                    number_of_not_received_documents: 0,
                    number_of_checklist_items: 4,
                    number_of_done_checklist_items: 4,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 3,
                    activity_id: 1,
                    patient_id: 3,
                    insurance_id: 2,
                    visit_id: '13451',
                    bill_id: '34902',
                    bill_type: 'HOSPITALAR',
                    total_amount: 299.5,
                    number_of_pendencies: 2,
                    number_of_open_pendencies: 0,
                    number_of_documents: 4,
                    number_of_not_received_documents: 0,
                    number_of_checklist_items: 3,
                    number_of_done_checklist_items: 4,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('cards', null, {});
    },
};
