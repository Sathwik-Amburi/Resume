import { ProfileInfoProps } from '@/types/types';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  location,
  phone,
  email,
  avatar,
}) => (
  <div className="bg-background rounded-lg shadow p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center mb-4">
      <Avatar className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>
          {name
            .split(' ')
            .map((n: string) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
          <div className="flex items-center">
            <MapPin className="text-red-500 mr-1 h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-green-500 mr-1 h-4 w-4" />
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="text-blue-500 mr-1 h-4 w-4" />
            <span className="text-sm">{email}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileInfo;
