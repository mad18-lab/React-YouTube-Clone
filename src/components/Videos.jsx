import React from 'react'
import { Link } from 'react-router-dom'

const Videos = ({ videos }) => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-6 p-4 hover:cursor-pointer">
            {videos.map((video, index) => (
                <Link to="/video" key={index}>
                  <div className="flex flex-col gap-2 max-w-[400px]">
                    <img src={video.snippet.thumbnails.high.url} alt="/" className="w-full h-48 object-cover rounded-lg" key={index}/>
                    <p className="font-semibold">{video.snippet.title}</p>
                    <p className="text-[#615f5f]">{video.snippet.channelTitle}</p>
                  </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Videos
