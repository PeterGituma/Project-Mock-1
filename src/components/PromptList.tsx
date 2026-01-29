import React from 'react'
import prompts from '../../data/prompts.json'
import PromptCard from './PromptCard'

export default function PromptList({ query='', category='All' }: { query?: string, category?: string }){
  const items = prompts.filter(p => {
    const matchesQ = query === '' || [p.title, p.description, p.command, ...(p.tags||[])].join(' ').toLowerCase().includes(query.toLowerCase())
    const matchesCat = category === 'All' || p.category === category
    return matchesQ && matchesCat
  })

  if(!items.length) return <div className="text-center text-slate-500 py-8">No prompts found</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map(p => <PromptCard key={p.id} prompt={p} />)}
    </div>
  )
}
