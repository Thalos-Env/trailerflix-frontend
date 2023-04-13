import axios from 'axios'

export const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env

const basicFetch = async (endpoint: string) => {
  const response = await axios.get(`${REACT_APP_API_URL}${endpoint}`)

  return response
}

export const getMovieInfo = async (movieId: string, type: string) => {
  let info

  if (movieId) {
    switch (type) {
      case 'movie':
        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${REACT_APP_API_KEY}`)
        break
      case 'tv':
        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${REACT_APP_API_KEY}`)
        break
      default:
        info = null
        break
    }
  }

  return info
}
