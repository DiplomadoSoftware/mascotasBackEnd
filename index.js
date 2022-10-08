import express from 'express';
import cors from 'cors';

import router from './src/Routes/index.js';
import { sequelize } from './src/Database/index.js';

const app = express();

const mascotasDB = async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.use(cors());
        app.use(express.json({ extended: false }));
        app.use(router);

        app.set('port', 5000);
        app.listen(app.get('port'));
    } catch ( error ) {
        console.log(`unable to connect to the database: ${error}`)
    }
}

mascotasDB();