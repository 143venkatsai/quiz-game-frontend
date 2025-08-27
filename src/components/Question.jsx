import React from "react";

const Question = ({ present, selected, setSelected }) => {
  return (
    <>
      <div>
        <h1 className="text-lg">{present.question}</h1>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-10  mb-10">
          {present.options.map((option) => (
            <label
              key={option.key}
              className={`flex items-center border-2 rounded-lg p-4 cursor-pointer ${selected === option.key ? "border-blue-300 bg-blue-50" : "border-gray-300 bg-white"}`}
            >
              <input
                type="radio"
                className="h-4 w-5 mr-4 accent-blue-500"
                name={option.category}
                checked={selected === option.key}
                onChange={() => setSelected(option.key)}
              />
              <span>{option.value}</span>
            </label>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Question;
