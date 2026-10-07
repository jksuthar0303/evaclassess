import { DEMO_USERS } from '../../data/users';

export const userService = {
  getProfile: async () => DEMO_USERS[1],
  updateProfile: async (data) => ({ ...DEMO_USERS[1], ...data }),
  getAllUsers: async () => DEMO_USERS,
};

export default userService;
