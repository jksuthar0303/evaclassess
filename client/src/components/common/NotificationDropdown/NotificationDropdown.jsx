import React from 'react';
import { Bell, CheckCheck } from 'lucide-react';
import { useNotificationStore } from '../../../stores/notification.store';
import { Dropdown } from '../../ui/Dropdown';

export function NotificationDropdown() {
  const { notifications, unreadCount, markAllAsRead } = useNotificationStore();

  const items = [
    ...notifications.map((n) => ({
      label: `${n.title} - ${n.timestamp}`,
      onClick: () => {},
    })),
    { divider: true },
    {
      label: 'Mark all as read',
      icon: CheckCheck,
      onClick: markAllAsRead,
    },
  ];

  return (
    <Dropdown
      trigger={
        <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900" />
          )}
        </button>
      }
      items={items}
      align="right"
    />
  );
}

export default NotificationDropdown;
