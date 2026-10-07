export const notificationService = {
  getNotifications: async () => [],
  markRead: async (id) => ({ id, read: true }),
};

export default notificationService;
