'use client';

import React, { memo, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Experience } from '@/types/types';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ThumbsUp, MessageSquare, Send, Share } from 'lucide-react';
import ExperienceHeader from './ExperienceHeader';
import ImageCollage from './ImageCollage';
import ActionButton from './ActionButton';

const DynamicCommentSection = dynamic(
  () => import('@/components/CommentSection'),
  {
    loading: () => <p>Loading comments...</p>,
  }
);

interface ExperienceCardProps extends Experience {
  onShare?: () => void;
  images?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(
  ({
    id,
    type,
    company,
    location,
    jobTitle,
    date,
    description,
    onShare,
    images,
  }) => {
    const [showComments, setShowComments] = useState(false);
    const [likeCount, setLikeCount] = useState(23);
    const [commentCount, setCommentCount] = useState(12); //eslint-disable-line
    const [isLiked, setIsLiked] = useState(false);

    const handleCommentClick = useCallback(() => {
      setShowComments((prev) => !prev);
    }, []);

    const handleLikeClick = useCallback(() => {
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
      setIsLiked((prev) => !prev);
    }, [isLiked]);

    return (
      <Card className="mb-6 bg-white dark:bg-gray-800">
        <CardContent className="p-4">
          <ExperienceHeader
            company={company}
            type={type}
            location={location}
            jobTitle={jobTitle}
            date={date}
          />
          <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
          {images && images.length > 0 && <ImageCollage images={images} />}
        </CardContent>
        <CardFooter className="flex flex-col p-0">
          <div className="w-full px-4 py-2 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {likeCount}
                </span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {commentCount}
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <ActionButton
              icon={ThumbsUp}
              label="Like"
              onClick={handleLikeClick}
              isActive={isLiked}
            />
            <ActionButton
              icon={MessageSquare}
              label="Comment"
              onClick={handleCommentClick}
            />
            <ActionButton icon={Send} label="Send" />
            <ActionButton icon={Share} label="Share" onClick={onShare} />
          </div>
        </CardFooter>
        {showComments && <DynamicCommentSection experienceId={id} />}
      </Card>
    );
  }
);

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
