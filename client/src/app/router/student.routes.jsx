import React from 'react';
import { Route } from 'react-router-dom';
import { StudentLayout } from '../../components/layout/StudentLayout/StudentLayout';
import { Dashboard } from '../../modules/student/pages/Dashboard/Dashboard';

export const studentRoutes = (
  <Route path="/student" element={<StudentLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="courses" element={<Dashboard />} />
    <Route path="tests" element={<Dashboard />} />
    <Route path="analytics" element={<Dashboard />} />
    <Route path="live-classes" element={<Dashboard />} />
    <Route path="bookmarks" element={<Dashboard />} />
    <Route path="profile" element={<Dashboard />} />
  </Route>
);

export default studentRoutes;
