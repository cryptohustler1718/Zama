import React from "react";
import { motion } from "framer-motion";

const ZAMA_GREEN = "#38E394";
const ZAMA_BLUE = "#1A232B";

interface LeakMeterProps {
  isWeb2Leaking: boolean;
}

const LeakMeter: React.FC<LeakMeterProps> = ({ isWeb2Leaking }) => {
  return (
    <div
      className="flex flex-col items-center space-y-2 max-w-xs mx-auto py-2 px-3 rounded-md"
      style={{
        backgroundColor: isWeb2Leaking ? "#fff6f7" : ZAMA_BLUE,
        color: isWeb2Leaking ? "#c0392b" : ZAMA_GREEN,
        border: `2px solid ${isWeb2Leaking ? "#ff5959" : ZAMA_GREEN}`,
        boxShadow: "0 2px 8px rgba(56,227,148,0.03)",
      }}
    >
      <h3
        className="font-semibold text-lg mb-2"
        style={{ color: isWeb2Leaking ? "#c0392b" : ZAMA_GREEN }}
      >
        Leak Meter
      </h3>
      <div className="w-16 h-40 bg-gray-200 rounded-full overflow-hidden flex flex-col justify-end shadow-lg">
        <motion.div
          className={`w-full`}
          style={{
            backgroundColor: isWeb2Leaking ? "#ff5959" : ZAMA_GREEN,
          }}
          initial={{ height: "0%" }}
          animate={{ height: isWeb2Leaking ? "85%" : "0%" }}
          transition={{ duration: 1 }}
        />
      </div>
      <p
        className={`mt-2 text-center font-semibold ${
          isWeb2Leaking ? "text-red-600" : "text-green-500"
        }`}
      >
        {isWeb2Leaking
          ? "Data Leaking in Web2"
          : "No Leak Detected in Zama FHE"}
      </p>
      <div
        className={`text-sm mt-2 ${
          isWeb2Leaking ? "text-red-500" : "text-green-200"
        }`}
      >
        {isWeb2Leaking ? (
          <>
            Now your decrypted data can be read by the companies and
            can cause data leak.
          </>
        ) : (
          <>
            No data leak and company also doesn't know what data it contains
            inside.
          </>
        )}
      </div>
    </div>
  );
};

export default LeakMeter;
