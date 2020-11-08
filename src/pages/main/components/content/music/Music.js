import MusicItem from "./musicitem/MusicItem";
import MusicCss from './Music.css'

const Music = () => {
    return (
        <div className={MusicCss.item}>
            <div>Music List</div>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
        </div>
    )
}

export default Music;