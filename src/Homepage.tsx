import React, { useState, useEffect } from 'react';
import './home.css';
interface Passenger {
  name: string;
  trips: number;
}

const Homepage: React.FC = () => {
  const [data, setData] = useState<Passenger[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Fetching data from the API
        const response = await fetch('https://api.instantwebtools.net/v1/passenger?page=0&size=10');
        const jsonData = await response.json();

        // Extracting the 'data' array from the JSON response
        const newData: Passenger[] = jsonData.data || [];

        // Updating the state with the new data
        setData(prevData => [...prevData, ...newData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // Function to handle infinite scrolling
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Checking if the user has scrolled to the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage(prevPage => prevPage + 1);
    }
  };

  // Adding scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset the state when the page is refreshed
  useEffect(() => {
    setData([]);
    setPage(0);
  }, []);

  return (
    <div>
      <h1 className='data'>Passenger Data</h1>
      <div className='home'>
        
        {data.map((item, index) => (
          <div className='passenger' key={index}>
            <h2>{item.name}</h2>
            <p>Trips: {item.trips}</p>
            <hr />
          </div>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Homepage;








