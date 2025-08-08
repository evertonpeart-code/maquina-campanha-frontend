import React from 'react'

export default function Preview({campaign, onDuplicate}){
  if(!campaign){
    return (
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded shadow text-center">
        <p className="text-gray-500 dark:text-gray-400">Preview da campanha aparecerá aqui após geração.</p>
      </div>
    )
  }
  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{campaign.title || 'Anúncio Principal'}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{campaign.description || 'Descrição do anúncio'}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={()=>onDuplicate && onDuplicate(campaign)} className="px-3 py-1 bg-gray-200 rounded">Duplicar</button>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-500">Preview (desktop)</h4>
        <div className="mt-2 border p-3 rounded bg-white dark:bg-gray-900">
          <div className="text-lg font-semibold">{campaign.headline || campaign.title}</div>
          <div className="text-sm mt-1">{campaign.description}</div>
          <a href={campaign.final_url || '#'} className="text-blue-600 mt-2 inline-block">{campaign.final_url}</a>
        </div>
      </div>
    </div>
  )
}
