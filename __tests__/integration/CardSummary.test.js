import request from 'supertest';
import app from '../../src/app';

describe('CardSummary', () => {
    it('should be to get summary of cards', async done => {
        const res = await request(app)
            .get(`/summary/1`)
            .send();
        expect(res.status).toBe(200);
        done();
    });
});
