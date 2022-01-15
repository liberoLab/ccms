import express from 'express';
import User from '../model/User.js';
import { postUser, getUserList, getUser } from '../service/UserSerevice.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const user = new User(req.body);
  const result = await postUser(user);
  res.json(result);
});

router.get('/', async (req, res) => {
  const result = await getUserList();
  res.json(result);
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const result = await getUser(name);
  res.json(result);
});

export default router;
