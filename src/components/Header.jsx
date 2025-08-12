import React from 'react';

export default function Header() {
  const logoUrl =
    'https://github.com/user-attachments/assets/a63f6801-db71-4662-96fd-03ce7b62c471';

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded flex items-center justify-center shadow">
          <img
            src={logoUrl}
            alt="Google Ads Logo"
            className="h-10"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/40x40.png?text=Logo';
            }}
          />
        </div>
        <div>
          <div className="font-semibold">Máquina de Campanha IA</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Google Ads style generator
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
        >
          Docs
        </a>
      </div>
    </header>
  );
}
