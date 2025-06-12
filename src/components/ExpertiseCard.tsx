interface ExpertiseCardProps {
  title: string;
  description: string;
  icon?: string;
}

const ExpertiseCard = ({ title, description, icon }: ExpertiseCardProps) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
      {icon && (
        <div className="w-12 h-12 mb-4 text-blue-600">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
