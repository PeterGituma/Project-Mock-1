import React from 'react'
import prompts from '../../data/prompts.json'

export default function ExportButtons(){
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(prompts, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'prompts.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportCSV = () => {
    const rows = [ ['id','title','category','command','tags','description'] ]
    prompts.forEach(p => rows.push([p.id, p.title, p.category, p.command.replace(/\n/g,' '), (p.tags||[]).join('|'), p.description||'' ]))
    const csv = rows.map(r => r.map(c => '"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'prompts.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex gap-2">
      <button onClick={exportJSON} className="px-3 py-2 bg-white border rounded">Export JSON</button>
      <button onClick={exportCSV} className="px-3 py-2 bg-white border rounded">Export CSV</button>
    </div>
  )
}
