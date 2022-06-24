import { useEffect } from 'react'
import { Links } from './Links'
import { useDebounce } from '../hooks/useDebounce'
import { useResultContext } from '../contexts/ResultContextProvider'
import { useState } from 'react'

export const Search = () => {
  const [text, setText] = useState('')
  const { setTerm } = useResultContext()
  const debouncedValue = useDebounce(text, 300)

  useEffect(() => {
    if (debouncedValue) setTerm(debouncedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <div className='search-wrapper'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='search...'
      />
      <Links />
    </div>
  )
}
