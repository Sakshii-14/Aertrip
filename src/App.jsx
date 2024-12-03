import { useState ,useEffect} from 'react'
import useFlightInfo from './customhook/useFlightInfo'
import Header from './components/Header';
import { useDispatch ,useSelector } from 'react-redux';
import { setData } from './feature/flightSlice';
import Filters from './components/Filters';
import Flightcard from './components/Flightcard';

function App() {
  const { data, fare , loading, error } = useFlightInfo();
  const dispatch=useDispatch();
  const flights = useSelector((state) => state.flightslice.flightList);
  
  useEffect(() => {
    if (data.length > 0) {
      dispatch(setData({ data , fare }));
    }
  }, [data, dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;
 
  return (
   <>
     <Header/>
     <Filters></Filters>
     <div className='w-full flex flex-col gap-4 mt-5 px-8 py-6'>
      {
        flights.length>0? flights.map((flight,index)=><Flightcard key={index} flight={flight}/>) : <p>No flights found </p>

      }
     </div>
   </>
  )
}

export default App
