import express from 'express';
import dotenv from 'dotenv';
import api from './routes/api';
import handleErrors from './middleware/handleErrors';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', api);
app.use(handleErrors);

app.listen(process.env.PORT, console.log(`server running on post ${process.env.PORT}`));
