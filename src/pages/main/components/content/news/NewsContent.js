import React from "react";
import NewsItem from "./newsitem/NewsItem";
import NewNewsForm from "./NewNewsForm";


const NewsContent = (props) => {
    if (props.news.length === 0) {
        props.setNews(['News1', 'News2'])
    }

    return (
        <div>
            {props.news.map(newsItem => <NewsItem newsText={newsItem}/>)}
            <NewNewsForm fillText={props.fillText} onAddNews={props.addNews} newNewsText={props.newNewsText}/>
        </div>
    )
}

export default NewsContent;