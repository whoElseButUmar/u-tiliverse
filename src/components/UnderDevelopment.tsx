import { motion } from "framer-motion";
import { BsFileCode } from "@react-icons/all-files/bs/BsFileCode";
import { IoTerminalOutline } from "@react-icons/all-files/io5/IoTerminalOutline";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";
import { AppId } from "../types/app";
const UnderDevelopment = ({
  appName,
  onBack,
}: {
  appName: string;
  onBack: (returnTo: AppId | null) => void;
}) => {
  const handleBack = () => {
    onBack(null); // null indicates return to the landing page
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <BsFileCode size={48} className="text-blue-400" />
          <IoTerminalOutline size={48} className="text-green-400" />
          <FiCoffee size={48} className="text-yellow-400" />
        </div>

        <motion.h2 className="text-4xl font-bold text-white mb-4">
          {appName === "newUtility" ? "A New Utility" : appName} is Under
          Development
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm working hard to bring you something awesome!
        </motion.p>

        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
