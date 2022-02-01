import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import find from './crud/find';
import findOne from './crud/findOne';
import insertOne from './crud/insertOne';
import updateOne from './crud/updateOne';
import deleteOne from './crud/deleteOne';

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
