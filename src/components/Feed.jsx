import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import Videos from './Videos';
import { fetchfromAPI } from '../utils/fetchfromAPI';

const Feed = ({ clicked }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const data = await fetchfromAPI('', { part: 'snippet', q: '' });
            setVideos(data.items);
        };

        fetchVideos().catch(error => console.error(error));
    }, []);

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    {clicked === "true" ? <Sidebar2 /> : <Sidebar />}
                </div>
                <div className="scrollbar-thin">
                    <Videos videos={videos} />
                </div>
            </div>
        </div>
    );
}

export default Feed;