'use client';

import React, { memo, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Experience } from '@/types/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Share, Clock } from 'lucide-react';

const DynamicCommentSection = dynamic(
  () => import('@/components/CommentSection'),
  {
    loading: () => <p>Loading comments...</p>,
  }
);

interface ExperienceCardProps extends Experience {
  onShare?: () => void;
}

const ExperienceHeader = memo(
  ({ company, type, location, jobTitle, date }: Partial<Experience>) => (
    <div className="flex flex-col sm:flex-row items-center mb-4">
      <Avatar className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4">
        <AvatarImage alt={company} />
        <AvatarFallback>{company?.[0].toUpperCase()}</AvatarFallback>
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
            <Clock className="mr-1 h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
);

ExperienceHeader.displayName = 'ExperienceHeader';

const ActionButton = memo(
  ({
    icon: Icon,
    label,
    onClick,
    isActive,
    count,
  }: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
    count?: number;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className={`text-gray-600 dark:text-gray-400 ${
        isActive ? 'bg-gray-100 dark:bg-gray-800' : ''
      }`}
      onClick={onClick}
    >
      <Icon className={`mr-2 h-4 w-4 ${isActive ? 'text-blue-500' : ''}`} />
      <span className="hidden sm:inline">{label}</span>
      {count !== undefined && <span className="ml-1 text-xs">{count}</span>}
    </Button>
  )
);

ActionButton.displayName = 'ActionButton';

const ExperienceCard: React.FC<ExperienceCardProps> = memo(
  ({ type, company, location, jobTitle, date, description, onShare }) => {
    const [showComments, setShowComments] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleCommentClick = useCallback(() => {
      setShowComments((prev) => !prev);
    }, []);

    const handleLikeClick = useCallback(() => {
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
      setIsLiked((prev) => !prev);
    }, [isLiked]);

    return (
      <div className="bg-background rounded-lg shadow p-4 sm:p-6 mb-6">
        <ExperienceHeader
          company={company}
          type={type}
          location={location}
          jobTitle={jobTitle}
          date={date}
        />
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap items-center justify-between mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
            <ActionButton
              icon={ThumbsUp}
              label="Like"
              onClick={handleLikeClick}
              isActive={isLiked}
              count={likeCount}
            />
            <ActionButton
              icon={MessageSquare}
              label="Comment"
              onClick={handleCommentClick}
              isActive={showComments}
            />
          </div>
          <ActionButton icon={Share} label="Share" onClick={onShare} />
        </div>
        {showComments && <DynamicCommentSection />}
      </div>
    );
  }
);

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
