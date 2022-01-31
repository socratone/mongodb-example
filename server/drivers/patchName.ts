import { RequestHandler } from 'express';
import { client } from '../db';

const patchName: RequestHandler = async (req, res) => {
  try {
    await client.connect();

    const database = client.db('mongodb-example');
    const users = database.collection('users');

    const { body, params } = req;
    const result = await users.updateOne(
      { _id: params.id },
      { $set: { name: body.name } }
    );

    await client.close();
    res.status(200).send(result);
  } catch (error) {
    await client.close();
    res.status(500).send(error);
  }
};

export default patchName;
