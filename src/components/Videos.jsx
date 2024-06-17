import React from 'react'

const Videos = ({ videos }) => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-6 p-4 scrollbar-thin">
            {videos.map((video, index) => (
                <div className="flex flex-col gap-2 max-w-[400px]">
                    <img src={video.snippet.thumbnails.high.url} alt="/" className="w-full h-48 object-cover rounded-lg" key={index}/>
                    <p>{video.snippet.title}</p>
                    <p>{video.snippet.channelTitle}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Videos
