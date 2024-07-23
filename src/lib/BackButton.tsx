import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { AppId } from "../types/app";

export const BackButton = ({
  onBack,
}: {
  onBack: (returnTo: AppId | null) => void;
}) => {
  const handleBack = () => {
    onBack(null); // null indicates return to the landing page
  };

  return (
    <div className="w-full mb-4 flex justify-start">
      <button
        onClick={handleBack}
        className="group flex items-center px-3 py-2 text-slate-300 hover:text-white rounded-lg transition-all duration-200 ease-in-out  focus:outline-none"
      >
        <FaArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 ease-in-out group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Back</span>
      </button>
    </div>
  );
};
