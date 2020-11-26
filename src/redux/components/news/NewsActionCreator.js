export const ADD_NEWS = 'ADD-NEWS';
export const SET_NEWS = 'SET-NEWS';
export const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

export const AddNews = () => ({
    type: ADD_NEWS,
})

export const UpdateNewNewsText = (text) => ({
    type: UPDATE_NEW_NEWS_TEXT,
    text: text
})

export const SetNews = (news) => ({
    type: SET_NEWS,
    news: news
})