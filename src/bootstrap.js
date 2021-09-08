const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV;

let envPath = '';
switch (env) {
    case 'development':
        envPath = '/../.env.dev';
        break;
    case 'production':
        envPath = '../.env.prod';
        break;
    case 'test':
        envPath = '../.env.test';
        break;
    default:
        envPath = '../.env';
        break;
}

const result = dotenv.config({ path: path.join(__dirname, envPath) });

if (result.error) {
    throw result.error;
}
