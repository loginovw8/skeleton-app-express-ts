import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { registerRoutes } from './routes/web';
import { registerApiRoutes } from './routes/api';

dotenv.config();

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname.replace('/dist', ''), 'resources/views'));

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS?.split(","), }));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});

registerRoutes(app);
registerApiRoutes(app);
