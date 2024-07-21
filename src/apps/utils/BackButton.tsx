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
    <div className="w-full  mb-4 flex items-center justify-center">
      <button
        onClick={handleBack}
        className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
      >
        <FaArrowLeft className="mr-2" />
        Back to Landing Page
      </button>
    </div>
  );
};
