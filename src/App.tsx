import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './components/sidebar'
import './App.css'
import { Box } from '@mui/material';
import { useEffect } from 'react';

export default function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  console.log(pathname)

  useEffect(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      navigate('/dashboard/home/')
    }
  }, [navigate, pathname])

  return (
    <div className="app-container">
      <Box sx={{ display: { xs: 'none', md: 'block' } }} className="sidebar">
        <Sidebar />
      </Box>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
