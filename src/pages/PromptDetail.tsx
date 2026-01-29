import React from 'react'
import { useParams } from 'react-router-dom'
import prompts from '../../data/prompts.json'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'

export default function PromptDetail(){
  const { id } = useParams()
  const prompt = prompts.find(p => p.id === id)

  if(!prompt) return <div>Prompt not found</div>

  const copy = async () => {
    try{
      await navigator.clipboard.writeText(prompt.command)
      alert('Copied to clipboard')
    }catch(e){
      alert('Could not copy')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">{prompt.title}</h2>
      <p className="text-sm text-slate-500 mt-1">{prompt.description}</p>

      <div className="mt-4">
        <button onClick={copy} className="px-3 py-2 bg-sky-500 text-white rounded">Copy</button>
      </div>

      <div className="mt-4">
        <div className="rounded overflow-auto bg-slate-900 text-slate-100 p-4">
          <pre className="whitespace-pre-wrap"><code>{prompt.command}</code></pre>
        </div>
      </div>
    </div>
  )
}
