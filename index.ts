import path from 'path';
import express, { Express } from 'express';
import { registerWebRoutes, registerApiRoutes } from './routes/index';

require('dotenv').config();

const app: Express = express();

/**
 * Use EJS as Template Engine.
 */
app.set('view engine', 'ejs');

/**
 * Define root views directory.
 */
app.set('views', path.join(__dirname, '../resources/views'));

/**
 * Middleware for serving static files. The root argument specifies the root
 * directory from which to serve static assets.
 */
app.use(express.static('public'));

/**
 * Middleware for parsing incoming requests with JSON payloads.
 */
app.use(express.json());

/**
 * Middleware for POST and PUT requests.
 */
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});

registerWebRoutes(app);
registerApiRoutes(app);
