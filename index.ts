import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { registerRoutes } from './routes/index';
import { registerApiRoutes } from './routes/api';

dotenv.config();

const app: Express = express();

app.use(cors({
    origin: process.env.CORS?.split(","),
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});

registerRoutes(app);
registerApiRoutes(app);
