import flightreducer from './flightSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store= configureStore({
    reducer:{
        flightslice:flightreducer,
    }
})