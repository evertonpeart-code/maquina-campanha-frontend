import { useState } from 'react'
import api from '../services/api'
import { downloadCSV, downloadTXT, downloadPDF } from '../services/downloads'

export default function CampaignForm({ onGenerated }) {
  const [productUrl, setProductUrl] = useState('')
  const [affiliateUrl, setAffiliateUrl] = useState('')
  const [accountId, setAccountId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  // Validação simples para habilitar o botão
  const isValid = productUrl.trim() && affiliateUrl.trim() && accountId.trim()

  async function handleGenerate() {
    if (!isValid) {
      setError('Preencha todos os campos obrigatórios.')
      setSuccess(null)
      return
    }
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const payload = {
        url_produto: productUrl,
        url_afiliado: affiliateUrl,
        id_google_ads: accountId,
      }
      // chamada API real
      const res = await api.post('/api/gerar-campanha', payload)
      const campaign = res.data || res
      onGenerated(campaign)
      setSuccess('Campanha gerada com sucesso!')
    } catch (e) {
      console.error(e)
      setError('Erro ao gerar campanha. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary">{loading ? 'Gerando campanha...' : 'Criar campanha'}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col">
          <label htmlFor="productUrl" className="mb-1 font-medium text-gray-700 dark:text-gray-300">
            URL do Produto <span className="text-danger">*</span>
          </label>
          <input
            id="productUrl"
            type="url"
            placeholder="https://produto.exemplo.com"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="affiliateUrl" className="mb-1 font-medium text-gray-700 dark:text-gray-300">
            URL do Afiliado <span className="text-danger">*</span>
          </label>
          <input
            id="affiliateUrl"
            type="url"
            placeholder="https://afiliado.exemplo.com"
            value={affiliateUrl}
            onChange={(e) => setAffiliateUrl(e.target.value)}
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="accountId" className="mb-1 font-medium text-gray-700 dark:text-gray-300">
            ID do Google Ads <span className="text-danger">*</span>
          </label>
          <input
            id="accountId"
            type="text"
            placeholder="123-456-7890"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          />
        </div>
      </div>

      {error && (
        <p className="mb-4 text-danger font-medium bg-red-100 dark:bg-red-900 p-3 rounded border border-danger">
          {error}
        </p>
      )}

      {success && (
        <p className="mb-4 text-secondary font-medium bg-green-100 dark:bg-green-900 p-3 rounded border border-secondary">
          {success}
        </p>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleGenerate}
          disabled={!isValid || loading}
          className={`flex-1 py-3 rounded font-semibold text-white transition ${
            !isValid || loading
              ? 'bg-primary/50 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90'
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Gerando...
            </>
          ) : (
            'Gerar Campanha'
          )}
        </button>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => downloadCSV()}
          disabled={loading || !onGenerated}
          className={`px-6 py-2 border rounded font-semibold transition ${
            loading || !onGenerated
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary/10'
          }`}
        >
          Download CSV
        </button>
        <button
          onClick={() => downloadTXT()}
          disabled={loading || !onGenerated}
          className={`px-6 py-2 border rounded font-semibold transition ${
            loading || !onGenerated
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary/10'
          }`}
        >
          Download TXT
        </button>
        <button
          onClick={() => downloadPDF()}
          disabled={loading || !onGenerated}
          className={`px-6 py-2 border rounded font-semibold transition ${
            loading || !onGenerated
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary/10'
          }`}
        >
          Download PDF
        </button>
      </div>
    </section>
  )
}
