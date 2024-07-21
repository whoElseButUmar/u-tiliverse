type AppCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
};
export const AppCard = ({
  title,
  description,
  icon,
  onClick,
}: AppCardProps) => (
  <div
    className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex flex-col gap-3"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);
