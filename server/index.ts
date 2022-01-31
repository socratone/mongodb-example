import express from 'express';
import bodyParser from 'body-parser';
import find from './drivers/find';
import findOne from './drivers/findOne';
import insertOne from './drivers/insertOne';
import patchName from './drivers/patchName';

const app = express();
app.use(bodyParser.json());

app.get('/find', find);
app.get('/find-one', findOne);
app.post('/insert-one', insertOne);
app.patch('/patch-name/:id', patchName);

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
