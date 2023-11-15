import axios from 'axios';
import { IUser } from '../types';

const apiPath = 'https://ylab-testtask-server.vercel.app/api';

const userPaths = {
  create: () => [apiPath, 'users', 'signup'].join('/'),
  verify: () => [apiPath, 'users', 'verify'].join('/')
}

class UserService {
  async create(values: IUser) {
    await axios.post(userPaths.create(), values);
  }

  async verify(token: string) {
    await axios.post(userPaths.verify(), { token });
  }
}

const userService = new UserService();

export default userService;
