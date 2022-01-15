import { insertUser, selectUserLiset, selectUser } from '../dao/UserDao.js';

export async function postUser(user) {
  const result = await insertUser(user);
  return result;
}

export async function getUserList() {
  const result = await selectUserLiset();
  return result;
}

export async function getUser(name) {
  const result = await selectUser(name);
  return result;
}
export default { postUser, getUserList, getUser };
