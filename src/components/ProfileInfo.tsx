import Image from 'next/image';
import { ProfileInfoProps } from '@/types/types';
import { MapPin, Mail, Github, Linkedin, Search } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ExtendedProfileInfoProps extends ProfileInfoProps {
  github?: string;
  linkedin?: string;
}

const ProfileInfo: React.FC<ExtendedProfileInfoProps> = ({
  name,
  location,
  email,
  avatar,
  github,
  linkedin,
}) => {
  const firstName = name.split(' ')[0];
  const jobSearchPhrase = `Job search is on ${firstName}'s mind`;

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <Avatar className="w-24 h-24 sm:w-16 sm:h-16 ">
            <Image
              src={avatar}
              alt={name}
              width={96}
              height={96}
              className="rounded-full object-cover"
              priority
            />
            {/* <AvatarFallback className="bg-blue-500 text-white text-2xl sm:text-xl">
              {name
                .split(' ')
                .map((n: string) => n[0])
                .join('')}
            </AvatarFallback> */}
          </Avatar>
          <div className="flex-grow text-center sm:text-left">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <div className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full py-2 pl-10 pr-4 text-sm">
                {jobSearchPhrase}
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex-1 justify-center text-gray-600 dark:text-gray-400"
          >
            <MapPin className="mr-2 h-4 w-4 text-red-500 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex-1 justify-center text-gray-600 dark:text-gray-400"
          >
            <Mail className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
            <span className="truncate">{email}</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex-1 justify-center text-gray-600 dark:text-gray-400"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 text-gray-700 dark:text-gray-300 flex-shrink-0" />
              <span className="truncate">GitHub</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex-1 justify-center text-gray-600 dark:text-gray-400"
            asChild
          >
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 text-blue-700 flex-shrink-0" />
              <span className="truncate">LinkedIn</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
