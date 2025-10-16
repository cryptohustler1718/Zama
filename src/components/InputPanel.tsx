import React, { useState } from "react";

// Use actual Zama brand color codes
const ZAMA_BLUE = "#1A232B"; // adjust if different
const ZAMA_GREEN = "#38E394"; // adjust if different

interface InputPanelProps {
  onSubmit: (text: string) => void;
}

const InputPanel: React.FC<InputPanelProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (text.trim().length) {
      setLoading(true);
      // Simulate "encrypting via internet" for 1s before submitting
      setTimeout(() => {
        setLoading(false);
        onSubmit(text);
      }, 1000);
    }
  };

  return (
    <div
      className="flex flex-col items-center p-10 rounded-lg shadow-lg max-w-xl mx-auto"
      style={{ backgroundColor: "black" }}
    >
      <h1
        className="text-4xl font-bold mb-4 text-center"
        style={{ color: "#FED218" }}
      >
        Zama FHE Visual Demo
      </h1>
      <p className="mb-6 text-center text-lg max-w-md text-gray-200">
        Enter any text below and witness Zama's encryption magic in action.
      </p>

      <textarea
        className="w-full h-32 p-3 rounded border border-gray-800 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400 mb-6 resize-none"
        placeholder="Enter your secret message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {!loading ? (
        <button
          className="bg-green-500 h-8 w-28"
          style={{
            backgroundColor: ZAMA_GREEN,
            color: ZAMA_BLUE,
            fontWeight: "bold",
          }}
          onClick={handleSubmit}
          disabled={!text.trim()}
        >
          Encrypt
        </button>
      ) : (
        <div className="flex flex-col items-center mt-2">
          {/* Loader animation */}
          <div
            className="w-10 h-10 border-4 border-solid rounded-full animate-spin"
            style={{
              borderColor: `${ZAMA_GREEN} ${ZAMA_BLUE} ${ZAMA_GREEN} ${ZAMA_GREEN}`,
              borderTopColor: ZAMA_BLUE,
            }}
          ></div>
          <span className="text-green-400 mt-3">
            Encrypting via Internet...
          </span>
        </div>
      )}
    </div>
  );
};

export default InputPanel;
