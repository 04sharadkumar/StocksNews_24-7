const FeaturedVideo = () => {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Featured Video</h2>
        <div className="relative w-full max-w-3xl mx-auto h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/U7gIvPeOSxc?si=zKxIQseSczxvWVxV"
            title="Featured News Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default FeaturedVideo;