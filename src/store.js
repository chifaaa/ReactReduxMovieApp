import {createStore, combineReducers} from 'redux'

const ratingFilterReducer = (state = 0, action) => {
    if(action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

const titleFilterReducer = (state = '', action) => {
    if(action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

const moviesReducer = (state = [], action) => {
    if(action.type === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    if(action.type === 'EDIT_MOVIE') {
        return state.map(m => {
            if(m.id === action.id) {
                return action.movie
            }
            return m
        })
    }
    if(action.type === 'DELETE_MOVIE') {
        return state.filter(m => {
            if(m.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}

const store = createStore(combineReducers({
    movies: moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
}))

/*
    TESTING
 */

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        id: 'whatever',
        title: 'Whatever',
        rating: 2,
        year: 1900
    }
})

const inception = {
  id: 'inception',
  title: 'Inceptionnnn',
  rating: 5,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}

const shawshank = {
    id: 'shawshank',
    title: 'Shawshank Redeption',
    year: 1994,
    rating: 5
}

store.dispatch({
    type: 'ADD_MOVIE',
    movie: inception
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: shawshank
})

export default store
