import React from 'react';

// Youtube Player
import ReactPlayer from 'react-player';

// Css
import style from './video.module.css';

const Video = () => {

    

    return (

        <div className='VideoPlay'>

            <div className={style.VideoPlayers}>

                <ReactPlayer url='https://www.youtube.com/watch?v=gt9GiVJNG5U' />

            </div>
        
        </div>
        
    )

}

export default Video
