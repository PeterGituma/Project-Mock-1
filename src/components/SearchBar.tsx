import React from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

export default function SearchBar(){
  const [q, setQ] = React.useState('')
  const navigate = useNavigate()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate({ pathname: '/', search: createSearchParams({ q }).toString() })
  }

  return (
    <form onSubmit={submit} className="flex">
      <input
        className="w-full rounded-l border border-slate-200 px-3 py-2 focus:outline-none"
        value={q}
        placeholder="Search prompts..."
        onChange={e => setQ(e.target.value)}
      />
      <button className="rounded-r bg-sky-500 text-white px-3">Search</button>
    </form>
  )
}
