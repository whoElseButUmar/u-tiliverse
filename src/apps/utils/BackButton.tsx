import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { AppId } from "../../types/app";

export const BackButton = ({
  onBack,
}: {
  onBack: (returnTo: AppId | null) => void;
}) => {
  const handleBack = () => {
    onBack(null); // null indicates return to the landing page
  };

  return (
    <div className="w-full mb-4 flex items-center justify-center">
      <button
        onClick={handleBack}
        className="group flex items-center px-4 py-2 text-green-500 bg-slate-800 rounded-full hover:bg-green-500 hover:text-slate-800 transition-all duration-300 shadow-md "
      >
        <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-semibold">Back to Landing Page</span>
      </button>
    </div>
  );
};
