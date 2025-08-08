import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
      {/* Logo e título */}
      <header className="flex flex-col items-center mb-8">
        <img
          src="/logo-google-ads.png"
          alt="Logo Google Ads"
          className="w-16 h-16 mb-4"
        />
        <h1 className="text-3xl font-bold text-center">
          Google Máquina Campanha Ads
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
          Crie campanhas de alto desempenho com IA integrada via OpenRouter
        </p>
      </header>

      {/* Botão de ação */}
      <main className="flex flex-col items-center gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition">
          🚀 Gerar Nova Campanha
        </button>
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg shadow-lg transition">
          🌙 Alternar Tema
        </button>
      </main>

      {/* Rodapé */}
      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Máquina de Campanha IA – Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
