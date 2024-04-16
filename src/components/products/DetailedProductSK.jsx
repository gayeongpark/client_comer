import React from "react";
// This is the component for the detailedProduct component
// It should be updated
export default function DetailedProductSK() {
  return (
    <div className="animate-pulse">
      <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Title and location placeholders */}
        {/* <h1 className="bg-gray-400 h-12 rounded-md"></h1> */}
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            {/* <MdLocationOn className="text-gray-500" /> */}
            <div className="bg-gray-300 h-4 w-24 rounded-md"></div>
          </div>
          {/* <BsHeart className="text-gray-500" /> */}
        </div>

        {/* Image gallery placeholder */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:mt-6 mt-6">
          <div className="bg-gray-300 rounded-lg h-60 lg:h-80"></div>
          <div className="bg-gray-300 rounded-lg h-60 lg:h-80"></div>
          <div className="bg-gray-300 rounded-lg h-60 lg:h-80"></div>
        </div>

        {/* Tag and booking option placeholders */}
        <div className="flex flex-wrap mt-4">
          <div className="bg-gray-300 h-6 w-16 rounded-md mr-2"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-md mr-2"></div>
        </div>
      </div>
    </div>
  );
}
