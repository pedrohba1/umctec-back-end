import { Router } from 'express';

import Activity from './app/controllers/ActivityController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/activities', Activity.store);
routes.get('/activities', Activity.index);

export default routes;
