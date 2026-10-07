import React from 'react';
import { Route } from 'react-router-dom';
import { AdminLayout } from '../../components/layout/AdminLayout/AdminLayout';
import { Dashboard } from '../../modules/admin/pages/Dashboard/Dashboard';

export const adminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="users" element={<Dashboard />} />
    <Route path="courses" element={<Dashboard />} />
    <Route path="tests" element={<Dashboard />} />
  </Route>
);

export default adminRoutes;
