import { RequestHandler } from 'express';
import { client } from '../db';

const find: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');
    const cursor = await users.find();

    const results: any[] = [];
    await cursor.forEach((item) => {
      results.push(item);
    });
    console.log('results:', results);

    await client.close();
    res.status(200).send(results);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default find;
