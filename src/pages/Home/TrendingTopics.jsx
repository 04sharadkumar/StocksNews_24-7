const TrendingTopics = ({ topics }) => {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="bg-gray-200 p-3 rounded-md text-center">{topic}</div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrendingTopics;
  