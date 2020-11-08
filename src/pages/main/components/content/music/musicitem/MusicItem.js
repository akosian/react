import musicItemCss from './MusicItem.module.css'

const MusicItem = () => {
    return (
        <div className={musicItemCss.item}>
            <span>Track 1</span>
        </div>
    )
}

export default MusicItem;