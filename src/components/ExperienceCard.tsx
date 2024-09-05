import { Experience } from "@/types/types";

import { ThumbsUp, MessageSquare, Share, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ExperienceCard: React.FC<Experience> = ({
  type,
  company,
  location,
  jobTitle,
  date,
  description,
}) => (
  <div className="bg-background rounded-lg shadow p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center mb-4">
      <Avatar className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4">
        <AvatarImage src="/avatar.png" alt={type} />
        <AvatarFallback>{type[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-bold">{type}</h2>
        <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500">
          <span>
            {company} · {location} {jobTitle && `· ${jobTitle}`}
          </span>
          <div className="flex items-center mt-2 sm:mt-0 sm:ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
    <p className="mb-4">{description}</p>
    <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <Button variant="ghost" size="sm">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Like
        </Button>
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Comment
        </Button>
      </div>
      <Button variant="ghost" size="sm">
        <Share className="mr-2 h-4 w-4" />
        Share
      </Button>
    </div>
    <div className="flex items-center mt-4">
      <Avatar className="w-8 h-8 mr-2">
        <AvatarImage src="/avatar.png" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <Input className="flex-1" placeholder="Write a comment..." />
      <Button variant="ghost" size="icon" className="ml-2">
        <Smile className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export default ExperienceCard;
