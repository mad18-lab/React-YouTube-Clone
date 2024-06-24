import React, { useMemo } from 'react'

const VidRecs = ({ sidebar }) => {
    const displaySideCards = useMemo(() => sideVideos(sidebar), [sidebar]);
  return (
    <div className="w-[340px]">
        <div className="flex flex-col gap-2">
            {displaySideCards.map((sideCard) => (
                <div className="flex gap-1">
                    <img src={sideCard.url} className="w-24 h-20 rounded-md" alt="/" />
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-sm">{sideCard.title}</h1>
                        <p className="text-sm text-[#313131]">{sideCard.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const sideVideos = (sidebar) => {
    return sidebar.map((side, index) => ({ url: side.snippet.thumbnails.high.url, key: index, title: side.snippet.title, channel: side.snippet.channelTitle }));
}

export default VidRecs
