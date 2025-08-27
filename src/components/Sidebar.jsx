import React from "react";
import Status from "./Status";
import QuestionNavigator from "./QuestionNavigator";
import { IoClose } from "react-icons/io5";

const Sidebar = ({
  palleteQuestion,
  currentQuestion,
  toggleButton,
  closeSidebar,
}) => {
  return (
    // Question palette Section
    <>
      <div className="flex flex-col h-full">
        <div className="bg-blue-300 flex items-center justify-between p-4 md:px-6">
          <div className="flex items-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-png-download-6515859.png"
              alt="Profile"
              className="rounded-xl h-10 w-10 mr-3"
            />
            <h1>Muskan Verma</h1>
          </div>

          {/* toggle button */}
          {toggleButton && (
            <button onClick={closeSidebar}>
              <IoClose size={28} className="text-black" />
            </button>
          )}
        </div>
        <div className="bg-gray-200 flex-1 overflow-y-auto">
          {/* question status  */}
          <Status />

          {/* Question navigation palette*/}
          <QuestionNavigator
            palleteQuestion={palleteQuestion}
            closeSidebar={closeSidebar}
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
