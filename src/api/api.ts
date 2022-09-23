import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://imdb-api.com/en/API/'
})

const key = 'k_x297nk26'

export const api = {
    fetchMovies: async () => {
        const res = await instance.get<responseData>(`AdvancedSearch/${key}?title_type=feature&release_date=2022-01-01,2022-07-07`)
        return res.data.results
    },
    fetchInfoMovie: async (id: string) => {
        const res = await instance.get<DataMovieResponseType>(`Title/${key}/${id}/Wikipedia`)
        return res.data
    },
    fetchYouTubeTrailer: async (id: string) => {
        const res = await instance.get<DataYuTubeResponseType>(`YouTubeTrailer/${key}/${id}`)
        return res.data
    },
}
//type
type responseData = {
    errorMessage: boolean
    queryString: string
    results: ItemsMostPopularMoviesType[]
}
export type ItemsMostPopularMoviesType = {
    id: string
    image: string
    title: string
    description: string
    runtimeStr: string
    genres: string
    genreList: [key: string, value: string]
    contentRating: string
    imDbRating: string
    imDbRatingVotes: string
    metacriticRating: string
    plot: string
    stars: string
    starList: [id: string, name: string]
}
export type DataMovieResponseType = {
    id: string
    image: string
    title: string
    year: string
    releaseDate: string
    runtimeStr: string
    plot: string
    stars: string
    actorList: [{
        id: string
        image: string
        name: string
        asCharacter: string
    }]
    genres: string
    countries: string
    imDbRating: string
    wikipedia: { imDbId: string, plainText: string }
}
export type DataYuTubeResponseType = { videoId: string }
