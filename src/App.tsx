import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import Visualization from "./components/Visualization";
import LeakMeter from "./components/LeakMeter";
import CodeReveal from "./components/CodeReveal";

const App: React.FC = () => {
  const [userText, setUserText] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handler when user submits text in InputPanel
  const handleTextSubmit = (text: string) => {
    setUserText(text);
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen pb-16 flex items-center justify-center relative"
      style={{ backgroundColor: "#FED218" }}
    >
      {/* Twitter link at top-right corner */}
      <a
        href="https://x.com/0xhustler18"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
      >
        {/* Twitter Bird SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.558-3.591-1.558-3.179 0-5.515 3.004-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.396 4.768 2.209 7.548 2.209 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
        <span>Follow me on X</span>
      </a>

      <div className="w-full max-w-4xl px-4">
        {!submitted ? (
          <InputPanel onSubmit={handleTextSubmit} />
        ) : (
          <>
            <Visualization plaintext={userText} />
            {/* <CodeReveal /> */}
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setUserText("");
                }}
                className="mt-10 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow transition"
              >
                Reset Demo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
