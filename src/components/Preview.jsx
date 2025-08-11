import React from 'react'

export default function Preview({ campaign, onDuplicate }) {
  if (!campaign) {
    return (
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <p className="text-gray-500 dark:text-gray-400 italic">Preview da campanha aparecerá aqui após geração.</p>
      </div>
    )
  }

  return (
    <section className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-4xl mx-auto">
      <header className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {campaign.title || 'Anúncio Principal'}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300 max-w-prose">{campaign.description || 'Descrição do anúncio'}</p>
        </div>
        {onDuplicate && (
          <button
            onClick={() => onDuplicate(campaign)}
            className="self-start px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title="Duplicar campanha"
          >
            Duplicar
          </button>
        )}
      </header>

      <article className="border border-gray-300 dark:border-gray-700 rounded-md p-5 bg-gray-50 dark:bg-gray-900 shadow-sm">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Preview (desktop)</h4>
        <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">{campaign.headline || campaign.title}</div>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{campaign.description}</p>
        {campaign.final_url ? (
          <a
            href={campaign.final_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-primary hover:underline break-all"
          >
            {campaign.final_url}
          </a>
        ) : (
          <span className="mt-3 inline-block text-gray-400 italic">URL final não disponível</span>
        )}
      </article>
    </section>
  )
}
