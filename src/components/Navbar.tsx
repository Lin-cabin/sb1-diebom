import React, { useState } from 'react';
import { Brush, User, LogOut, Settings, CreditCard, BarChart2, Crown, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleCreateClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Brush className="h-8 w-8 text-indigo-600" />
            <div className="ml-2">
              <span className="text-xl font-bold text-gray-900">蜂潮</span>
              <span className="text-lg font-medium text-indigo-600">AIGC共创平台</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button onClick={() => navigate('/marketplace')} className="text-gray-700 hover:text-indigo-600 transition-colors">模型市场</button>
            <button onClick={() => navigate('/dashboard/workshop')} className="text-gray-700 hover:text-indigo-600 transition-colors">创作工坊</button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-indigo-500"
                  />
                  <div className="text-left">
                    <span className="block text-sm font-medium">{user.name}</span>
                    <span className="block text-xs text-gray-500">
                      {user.role === 'student' ? '学习用户' : '实训用户'}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 border border-gray-100">
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                          alt={user.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.role === 'student' ? '学习用户' : '实训用户'}</p>
                          <div className="flex items-center mt-1">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs text-yellow-600 ml-1">高级会员</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Platform Stats */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">52</p>
                          <p className="text-xs text-gray-500">作品</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">1.2k</p>
                          <p className="text-xs text-gray-500">关注</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">8.5k</p>
                          <p className="text-xs text-gray-500">积分</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/profile')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <User className="h-4 w-4 mr-3 text-gray-400" />
                        个人资料
                      </button>
                      <button
                        onClick={() => navigate('/profile/stats')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <BarChart2 className="h-4 w-4 mr-3 text-gray-400" />
                        数据统计
                      </button>
                      <button
                        onClick={() => navigate('/profile/membership')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <CreditCard className="h-4 w-4 mr-3 text-gray-400" />
                        会员中心
                      </button>
                      <button
                        onClick={() => navigate('/profile/settings')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Settings className="h-4 w-4 mr-3 text-gray-400" />
                        账号设置
                      </button>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        退出登录
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={handleCreateClick}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
              >
                开始创作
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}