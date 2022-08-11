import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [Playing, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (Playing) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
      {/* <VideoFooter /> */}
      {/* <VideoSideBar /> */}
    </div>
  );
}

export default Video;
