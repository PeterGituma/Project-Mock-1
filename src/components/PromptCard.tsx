import React from 'react'
import { Link } from 'react-router-dom'

type Prompt = {
  id: string
  title: string
  category: string
  description?: string
  command: string
  tags?: string[]
}

export default function PromptCard({ prompt }: { prompt: Prompt }){
  return (
    <div className="border rounded p-4 hover:shadow">
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-medium text-lg"><Link to={`/prompt/${prompt.id}`}>{prompt.title}</Link></h3>
          <p className="text-sm text-slate-500">{prompt.description}</p>
        </div>
        <div className="text-xs text-slate-400">{prompt.category}</div>
      </div>
      <pre className="mt-3 rounded bg-slate-900 text-slate-100 p-3 text-sm overflow-auto"><code>{prompt.command}</code></pre>
      <div className="mt-2 flex gap-2 flex-wrap">
        {(prompt.tags||[]).slice(0,4).map(t => (<span key={t} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{t}</span>))}
      </div>
    </div>
  )
}
