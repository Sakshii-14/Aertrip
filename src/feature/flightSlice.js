import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Data:[],
    flightList:[],
    Fare:[],
}

const flightSlice=createSlice({

    name:'flightslice',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.Data=[...action.payload.data];
            state.Fare=[...action.payload.fare];
        },
        getList: (state, action) => {
            state.flightList = state.Data.filter((flight) => {
                const ttl = flight.leg[0]?.ttl; 
                if (
                    ttl &&
                    ttl[0].toLowerCase() === action.payload.from.toLowerCase() && // 
                    ttl[ttl.length - 1].toLowerCase() === action.payload.to.toLowerCase() 
                ) {
                    return true;
                }
                return false;
            });
        
        },
        sortbyPrice: (state) => {
            state.flightList = state.Data.sort((a, b) => {
                
                const priceA = parseFloat(a.farepr);
                const priceB = parseFloat(b.farepr);
        
                if (priceA < priceB) return -1;  
                if (priceA > priceB) return 1;   
                return 0;  
            });
        },
        sortbyDuration:(state)=>{
            state.flightList = state.Data.sort((a, b) => {
                
                const durationA = parseFloat(a.leg[0]?.flights[0].ft);
                const durationB = parseFloat(b.leg[0]?.flights[0].ft);
        
                if (durationA < durationB) return -1;  
                if (durationA > durationB) return 1;   
                return 0;  
            });
        },
        sortbyDepartureTime: (state) => {
            state.flightList = state.Data.sort((a, b) => {
                
                const timeToMinutes = (time) => {
                    const [hours, minutes] = time.split(':').map(Number);
                    return hours * 60 + minutes;//converted into minutes
                };
        
                const timeA = timeToMinutes(a.leg[0]?.dt); 
                const timeB = timeToMinutes(b.leg[0]?.dt); 
        
                return timeA - timeB; 
            });
        },
        sortbyArrivalTime: (state) => {
            state.flightList = state.Data.sort((a, b) => {
                
                const timeToMinutes = (time) => {
                    const [hours, minutes] = time.split(':').map(Number);
                    return hours * 60 + minutes;//converted into minutes
                };
        
                const timeA = timeToMinutes(a.leg[0]?.at); 
                const timeB = timeToMinutes(b.leg[0]?.at); 
        
                return timeA - timeB; 
            });
        },
        filterByPriceRange: (state, action) => {
            const { min, max } = action.payload;
            state.flightList = state.Data.filter(
              (flight) => flight.farepr >= min && flight.farepr <= max
            );
          }
        
    }

})

export const {setData , getList ,sortbyPrice,sortbyDuration,sortbyDepartureTime,sortbyArrivalTime , filterByPriceRange} =flightSlice.actions;

export default flightSlice.reducer