import React, {useState} from 'react'
import api from '../services/api'

export default function ChatAssistant(){
  const [open,setOpen]=useState(false)
  const [messages,setMessages]=useState([])
  const [input,setInput]=useState('')
  const toggle = ()=> setOpen(o=>!o)
  const send = async ()=>{
    if(!input) return
    const userMsg = {role:'user', content: input}
    setMessages(m=>[...m,userMsg])
    setInput('')
    try{
      const res = await api.post('/api/chat', {message: input})
      const bot = {role:'assistant', content: res.data?.reply || 'Resposta da IA.'}
      setMessages(m=>[...m,bot])
    }catch(e){
      setMessages(m=>[...m,{role:'assistant', content:'Erro ao conectar IA.'}])
    }
  }
  return (
    <>
      <button onClick={toggle} className="fixed right-6 bottom-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50">
        💬
      </button>

      {open && (
        <div className="fixed right-6 bottom-20 w-80 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 p-3">
          <div className="h-48 overflow-auto space-y-2">
            {messages.map((m,i)=>(<div key={i} className={m.role==='user'?'text-right':'text-left'}><span className="inline-block p-2 rounded bg-gray-100 dark:bg-gray-700">{m.content}</span></div>))}
          </div>
          <div className="mt-2 flex gap-2">
            <input className="flex-1 p-2 rounded border" value={input} onChange={e=>setInput(e.target.value)} placeholder="Pergunte à IA..." />
            <button onClick={send} className="px-3 py-1 bg-blue-600 text-white rounded">Enviar</button>
          </div>
        </div>
      )}
    </>
  )
}
