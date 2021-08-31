import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Activity from '../app/models/Activity';
import Insurance from '../app/models/Insurance';
import Patient from '../app/models/Patient';
import Card from '../app/models/Card';
import CardSummary from '../app/models/CardSummary';

const models = [Activity, Insurance, Patient, Card, CardSummary];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
