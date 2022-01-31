import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';

const init = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('mongodb-example');
    await database.dropDatabase(); // database 삭제

    const users = database.collection('users');
    // document를 생성할 때 부모인 db와 collection이 없으면 자동으로 생성한다.
    const result = await users.insertMany([
      { name: 'John' },
      { name: 'Peter' },
      { name: 'Mike' },
    ]);
    console.log('result:', result);

    await client.close();
  } catch (error) {
    console.log(error);
    await client.close();
  }
};

init();
