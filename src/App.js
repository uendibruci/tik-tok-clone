import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import axios from "axios";
const url =
  "https://api.airtable.com/v0/appRL5de5AIbHvpAH/Table%201?api_key=keySRHOI6xf7M04NJ";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((r) => setVideos(r.data.records))
      .catch((error) => console.log(error));
  }, []);
  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video.id}
            url={video.fields.url}
            channel={video.fields.channel}
            description={video.fields.description}
            song={video.fields.song}
            likes={video.fields.likes}
            messages={video.fields.messages}
            shares={video.fields.shares}
          />
        ))}
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
