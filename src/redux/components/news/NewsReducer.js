import {ADD_NEWS, SET_NEWS, UPDATE_NEW_NEWS_TEXT} from "./NewsActionCreator";

const initialState = {
    newNewsText: '',
    news: [],
    isFetching: true
}

const addNews = (state) => {
    return {
        ...state,
        news: [...state.news, state.newNewsText],
        newNewsText: ''
    }
}

const fillText = (state, text) => {
    return {
        ...state,
        newNewsText: text
    }
}

const setNews = (state, news) => {
    return {
        ...state,
        news: news
    }
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return addNews(state)
        case SET_NEWS:
            return setNews(state, action.news)
        case UPDATE_NEW_NEWS_TEXT:
            return fillText(state, action.text)
        default:
            return state
    }
}

export default NewsReducer;