import React from "react";

const Final = () => {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-400"></div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your PersonalInfo has been created
        </div>
        <a className="mt-10" href="/">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  );
};

export default Final;
