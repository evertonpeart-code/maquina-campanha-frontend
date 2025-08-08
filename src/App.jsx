import React, { useState } from 'react';

export default function App() {
  const [urlProduto, setUrlProduto] = useState('');
  const [idGoogleAds, setIdGoogleAds] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState('');

  const gerarCampanha = async () => {
    if (!urlProduto || !idGoogleAds) {
      alert('⚠️ Preencha todos os campos!');
      return;
    }
    setLoading(true);
    setResultado('');

    try {
      const response = await fetch('https://SEU_BACKEND.onrender.com/api/campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          urlProduto,
          idGoogleAds
        })
      });

      const data = await response.json();
      setResultado(data?.mensagem || JSON.stringify(data));
    } catch (error) {
      setResultado('❌ Erro ao gerar campanha.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Google Máquina Campanha Ads</h1>

      <input
        type="text"
        placeholder="URL do Produto"
        value={urlProduto}
        onChange={(e) => setUrlProduto(e.target.value)}
        className="mb-3 p-2 rounded text-black w-80"
      />
      <input
        type="text"
        placeholder="ID do Google Ads"
        value={idGoogleAds}
        onChange={(e) => setIdGoogleAds(e.target.value)}
        className="mb-3 p-2 rounded text-black w-80"
      />

      <button
        onClick={gerarCampanha}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Gerando...' : 'Gerar Campanha'}
      </button>

      {resultado && (
        <pre className="mt-6 p-4 bg-gray-800 rounded w-full max-w-2xl overflow-auto">
          {resultado}
        </pre>
      )}
    </div>
  );
}
