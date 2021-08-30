module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'activities',
            [
                {
                    id: 1,
                    title: 'Atividade 1 ',
                    subtitle: 'Finalizar conta',
                    sla: 10,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    title: 'Atividade  2',
                    subtitle: 'Inicializar conta',
                    sla: 10,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('activities', null, {});
    },
};
