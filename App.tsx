import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Bun + React + TypeScript
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            最小テンプレート
          </h2>
          
          <p className="text-gray-600 mb-4">
            このテンプレートは、Bunを使用したReact + TypeScriptの最小構成です。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-700">高速</h3>
              <p className="text-sm text-gray-600 mt-1">
                Bunによる高速な開発体験
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-700">シンプル</h3>
              <p className="text-sm text-gray-600 mt-1">
                必要最小限の構成
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-semibold text-purple-700">TypeScript</h3>
              <p className="text-sm text-gray-600 mt-1">
                型安全な開発が可能
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              Hot Reloadに対応 - ファイルを編集すると自動的に更新されます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}