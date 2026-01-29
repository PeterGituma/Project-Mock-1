import React from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-sky-500 flex items-center justify-center text-white font-bold">CL</div>
          <div>
            <h1 className="text-lg font-semibold">CLI Prompts Showcase</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Commonly used command-line snippets</p>
          </div>
        </div>
        <div className="w-1/3">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
