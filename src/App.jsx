import { useState, useEffect } from 'react';
import CampaignForm from './components/CampaignForm';
import CampaignPreview from './components/CampaignPreview';
import ToggleTheme from './components/ToggleTheme';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleGenerate = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      // Supondo que CampaignForm chame essa função com os dados do form
      // Aqui você pode fazer chamada API diretamente, mas no seu form já tem isso
      // Se preferir, deixe o form fazer a requisição e só passar a campanha pronta.
      // Neste exemplo, vou supor que o form já envia a campanha via setCampaignData.
      setCampaignData(formData);
    } catch (err) {
      setError('Erro ao gerar a campanha. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDuplicate = (campaign) => {
    // Duplica a campanha e atualiza o estado (gera novo objeto para permitir edição se quiser)
    const duplicated = { ...campaign, id: Date.now() };
    setCampaignData(duplicated);
  };

  const handleReset = () => {
    setCampaignData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col">
      <header className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <img src="/google-ads-logo.svg" alt="Google Ads Logo" className="h-10" />
        <ToggleTheme theme={theme} setTheme={setTheme} />
      </header>

      <main className="max-w-4xl mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-heading mb-6 text-primary text-center">Máquina de Campanha IA</h1>

        <CampaignForm onGenerated={setCampaignData} loading={loading} />

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
        )}

        {!campaignData && !loading && (
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400 italic">
            Preencha os dados acima e clique em "Gerar Campanha" para começar.
          </p>
        )}

        {loading && (
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400 italic">Gerando campanha...</p>
        )}

        {campaignData && !loading && (
          <>
            <CampaignPreview campaign={campaignData} onDuplicate={handleDuplicate} />
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-danger text-white rounded hover:bg-red-600 transition"
              >
                Resetar Campanha
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
        Desenvolvido por Everton • Powered by OpenAI GPT-4
      </footer>
    </div>
  );
}
