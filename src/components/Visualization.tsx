import React, { useState } from "react";
import { motion } from "framer-motion";
import LeakMeter from "./LeakMeter";
// Update path if your image is in another location
import serverImg from "../assets/server.png";

const ZAMA_BLUE = "#1A232B";
const ZAMA_GREEN = "#38E394";

interface VisualizationProps {
  plaintext: string;
}

const Visualization: React.FC<VisualizationProps> = ({ plaintext }) => {
  const [decryptedWeb2, setDecryptedWeb2] = useState(false);
  const [decryptedZama, setDecryptedZama] = useState(false);
  const ciphertext = btoa(plaintext);

  return (
    <div
      className="flex justify-around mt-10 max-w-6xl mx-auto gap-12 py-10 rounded-2xl shadow-xl"
      style={{ backgroundColor: "black" }}
    >
      {/* Web2 Side */}

      <div className="w-1/2 flex flex-col items-center">
        <h3 className="font-semibold text-lg mb-2" style={{ color: "white" }}>
          Traditional Web 2
        </h3>
        <img
          src={serverImg}
          alt="Web2 Server"
          className="w-24 h-24 mb-4"
          style={{ objectFit: "contain" }}
        />
        <button
          onClick={() => setDecryptedWeb2(true)}
          className="bg-green-500"
          style={{
            backgroundColor: ZAMA_GREEN,
            color: ZAMA_BLUE,
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
            boxShadow: "0 2px 8px rgba(56,227,148,0.15)",
          }}
        >
          Decrypt
        </button>
        {decryptedWeb2 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 bg-white text-zamaBlue rounded p-4 shadow text-center"
              style={{ color: ZAMA_BLUE }}
            >
              {plaintext}
            </motion.div>
            <h3
              className="font-semibold text-lg mt-4 mb-2"
              style={{ color: "white" }}
            >
              Your original content is visible
            </h3>
            {/* Show LeakMeter only after decrypt */}
            <div className="mt-7 w-full flex justify-center">
              <LeakMeter isWeb2Leaking={true} />
            </div>
          </>
        )}
      </div>

      {/* Zama Side */}
      <div className="w-1/2 flex flex-col items-center">
        <h3 className="font-semibold text-lg mb-2" style={{ color: "white" }}>
          ZAMA FHE
        </h3>
        <img
          src={serverImg}
          alt="Zama Server"
          className="w-24 h-24 mb-4"
          style={{ objectFit: "contain" }}
        />
        <button
          onClick={() => setDecryptedZama(true)}
          className="bg-green-500"
          style={{
            backgroundColor: ZAMA_GREEN,
            color: ZAMA_BLUE,
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
            boxShadow: "0 2px 8px rgba(56,227,148,0.15)",
          }}
        >
          Decrypt
        </button>
        {decryptedZama && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 bg-white text-zamaBlue rounded p-4 shadowtext-center font-mono break-words"
              style={{ color: ZAMA_BLUE }}
            >
              {ciphertext}
            </motion.div>
            <h3
              className="font-semibold text-lg mt-4 mb-2"
              style={{ color: "white" }}
            >
              No one can see your original content
            </h3>
            {/* Show LeakMeter only after decrypt */}
            <div className="mt-7 w-full flex justify-center">
              <LeakMeter isWeb2Leaking={false} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Visualization;
