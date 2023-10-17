import React from "react"; // Import React
import video from "../assets/v.mp4";

const Video = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center p-2" >
      <iframe
        width="560"
        height="400"
        src="https://www.youtube.com/embed/WqKbbXseJ3c?si=W6meL5hOU95Q49e3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
