import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  sortbyPrice,
  sortbyDuration,
  sortbyDepartureTime,
  sortbyArrivalTime,
  filterByPriceRange,
} from "../feature/flightSlice";
import { useSelector } from "react-redux";

function Filters() {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState("price");
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const dispatch = useDispatch();
  const farerates = useSelector((state) => state.flightslice.Fare); //for min and max price

  const toggleSortOptions = () => {
    setShowSortOptions((prev) => !prev);
  };

  const togglepriceOptions = () => {
    setShowPriceOptions((prev) => !prev);
  };

  const closeSortOptions = () => {
    setShowSortOptions(false);
  };

  const closepriceOptions = () => {
    setShowPriceOptions(false);
  };

  const handleclick = (e) => {
    const sortType = e.target.getAttribute("name");
    setSelectedSort(sortType);
    switch (sortType) {
      case "price":
        dispatch(sortbyPrice());
        break;
      case "duration":
        dispatch(sortbyDuration());
        break;
      case "departure":
        dispatch(sortbyDepartureTime());
        break;
      case "arrival":
        dispatch(sortbyArrivalTime());
        break;

      default:
        break;
    }
  };

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const applyPriceFilter = () => {
    dispatch(filterByPriceRange(priceRange));
  };

  const clearfilter=()=>{
    setPriceRange({min:0,max:0})
    dispatch(sortbyPrice());
  }

  return (
    <div className="flex gap-5 w-full mt-6 items-center justify-center relative">
        {/* Sort functionality */}
      <Button text={"Sort"} onClick={toggleSortOptions} />
      {showSortOptions && (
        <div className="absolute transition-all duration-200 bg-white shadow-lg shadow-gray-500 border w-[30%]  rounded-lg p-4 mt-2 z-10 top-7">
          <div className="flex justify-between items-center border-b-2 border-gray-400">
            <h4 className="font-semibold px-2">Sort </h4>
            <button onClick={closeSortOptions} className="text-xl font-bold hover:text-slate-500">
              &times;
            </button>
          </div>
          <ul className="mt-2" onClick={handleclick}>
            <li
              className={`px-2 py-4  hover:bg-green-300 rounded-md ${
                selectedSort === "price" ? "bg-green-500 " : ""
              }`}
              name="price"
            >
              Price{" "}
              <span className="text-gray-500" name="price">
                Low to High
              </span>
            </li>

            <li
              className={`px-2 py-4  hover:bg-green-300 rounded-md ${
                selectedSort === "departure" ? "bg-green-500 " : ""
              }`}
              name="departure"
            >
              Departure{" "}
              <span className="text-gray-500" name="departure">
                Earliest first
              </span>
            </li>

            <li
              className={`px-2 py-4  hover:bg-green-300 rounded-md ${
                selectedSort === "arrival" ? "bg-green-500 " : ""
              }`}
              name="arrival"
            >
              {" "}
              Arrival{" "}
              <span className="text-gray-500" name="arrival">
                Earliest first
              </span>
            </li>

            <li
              className={`px-2 py-4  hover:bg-green-300 rounded-md ${
                selectedSort === "duration" ? "bg-green-500 " : ""
              }`}
              name="duration"
            >
              Duration{" "}
              <span className="text-gray-500" name="duration">
                Shortest first
              </span>
            </li>
          </ul>
        </div>
      )}

      {/* Price filter */}
      
      <Button text={"Price"} onClick={togglepriceOptions} />
      {showPriceOptions && (
        <div className="absolute bg-white shadow-lg shadow-gray-500 border w-[30%]  rounded-lg p-4 mt-2 z-10 top-7 transition-all duration-200">
          <div className="flex justify-between items-center border-b-2 border-gray-400">
            <h4 className="font-semibold px-2">Price Filter </h4>
            <button onClick={closepriceOptions} className="text-xl  rounded-full font-bold hover:text-slate-500">
              &times;
            </button>
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <span>Min: {priceRange.min}</span>
              <span>Max: {priceRange.max}</span>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="min-price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Minimum Price
                </label>
                <input
                  id="min-price"
                  type="range"
                  min={farerates[0].pr.minPrice}
                  max={farerates[0].pr.maxPrice}
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceChange}
                  className="w-full mt-2 "
                />
                
              </div>
              <div>
                <label
                  htmlFor="max-price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Maximum Price
                </label>
                <input
                  id="max-price"
                  type="range"
                  min={farerates[0].pr.minPrice}
                  max={farerates[0].pr.maxPrice}
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                  className="w-full mt-2"
                />
                
              </div>
            </div>
            <button
              className="mt-4 w-full bg-green-700 hover:bg-green-500 duration-200 transition-all text-white py-2 rounded-md"
              onClick={applyPriceFilter}
            >
              Apply Filter
            </button>
            <button
              className="mt-4 w-full bg-green-700 transition-all duration-200 hover:bg-green-500 text-white py-2 rounded-md"
              onClick={clearfilter}
            >
              Clear Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
