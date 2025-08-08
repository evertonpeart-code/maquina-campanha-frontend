import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded flex items-center justify-center shadow">
          <span className="font-bold text-blue-600">MA</span>
        </div>
        <div>
          <div className="font-semibold">Máquina de Campanha IA</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Google Ads style generator</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a className="text-sm text-gray-600 dark:text-gray-300">Docs</a>
      </div>
    </header>
  )
}
