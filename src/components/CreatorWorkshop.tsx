import React from 'react';

export default function CreatorWorkshop() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              专业的创作工坊
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              提供直观的创作工具和专业的创作环境，让您的创意轻松成形。智能辅助功能帮助您提高创作效率，实现快速迭代。
            </p>
            <div className="mt-8 space-y-4">
              {[
                "智能创作助手",
                "专业模板库",
                "实时协作功能",
                "版本控制系统"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="创作工坊界面"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}