import { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

const ResultContextProvider = ({ children }) => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    })
    if (!response.ok) throw new Error('response not ok')
    const data = await response.json()

    if (type.includes('/news')) {
      setResults(data.entries)
    } else if (type.includes('/image')) {
      setResults(data.image_results)
    } else if (type.includes('/search')) {
      setResults(data.results)
    }

    setIsLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{ term, setTerm, results, getResults, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  )
}

const useResultContext = () => useContext(ResultContext)

export { ResultContextProvider, useResultContext }
