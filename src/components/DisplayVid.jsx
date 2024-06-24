import React, { useEffect, useState } from 'react'
import VidNavbar from './VidNavbar.jsx';
import VidFeed from './VidFeed.jsx';
import VidRecs from './VidRecs.jsx';
import { fetchfromAPI } from '../utils/fetchfromAPI.js';

const DisplayVid = () => {
  const [sideVids, setSideVids] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetchfromAPI('', { part: 'snippet', q: '' });
      setSideVids(data.items);
    };

    fetchVideos().catch(error => console.error());
  }, []);

  return (
    <div>
      <VidNavbar />
      <div className="flex mt-5">
        <VidFeed />
        <VidRecs sidebar={sideVids}/>
      </div>
    </div>
  )
}

export default DisplayVid
