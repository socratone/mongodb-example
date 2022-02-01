import { RequestHandler } from 'express';
import { client } from '../db';

const insertOne: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');

    const { body } = req;
    const result = await users.insertOne(body);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    await client.close();
    res.status(200).send(result);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default insertOne;
