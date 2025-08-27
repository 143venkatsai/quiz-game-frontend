import React from "react";

const statusCodes = [
  {
    id: 1,
    value: 1,
    description: "Not Visited",
    textColor: "text-black",
    bgColor: "bg-white",
  },
  {
    id: 2,
    value: 1,
    description: "Not Answered",
    textColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    id: 3,
    value: 1,
    description: "Answered",
    textColor: "text-white",
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    value: 1,
    description: "Mark for Review",
    textColor: "text-white",
    bgColor: "bg-orange-400",
  },
  {
    id: 5,
    value: 1,
    description: "Marked and Answered",
    textColor: "text-white",
    bgColor: "bg-blue-600",
  },
];

const Status = () => {
  return (
    <div className="px-4 py-6 md:px-6 border-b">
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {/* Left column */}
        <div>
          <div className="flex items-center mb-4">
            <span className="bg-white text-black border border-gray-200 rounded-md mr-3 px-4 py-2 font-medium shadow">
              {statusCodes[0].value}
            </span>
            <span className="text-base">{statusCodes[0].description}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white border border-gray-200 rounded-md mr-3 px-4 py-2 font-medium shadow">
              {statusCodes[2].value}
            </span>
            <span className="text-base">{statusCodes[2].description}</span>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-600 text-white border border-gray-200 rounded-md mr-3 px-4 py-2 font-medium shadow">
              {statusCodes[4].value}
            </span>
            <span className="text-base">{statusCodes[4].description}</span>
          </div>
        </div>
        {/* Right column */}
        <div>
          <div className="flex items-center mb-4">
            <span className="bg-red-500 text-white border border-gray-200 rounded-md mr-3 px-4 py-2 font-medium shadow">
              {statusCodes[1].value}
            </span>
            <span className="text-base">{statusCodes[1].description}</span>
          </div>
          <div className="flex items-center">
            <span className="bg-orange-400 text-white border border-gray-200 rounded-md mr-3 px-4 py-2 font-medium shadow">
              {statusCodes[3].value}
            </span>
            <span className="text-base">{statusCodes[3].description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
