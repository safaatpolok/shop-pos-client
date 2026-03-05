

import AdminSettings from '@/pages/superAdmin/AdminSettings';
import AdminDashboard from '@/pages/superAdmin/Dashboard/AdminDashboard';
import AdminLayOut from '@/pages/superAdmin/AdminLayOut';
import PendingRequest from '@/pages/superAdmin/PendingRequest';
import StoreList from '@/pages/superAdmin/StoreList';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Subscription from '../superAdmin/Subscribtion/Subscription';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminLayOut />}>
        <Route index element={<AdminDashboard />} />
        <Route path='dashboard' element={<AdminDashboard />} />
        <Route path='stores' element={<StoreList />} />
        <Route path='request' element={<PendingRequest />} />
        <Route path='subscription' element={<Subscription />} />
        <Route path='settings' element={<AdminSettings />} />




      </Route>
    </Routes>
  );
};

export default AdminRoutes;