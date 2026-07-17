/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/public/PublicLayout';
import Home from './pages/public/Home';
import Sermons from './pages/public/Sermons';
import Events from './pages/public/Events';
import About from './pages/public/About';

import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import AdminSermons from './pages/admin/AdminSermons';
import AdminEvents from './pages/admin/AdminEvents';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="sermons" element={<AdminSermons />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
