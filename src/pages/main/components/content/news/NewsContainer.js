import {AddNews, SetNews, UpdateNewNewsText} from '../../../../../redux/components/news/NewsActionCreator'
import {connect} from "react-redux";
import NewsContent from "./NewsContent";

let mapStateToProps = (state) => ({
    news: state.newsPage.news,
    newNewsText: state.newsPage.newNewsText
})

let mapDispatchToProps = {
    fillText: UpdateNewNewsText,
    setNews: SetNews,
    addNews: AddNews
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsContent);

export default NewsContainer;