import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map(video => {
        return (
            <VideoListItem 
                key={video.etag} 
                video={video}
                onVideoSelect={onVideoSelect} 
            />
        )
    })
    return ( 
        <div>
            <ul className='col-md-4 list-group'>
                {videoItems}
            </ul>
        </div>
     );
}
 
export default VideoList;