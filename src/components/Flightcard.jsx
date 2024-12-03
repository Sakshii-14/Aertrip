import React from 'react';

function Flightcard({ flight }) {
  
  const departureTime = flight.leg[0]?.dt;
  const arrivalTime = flight.leg[0]?.at;
  const airline = flight.leg[0]?.al[0]; 
  const arrival=flight.leg[0]?.flights[0].fr;
  const destination=flight.leg[0]?.flights[0].to;
  const airlineLogo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU`; 
  const fare = flight.farepr ;
  const duration=flight.leg[0]?.flights[0].ft;

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600); 
    const minutes = Math.floor((seconds % 3600) / 60); 
    return `${hours}h ${minutes}m`; 
  };

  return (
    <div className="flight-card border border-gray-300 rounded-lg p-4 shadow-lg flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        <img
          src={airlineLogo}
          alt={airline}
          className="h-12 w-12 object-contain rounded-lg"
        />
        <div>
          <h4 className="text-xl font-medium">{airline}</h4>
        </div>
      </div>

      
      <div className="flex gap-8 flex-grow justify-center">
        <div className="text-center">
          <p className='font-medium'>{departureTime}</p>
          <h5 className="text-lg ">{arrival}</h5>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <p>{formatDuration(duration)}</p>
            <p>--------------------------&gt;</p>
        </div>
        <div className="text-center">
          <p className='font-medium'>{arrivalTime}</p>
          <h5 className="text-lg ">{destination}</h5>
        </div>
      </div>

      
      <div className="text-right flex gap-3 text-green-600 justify-center items-center">
        <p className='font-medium'>{fare ? `₹${fare}` : 'Not available'}</p>
        <h5 className="border border-green-400 px-2 py-1 rounded-lg ">View Fares</h5>
      </div>
    </div>
  );
}

export default Flightcard;
