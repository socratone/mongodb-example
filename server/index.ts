import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import find from './drivers/find';
import findOne from './drivers/findOne';
import insertOne from './drivers/insertOne';
import updateOne from './drivers/updateOne';
import deleteOne from './drivers/deleteOne';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/users', find);
app.get('/user', findOne);
app.post('/users', insertOne);
app.patch('/users/:id', updateOne);
app.delete('/users/:id', deleteOne);

app.listen(3001, () => {
  console.log('The application is listening on port 3001!');
});
