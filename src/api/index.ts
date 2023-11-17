import axios from 'axios';
import { IUser } from '../types';

const apiPath = 'https://ylab-testtask-server.vercel.app/api';

const userPaths = {
  create: () => [apiPath, 'users', 'login'].join('/'),
}

class UserService {
  async login(values: IUser) {
    await axios.post<void>(userPaths.create(), values);
  }
}

const userService = new UserService();

export default userService;
