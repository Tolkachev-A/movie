import React from 'react';

export const Video = (props: VideoType) => {
    return (
        <iframe max-width="560" width="100%" height="315" src={`https://www.youtube.com/embed/${props.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

        </iframe>
    );
};
//type
type VideoType = {
    videoId: string
}

