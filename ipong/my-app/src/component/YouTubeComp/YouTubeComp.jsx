import React from 'react';
import './YouTubeComp.css'; 

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/3MZquQD1rys/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMz5FP88ZxUwauUKMlQWi2QYfVHg" alt={props.alt} />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
};

YoutubeComp.defaultProps = {
    time: '02.00',
    title: 'title here',
    desc: "xx ditonton. x hari yang lalu tapi boong ya"
};

export default YoutubeComp;
