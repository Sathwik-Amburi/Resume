import { Education } from '@/types/types';
const EducationCard = ({ type, institution, date }: Education) => (
  <div className="bg-background rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-bold mb-2">{type}</h2>
    <p className="text-gray-600">{institution}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
);

export default EducationCard;
