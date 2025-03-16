import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">Featured Video</h2>
      <div className="relative w-full max-w-3xl mx-auto h-56 sm:h-72 md:h-80 lg:h-96">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/QxddU3sjVRY?si=JXpw15AdJATps_7i"
          title="Featured News Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FeaturedVideo;