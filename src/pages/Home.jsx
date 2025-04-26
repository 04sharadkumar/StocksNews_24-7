import { useState, useEffect } from 'react';
import BreakingNewsAlert from '../components/news/BreakingNewsAlert';
import NewsHero from '../components/news/NewsHero';
import SpecialFeatures from '../components/news/SpecialFeatures';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Articles from '@/components/news/Articles';

const NextGenNewsHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      setIsLoading(true);
      try {
        
        setTimeout(() => {
        setIsLoading(false);

        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        
        <BreakingNewsAlert breakingNews={[]} />
       
        
        {isLoading ? (<LoadingSpinner />) :  
        (<> 

        <NewsHero />
        <Articles />
        <SpecialFeatures /> 
        
        </>)  }

       
        
        
      </main>
    </div>
  );
};

export default NextGenNewsHome;