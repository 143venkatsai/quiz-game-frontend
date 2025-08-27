import React from "react";
import { CiGrid41 } from "react-icons/ci";

const Footer = ({ questions, currentQuestion, onSelect, onToggleButton }) => {
  const total_questions = questions.length;
  let start = currentQuestion - 2;
  let end = currentQuestion + 2;

  if (start < 0) {
    end += -start;
    start = 0;
  }
  if (end > total_questions - 1) {
    start -= end - (total_questions - 1);
    end = total_questions - 1;
    if (start < 0) start = 0;
  }

  const visibleQuestions = questions.slice(start, end + 1);

  return (
    // Footer Section Mobile question palette Section
    <>
      <footer className="flex justify-between items-center">
        <ul className="flex overflow-x-auto space-x-2 gap-2 no-scrollbar items-center bg-white">
          {visibleQuestions.map((eachQuestion) => (
            <li key={eachQuestion.id}>
              <button
                className={`rounded cursor-pointer ${currentQuestion === eachQuestion.id - 1 ? "w-10 h-10 border-2 border-blue-500 bg-blue-50 text-lg shadow" : "w-8 h-8 border border-gray-200 bg-white text-gray-800 hover:border-blue-400"}`}
                onClick={() => onSelect(eachQuestion.id - 1)}
              >
                {eachQuestion.id}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <CiGrid41 size={22} onClick={onToggleButton} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
