import request from 'supertest';
import app from '../../src/app';

import factory from '../utils/factories';

describe('Activity', () => {
    it('should be able to create new activity', async done => {
        const activity = await factory.attrs('Activity');
        const response = await request(app)
            .post('/activities')
            .send(activity);
        expect(response.body).toHaveProperty('id');
        done();
    });

    it('should be able to list activities', async done => {
        const response = await request(app)
            .get('/activities')
            .query({
                page: 1,
            })
            .send();
        expect(response.status).toBe(200);
        done();
    });
});
