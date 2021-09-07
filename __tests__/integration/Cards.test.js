import request from 'supertest';
import app from '../../src/app';

describe('Card', () => {
    it('should be able to create new card', async done => {
        const actRes = await request(app)
            .post('/activities')
            .send({
                title: 'Atividade qualquer',
                subtitle: 'um subtitulo qualquer',
                sla: 20,
            });

        const { id } = actRes.body;
        const cardRes = await request(app)
            .post('/cards')
            .send({
                activityId: id,
                patientName: 'pedro bufulin',
                insuranceName: 'seguros de saúde tal',
                visitId: '120342190',
                totalAmount: 10,
                numberOfPendencies: 2,
                numberOfOpenPendencies: 0,
                numberOfDocuments: 3,
                numberOfNotReceivedDocuments: 0,
                numberOfChecklistItems: 4,
                numberOfDoneChecklistItems: 4,
                bill: {
                    account: '312331209',
                    attendance: '604391201',
                    shipping: '8931209',
                    batch: '90318230',
                    billType: 'HOSPITALAR',
                },
            });

        expect(cardRes.body).toHaveProperty('card');
        expect(cardRes.status).toBe(200);

        done();
    });

    it('should be able to list cards', async done => {
        const res = await request(app)
            .get(`/cards/1`)
            .query({
                page: 1,
                perPage: 12,
                filter: '',
            })
            .send();

        expect(res.status).toBe(200);
        done();
    });

    it('should return "invalid filter" message', async done => {
        const res = await request(app)
            .get(`/cards/1`)
            .query({
                page: 1,
                perPage: 12,
                filter: 'INVALID',
            })
            .send();

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('invalid filter');
        done();
    });

    it('should list cards by filter TO_RECEIVE', async done => {
        const res = await request(app)
            .get(`/cards/1`)
            .query({
                page: 1,
                perPage: 12,
                filter: 'TO_RECEIVE',
            })
            .send();

        expect(res.status).toBe(200);
        done();
    });

    it('should list cards by filter TO_SEND', async done => {
        const res = await request(app)
            .get(`/cards/1`)
            .query({
                page: 1,
                perPage: 12,
                filter: 'TO_SEND',
            })
            .send();

        expect(res.status).toBe(200);
        done();
    });
});
