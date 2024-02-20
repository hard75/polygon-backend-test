import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import path from 'path';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/api', routes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
