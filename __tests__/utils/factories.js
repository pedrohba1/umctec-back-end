import faker from 'faker';
import { factory } from 'factory-girl';

import Activity from '../../src/app/models/Activity';

factory.define('Activity', Activity, {
    title: faker.lorem.lines(2),
    subtitle: faker.lorem.lines(3),
    sla: faker.random.number({ min: 10, max: 30 }),
});

export default factory;
