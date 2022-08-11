import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
