import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

export async function insertUser(user) {
  await client.connect();
  client.db('ccms').collection('user').createIndex({ email: 1 }, { unique: 1 });
  console.log(user);
  await client
    .db('ccms')
    .collection('user')
    .insertOne(user)
    .then((item) => item)
    .catch((e) => e);
  return user;
}

export async function selectUserLiset() {
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('user')
    .find({}, {})
    .toArray();
  return result;
}

export async function selectUser(name) {
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('user')
    .find({ name }, {})
    .toArray();
  return result;
}

export default { insertUser, selectUserLiset, selectUser };
