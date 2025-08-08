import React, {useState} from 'react'
import api from '../services/api'
import { downloadCSV, downloadTXT, downloadPDF } from '../services/downloads'

export default function CampaignForm({onGenerated}){
  const [productUrl,setProductUrl]=useState('')
  const [affiliateUrl,setAffiliateUrl]=useState('')
  const [accountId,setAccountId]=useState('')
  const [loading,setLoading]=useState(false)

  const validate = () => productUrl && affiliateUrl && accountId

  const gerar = async () => {
    if(!validate()){
      alert('Preencha todos os campos obrigatórios.')
      return
    }
    setLoading(true)
    try{
      const payload = { url_produto: productUrl, url_afiliado: affiliateUrl, id_google_ads: accountId }
      const res = await api.post('/api/gerar-campanha', payload)
      const campaign = res.data || res
      onGenerated(campaign)
    }catch(e){
      console.error(e)
      alert('Erro ao gerar campanha.')
    }finally{ setLoading(false) }
  }

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Criar campanha</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={productUrl} onChange={e=>setProductUrl(e.target.value)} placeholder="URL do produto" className="p-2 border rounded" />
        <input value={affiliateUrl} onChange={e=>setAffiliateUrl(e.target.value)} placeholder="URL do afiliado" className="p-2 border rounded" />
        <input value={accountId} onChange={e=>setAccountId(e.target.value)} placeholder="ID do Google Ads" className="p-2 border rounded" />
      </div>
      <div className="flex gap-3 mt-4">
        <button onClick={gerar} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading? 'Gerando...':'Gerar Campanha'}</button>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={()=>downloadCSV()} className="px-3 py-2 border rounded">Download CSV</button>
        <button onClick={()=>downloadTXT()} className="px-3 py-2 border rounded">Download TXT</button>
        <button onClick={()=>downloadPDF()} className="px-3 py-2 border rounded">Download PDF</button>
      </div>
    </section>
  )
}
