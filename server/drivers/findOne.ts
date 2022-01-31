import { RequestHandler } from 'express';
import { client } from '../db';

const findOne: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');
    const result = await users.findOne({ name: 'John' });
    console.log('result:', result);

    await client.close();
    res.status(200).send(result);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default findOne;
