import React from "react"; // Import React
import video from "../assets/v.mp4";

const Video = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
      <video
        src={video}
        width="640px"
        height="320px"
        controls // Add 'controls' to display video controls
        allowFullScreen
        autoPlay
/>
    </div>
  );
};

export default Video;
