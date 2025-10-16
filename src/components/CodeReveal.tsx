import React, { useState } from "react";

const exampleCode = `# Example: Simple Base64 "Encryption"
plaintext = "My secret message"
ciphertext = btoa(plaintext)  # Encoded to base64 as visual cipher

print("Ciphertext:", ciphertext)
`;

const CodeReveal: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-50 rounded shadow">
      <button
        onClick={() => setShowCode(!showCode)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        {showCode ? "Hide Code" : "Show Simple Encryption Code"}
      </button>
      {showCode && (
        <pre className="mt-4 bg-gray-800 text-green-400 p-4 rounded overflow-x-auto whitespace-pre-wrap">
          {exampleCode}
        </pre>
      )}
    </div>
  );
};

export default CodeReveal;
