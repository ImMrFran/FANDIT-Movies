export interface MoviesResponse {
  page: number
  results: Array<Movie>
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: false
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
  imageUrl?: string
}
