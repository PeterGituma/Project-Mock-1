import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../SearchBar'
import { BrowserRouter } from 'react-router-dom'

test('renders and allows typing', async () => {
  render(<BrowserRouter><SearchBar /></BrowserRouter>)
  const input = screen.getByPlaceholderText(/Search prompts/i)
  await userEvent.type(input, 'git')
  expect((input as HTMLInputElement).value).toBe('git')
})
