import { RequestHandler } from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../db';

const updateOne: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');

    const { body, params } = req;
    const result = await users.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { name: body.name } }
    );

    await client.close();
    res.status(200).send(result);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default updateOne;
