import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import Activity from './app/controllers/ActivityController';
import Card from './app/controllers/CardController';
import Summary from './app/controllers/SummaryController';
import options from '../swagger.json';

const routes = new Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/activities', Activity.store);
routes.get('/activities', Activity.index);

routes.post('/cards', Card.store);
routes.get('/cards/:activityId', Card.index);

routes.get('/summary/:activityId', Summary.show);

export default routes;
