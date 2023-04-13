import { useEffect, useState } from 'react'
import { getMovieInfo } from '../../services/api'

const TestingApi = () => {
  const [data, setData] = useState<unknown>(null)

  useEffect(() => {
    getMovieInfo('502356', 'movie').then((response) => setData(response))
  }, [])
  console.log(data)
  return <h1>Testing</h1>
}

export default TestingApi
