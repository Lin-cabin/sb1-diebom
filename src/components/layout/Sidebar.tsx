import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Palette, 
  FolderKanban, 
  ShoppingBag, 
  Settings,
  Users,
  Home
} from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: '首页',
    path: '/',
    icon: <Home className="w-5 h-5" />
  },
  {
    title: '控制台',
    path: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />
  },
  {
    title: '创作工坊',
    path: '/dashboard/workshop',
    icon: <Palette className="w-5 h-5" />
  },
  {
    title: '项目管理',
    path: '/dashboard/projects',
    icon: <FolderKanban className="w-5 h-5" />
  },
  {
    title: '模型市场',
    path: '/marketplace',
    icon: <ShoppingBag className="w-5 h-5" />,
    badge: 'New'
  },
  {
    title: '团队管理',
    path: '/teams',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: '系统设置',
    path: '/settings',
    icon: <Settings className="w-5 h-5" />
  }
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div 
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={() => onToggle(!isCollapsed)}
          className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center px-2 py-2 rounded-lg text-sm font-medium transition-colors relative group ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center flex-1">
                    {item.icon}
                    {!isCollapsed && (
                      <span className="ml-3">{item.title}</span>
                    )}
                    {!isCollapsed && item.badge && (
                      <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-6 hidden group-hover:block z-50">
                      <div className="bg-gray-900 text-white text-sm rounded-md py-1 px-2 whitespace-nowrap">
                        {item.title}
                        {item.badge && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/20">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="absolute top-1/2 -left-1 -mt-1 border-4 border-transparent border-r-gray-900"></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">张三</p>
                <p className="text-xs text-gray-500">管理员</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}