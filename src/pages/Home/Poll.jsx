const Poll = () => {
    return (
      <div className="mt-6 p-4 bg-green-100 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">Your Opinion Matters!</h2>
        <p className="text-gray-600">What is your stance on AI advancements?</p>
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">Positive</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Negative</button>
        </div>
      </div>
    );
  };
  
  export default Poll;
  