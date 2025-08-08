import React from 'react'

export default function History({list,onSelect}){
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Histórico</h4>
      {list.length===0 && <p className="text-sm text-gray-500">Nenhuma campanha gerada ainda.</p>}
      <ul className="space-y-2">
        {list.map((c,i)=>(
          <li key={c.id || i} className="p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={()=>onSelect && onSelect(c)}>
            <div className="text-sm font-medium">{c.title || 'Campanha '+(i+1)}</div>
            <div className="text-xs text-gray-500">{c.createdAt || ''}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
