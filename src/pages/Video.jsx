import React from "react";

const Video = () => {
  return (
    <div>
      <div className="h-full  bg-slate-300 p-6 flex justify-center items-center">
        <iframe
        className="h-[400px] w-[700px] "
        //   width="700"
        //   height="315"
          src="https://www.youtube.com/embed/euCqAq6BRa4?si=bDxOS_-EeJXrZzUr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
