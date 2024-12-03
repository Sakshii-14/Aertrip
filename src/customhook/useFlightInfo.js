import { useEffect, useState } from "react";

function useFlightInfo() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [fare, setfare] = useState([]);//for min and max price

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api-data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok'); 
        }
        const jsonData = await response.json();
        const flights = jsonData?.data?.flights || [];
        const flightdata=flights[0].results.j || [];
        const faredata=flights[0].results.f || [];
        console.log(flightdata);
        console.log(faredata);
        setData(flightdata); 
        setfare(faredata);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  return { data, fare, loading, error }; 
}

export default useFlightInfo;
