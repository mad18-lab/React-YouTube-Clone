import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const Videos = ({ videos }) => {
  const displayCards = useMemo(() => videoCards(videos), [videos]);
  
  return (
    <div>
        <div className="grid grid-cols-3 gap-6 p-4">
            {displayCards.map((card) => (
                <Link to="/video">
                  <div className="flex flex-col gap-2 max-w-[400px] hover:cursor-pointer">
                    <img src={card.url} alt="/" className="w-full h-48 object-cover rounded-lg" key={card.index}/>
                    <p className="font-semibold">{card.title}</p>
                    <p className="text-[#615f5f]">{card.channel}</p>
                  </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

const videoCards = (videos) => {
  return videos.map((video, index) => ({ url: video.snippet.thumbnails.high.url, key: index, title: video.snippet.title, channel: video.snippet.channelTitle }));
}

export default Videos
