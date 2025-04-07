import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isPublic = location.pathname === '/' || location.pathname === '/login';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="w-full bg-black text-white py-3 px-6 shadow-md flex justify-between items-center">
      <div className="text-xl font-semibold">Systango</div>

      {!isPublic && (
        <div className="flex items-center gap-4">
          <span className="text-sm">{localStorage.getItem('username')}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

