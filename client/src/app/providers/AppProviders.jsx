import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../stores/auth.store';
import { ThemeProvider } from '../../stores/theme.store';
import { UIProvider } from '../../stores/ui.store';
import { NotificationProvider } from '../../stores/notification.store';
import { QueryProvider } from './QueryProvider';

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UIProvider>
            <NotificationProvider>
              <QueryProvider>
                {children}
              </QueryProvider>
            </NotificationProvider>
          </UIProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
