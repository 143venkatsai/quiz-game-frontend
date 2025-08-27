import React, { useState } from "react";
import questions from "../mockData/questions";
import Question from "./Question";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const TOTAL_QUESTIONS = questions.length;

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  const [answers, setAnswers] = useState({});
  console.log(answers);

  const changeQuestion = (direction) => {
    setCurrentQuestion((prev) => {
      if (direction === "prev" && prev > 0) return prev - 1;
      if (direction === "next" && prev < TOTAL_QUESTIONS) return prev + 1;
      return prev;
    });
  };

  const present = questions[currentQuestion];
  console.log(currentQuestion);
  console.log(present);
  console.log(questions);

  const setSelectedAnswer = (key) => {
    setAnswers((prev) => ({
      ...prev,
      [present.id]: key,
    }));
  };

  const changePalleteQuestion = (id) => {
    setCurrentQuestion(id - 1);
  };

  const openToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  console.log(toggleButton);

  return (
    <>
      <div className="flex flex-col">
        {/* Navbar */}
        <Navbar category={present.category} />

        {/* Main section */}
        <div className="flex flex-col lg:flex-row" style={{ height: "90vh" }}>
          <div className="flex flex-col justify-between flex-1 ">
            <div className="flex flex-col p-4 md:px-8 py-4 flex-grow">
              <p className="font-mono text-gray-500 text-lg mb-1">
                Question {present.id} of 20 |{" "}
                <span className="text-green-500">1 Mark</span>
              </p>

              {/* Question */}
              <Question
                present={present}
                selected={answers[present.id]}
                setSelected={setSelectedAnswer}
              />
            </div>

            {/* Question pagination */}
            <div className="flex justify-between items-center lg:border-t p-4 md:px-8 py-4 mt-auto">
              <div className="flex">
                <button
                  className={`bg-gray-200 px-3 md:px-4 py-2 rounded-md mr-2 md:mr-5 ${currentQuestion !== 0 ? "cursor-pointer" : ""}`}
                  onClick={() => changeQuestion("prev")}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button className="bg-gray-200 px-3 md:px-4 py-2 rounded-md cursor-pointer">
                  Mark for Review
                </button>
              </div>
              <div>
                <button
                  className={`bg-blue-500 text-white px-6 py-2 rounded-md ${currentQuestion !== TOTAL_QUESTIONS - 1 ? "cursor-pointer" : ""}`}
                  onClick={() => changeQuestion("next")}
                  disabled={currentQuestion === TOTAL_QUESTIONS - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="w-full lg:hidden p-4 md:px-8 border-t">
            <Footer
              questions={questions}
              currentQuestion={currentQuestion}
              onSelect={setCurrentQuestion}
              onToggleButton={openToggleButton}
            />
          </div>

          {/* Questions Palette Section */}
          <div className="hidden lg:block">
            <Sidebar
              palleteQuestion={changePalleteQuestion}
              currentQuestion={currentQuestion}
            />
          </div>

          {/* Mobile and tabelt view Toggle Section */}
          {toggleButton && (
            <div className="fixed h-[80vh] overflow-y-auto bottom-0 z-50 lg:hidden bg-gray-200">
              <Sidebar
                palleteQuestion={changePalleteQuestion}
                toggleButton={toggleButton}
                currentQuestion={currentQuestion}
                closeSidebar={() => setToggleButton(false)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
