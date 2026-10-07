import React, { useEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { publicRoutes } from './public.routes';
import { studentRoutes } from './student.routes';
import { adminRoutes } from './admin.routes';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {publicRoutes}
        {studentRoutes}
        {adminRoutes}
      </Routes>
    </>
  );
}

export default AppRouter;
