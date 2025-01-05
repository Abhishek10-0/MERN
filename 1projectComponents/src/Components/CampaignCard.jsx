import React from 'react';

const CampaignCard = ({ title, amountRaised = 0, goal = 0, daysLeft = 0 }) => {
  // Calculate progress percentage
  const progressPercentage = Math.min((amountRaised / goal) * 100, 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden my-4">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div
          className="absolute top-0 -mt-1 h-5 w-1 bg-red-500"
          style={{ left: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mb-2">
        ${amountRaised.toLocaleString()} raised of ${goal.toLocaleString()} goal
      </p>
      <p className="text-sm text-gray-500 mb-4">{daysLeft} days left</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default CampaignCard;
