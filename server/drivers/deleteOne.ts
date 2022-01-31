import { RequestHandler } from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../db';

const deleteOne: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');

    const { params } = req;
    const result = await users.deleteOne({ _id: new ObjectId(params.id) });
    console.log('params.id:', params.id);

    await client.close();
    res.status(200).send(result);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default deleteOne;
