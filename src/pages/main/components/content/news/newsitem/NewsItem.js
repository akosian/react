import newsItemCss from './NewsItem.module.css';
import React from "react";

const NewsItem = (props) => {

    return (
        <div className={newsItemCss.item}>
            <span>{props.newsText}</span>
            <div>
                <img src='https://www.meme-arsenal.com/memes/082cf32e5a8846ae89628b2780595cf1.jpg'/>
            </div>
        </div>
    )
}

export default NewsItem;