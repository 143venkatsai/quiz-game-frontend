import React from "react";
import questions from "../mockData/questions";

const QuestionNaigator = ({
  palleteQuestion,
  currentQuestion,
  closeSidebar,
}) => {
  const handleQuestion = (id) => {
    palleteQuestion(id);
    closeSidebar();
  };

  // console.log(currentQuestion);

  return (
    // Question Navigation container
    <>
      <div className="flex flex-col px-4 py-6 md:px-6">
        <h1 className="text-center font-semibold">Choose a Questions</h1>
        <ul className="grid grid-cols-5 mx-auto gap-3 mt-10">
          {questions.map((eachQuestion) => {
            // console.log(eachQuestion.id - 1 === currentQuestion);
            return (
              <li key={eachQuestion.id}>
                <button
                  className={`border-2 w-12 h-12 rounded cursor-pointer ${currentQuestion === eachQuestion.id - 1 ? "border-blue-500 bg-blue-100" : "border-gray-200 bg-white"}`}
                  onClick={() => handleQuestion(eachQuestion.id)}
                  disabled={eachQuestion.id === 0}
                >
                  {eachQuestion.id}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default QuestionNaigator;
