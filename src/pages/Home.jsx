import { useState, useEffect } from "react";
import BreakingNewsTicker from "@/components/Home/BreakingNewsTicker";
import HeroNews from "@/components/Home/HeroNews";
import WeatherWidget from "@/components/Home/WeatherWidget";
import TrendingTopics from "@/components/Home/TrendingTopics";
import FeaturedVideo from "@/components/Home/FeaturedVideo";
import Poll from "@/components/Home/Poll";
import IndiaNews from "@/components/Home/IndiaNews"

const newsData = [
  {
    id: 1,
    title: "Breaking: Major Political Shift in the Country",
    category: "Politics",
    image: "https://source.unsplash.com/600x400/?news,politics",
    description: "A major political change has taken place, shaking the government foundation...",
    date: "Feb 10, 2025",
  },
  {
    id: 2,
    title: "Tech Giants Announce Revolutionary AI Breakthrough",
    category: "Technology",
    image: "https://source.unsplash.com/600x400/?technology,ai",
    description: "AI innovation reaches new heights as major companies unveil game-changing tech...",
    date: "Feb 09, 2025",
  },
  {
    id: 3,
    title: "Stock Market Hits Record Highs",
    category: "Business",
    image: "https://source.unsplash.com/600x400/?business,finance",
    description: "Investors celebrate as stock market soars beyond expectations...",
    date: "Feb 08, 2025",
  },
];

const trendingTopics = ["Elections 2025", "New AI Breakthroughs", "Crypto Market Trends", "Sports Championships"];

const Home = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 mt-10">
      {/* Breaking News Ticker */}
      <BreakingNewsTicker newsData={newsData} />

      {/* Hero Section */}
      <HeroNews currentNews={newsData[currentNewsIndex]} />

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Trending Topics */}
      <TrendingTopics topics={trendingTopics} />

      {/* Featured Video */}
      <FeaturedVideo />      

      {/* country News */}
      <IndiaNews />

      {/* Poll Section */}
      <Poll />

    </div>
  );
};

export default Home;
