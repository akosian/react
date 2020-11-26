import NewsItem from "./newsitem/NewsItem";
import {AddNews, SetNews, UpdateNewNewsText} from '../../../../../redux/components/news/NewsActionCreator'
import {connect} from "react-redux";
import NewsContent from "./NewsContent";

let mapStateToProps = (state) => ({
    news: state.newsPage.news,
    newNewsText: state.newsPage.newNewsText
})

let mapDispatchToProps = (dispatch) => ({
    fillText: (text) => {
        dispatch(UpdateNewNewsText(text))
    },
    setNews: (news) => {
        dispatch(SetNews(news))
    },
    addNews: () => {
        dispatch(AddNews())
    }

})

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsContent);

export default NewsContainer;