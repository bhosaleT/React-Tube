import React from 'react';

const VideoDetail = ({selectedVideo}) =>{
    return(
        <div>
        {selectedVideo.snippet.title}
        </div>
    )
}

export default VideoDetail;