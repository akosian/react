import newsItemCss from './NewsItem.module.css';

const NewsItem = () => {
    return (
        <div className={newsItemCss.item}>
            <img src='https://www.meme-arsenal.com/memes/082cf32e5a8846ae89628b2780595cf1.jpg'/>
        </div>
    )
}

export default NewsItem;