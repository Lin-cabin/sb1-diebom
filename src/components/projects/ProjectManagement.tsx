import React, { useState } from 'react';
import { Plus, Calendar, Users, Clock, CheckCircle, AlertCircle, ArrowRight, Filter, Search, LayoutGrid, List, ChevronDown } from 'lucide-react';
import ProjectList from './ProjectList';
import ProjectTimeline from './ProjectTimeline';

export default function ProjectManagement() {
  const [view, setView] = useState<'grid' | 'timeline'>('grid');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">项目管理</h1>
              <p className="mt-1 text-sm text-gray-500">管理和追踪您的创意项目</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <Plus className="h-5 w-5 mr-2" />
                创建新项目
              </button>
            </div>
          </div>

          {/* Enhanced Filters and Search */}
          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            {/* Search Bar with Enhanced Design */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="搜索项目名称、描述..."
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters Group */}
            <div className="flex gap-3 items-center">
              {/* Status Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm font-medium text-gray-700 cursor-pointer min-w-[140px]"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">所有状态</option>
                  <option value="active">进行中</option>
                  <option value="completed">已完成</option>
                  <option value="pending">未开始</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* View Toggle with Enhanced Design */}
              <div className="bg-gray-100 p-1 rounded-lg flex items-center">
                <button
                  onClick={() => setView('grid')}
                  className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    view === 'grid'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <LayoutGrid className="h-4 w-4 mr-1.5" />
                  网格
                </button>
                <button
                  onClick={() => setView('timeline')}
                  className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    view === 'timeline'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="h-4 w-4 mr-1.5" />
                  时间轴
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'grid' ? (
          <ProjectList searchTerm={searchTerm} filterStatus={filterStatus} />
        ) : (
          <ProjectTimeline searchTerm={searchTerm} filterStatus={filterStatus} />
        )}
      </div>
    </div>
  );
}