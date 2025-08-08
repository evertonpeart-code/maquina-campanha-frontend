import React, {useState} from 'react'
import Header from './components/Header'
import CampaignForm from './components/CampaignForm'
import Preview from './components/Preview'
import ChatAssistant from './components/ChatAssistant'
import History from './components/History'

export default function App(){
  const [currentCampaign, setCurrentCampaign] = useState(null)
  const [history, setHistory] = useState([])

  const handleGenerated = (campaign) => {
    setCurrentCampaign(campaign)
    setHistory(prev => [campaign, ...prev])
  }

  const handleDuplicate = (campaign) => {
    const copy = {...campaign, id: Date.now()}
    setHistory(prev => [copy, ...prev])
    setCurrentCampaign(copy)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CampaignForm onGenerated={handleGenerated} />
            <Preview campaign={currentCampaign} onDuplicate={handleDuplicate} />
          </div>
          <aside className="lg:col-span-1 space-y-4">
            <History list={history} onSelect={setCurrentCampaign} />
          </aside>
        </div>
      </div>
      <ChatAssistant />
    </div>
  )
}
