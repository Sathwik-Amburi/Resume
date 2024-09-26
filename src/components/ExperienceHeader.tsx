import { memo } from 'react';
import { Experience } from '@/types/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Clock, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ExperienceHeader = memo(
  ({ company, type, location, jobTitle, date }: Partial<Experience>) => {
    const companyLogoPath = `/company/${company?.toLowerCase().replace(/\s+/g, '_')}.webp`;

    return (
      <div className="flex items-start mb-4">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage src={companyLogoPath} alt={company} />
          <AvatarFallback>{company?.[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {company}
          </h2>
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="mr-2">{jobTitle}</span>
            <span className="mr-2">{type}</span>
            <span className="mr-2">{location}</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
);

ExperienceHeader.displayName = 'ExperienceHeader';

export default ExperienceHeader;
