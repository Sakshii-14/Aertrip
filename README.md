The project can be run by cloning this github repo and then run the command :-

npm install

after this command run :-

npm run dev

There were two j arrays. I have implemented the functionality using one j array but the functionalities will work for every dataset provided.

I created a store and reducers for filtering and sorting the flight data and also a custom hook is created for fetching the json data.
I have placed the api-data file in the public folder so that it can be accessed directly via fetch api and the data can be accessed by giving the path url.


This will open the project in your localhost environment
All the sort and Filter functionalities are implemented .

NOTE- Please run the project only for Mumbai to Kolkata flights as for others it will give no flights found because of insufficient data. 
