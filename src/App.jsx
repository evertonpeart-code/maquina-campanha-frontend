import { useState, useEffect } from 'react';
import CampaignForm from './components/CampaignForm';
import CampaignPreview from './components/CampaignPreview';
import ToggleTheme from './components/ToggleTheme';

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Recupera o tema salvo ou usa 'light' padrão
    return localStorage.getItem('theme') || 'light';
  });

  const [campaignData, setCampaignData] = useState(null);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <header className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <img
          src="/google-ads-logo.svg"
          alt="Google Ads Logo"
          className="h-10"
        />
        <ToggleTheme theme={theme} setTheme={setTheme} />
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-heading mb-6 text-primary">Máquina de Campanha IA</h1>

        <CampaignForm setCampaignData={setCampaignData} />

        {campaignData && (
          <CampaignPreview campaign={campaignData} />
        )}
      </main>
      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
        Desenvolvido por Everton • Powered by OpenAI GPT-4
      </footer>
    </div>
  );
}
