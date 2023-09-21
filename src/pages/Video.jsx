import Iframe from "react-iframe";

const Video = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
      <Iframe
        url="https://www.youtube.com/embed/euCqAq6BRa4?si=bDxOS_-EeJXrZzUr"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
