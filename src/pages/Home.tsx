import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PromptList from '../components/PromptList'
import prompts from '../../data/prompts.json'
import ExportButtons from '../components/ExportButtons'

export default function Home(){
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const [category, setCategory] = React.useState('All')

  const cats = React.useMemo(() => ['All', ...Array.from(new Set(prompts.map(p => p.category)))], [])

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex gap-2 items-center">
          {cats.map(c => (
            <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1 rounded ${category===c ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>{c}</button>
          ))}
        </div>
        <ExportButtons />
      </div>

      <PromptList query={q} category={category} />
    </div>
  )
}
