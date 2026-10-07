import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    {
      id: 'notif_1',
      title: 'UPSC Prelims Mock 4 Live Now',
      message: 'All-India Rank mock test 4 is open for testing until Sunday 6 PM.',
      timestamp: '10 mins ago',
      read: false,
      type: 'test',
    },
    {
      id: 'notif_2',
      title: 'Daily Current Affairs PDF uploaded',
      message: 'Comprehensive Daily Digest for Today is ready for download.',
      timestamp: '1 hour ago',
      read: false,
      type: 'material',
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const value = { notifications, markAllAsRead, markAsRead, unreadCount };

  return React.createElement(NotificationContext.Provider, { value }, children);
}

export function useNotificationStore() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotificationStore must be used within a NotificationProvider');
  }
  return context;
}
