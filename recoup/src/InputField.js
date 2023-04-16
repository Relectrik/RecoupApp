import { useState } from 'react'
export default function InputField({ action }) {
  const [query, setQuery] = useState('')
  function submit(e, v) {
    e.preventDefault()
    action(query)
    setQuery('')
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Recycle wut?"
          />
        </div>
      </form>
    </div>
  )
}
