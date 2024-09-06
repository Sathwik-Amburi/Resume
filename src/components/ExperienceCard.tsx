import { Experience } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share } from "lucide-react";
import CommentSection from "@/components/CommentSection";

export default function ExperienceCard({
  type,
  company,
  location,
  jobTitle,
  date,
  description,
}: Experience) {
  return (
    <div className="bg-background rounded-lg shadow p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <Avatar className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4">
          <AvatarImage alt={company} />
          <AvatarFallback>{company[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {type}
          </h2>
          <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 dark:text-gray-400">
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
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 dark:text-gray-400"
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 dark:text-gray-400"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Comment
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 dark:text-gray-400"
        >
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
      <CommentSection />
    </div>
  );
}
