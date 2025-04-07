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
      <div className="text-xl font-semibold text-yellow-500">Systango</div>


      {!isPublic && (
        <div className="flex items-center gap-4">
          <span className="text-sm">{localStorage.getItem('username')}</span>
          <button
            onClick={handleLogout}
            className="bg-black-600 hover:bg-red-700 text-yellow-500 hover:text-white px-3 py-1 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

