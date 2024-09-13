'use client';

import React, { memo, useState, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Experience } from '@/types/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  ThumbsUp,
  MessageSquare,
  Send,
  Share,
  Clock,
  MoreHorizontal,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

const ExperienceHeader = memo(
  ({ company, type, location, jobTitle, date }: Partial<Experience>) => (
    <div className="flex items-start mb-4">
      <Avatar className="w-10 h-10 mr-3">
        <AvatarImage alt={company} />
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
  )
);

ExperienceHeader.displayName = 'ExperienceHeader';

const ImageCollage = memo(({ images }: { images: string[] }) => (
  <div className="mb-4 overflow-hidden rounded-lg">
    {images.length === 1 && (
      <Image
        src={images[0]}
        alt="Experience"
        width={600}
        height={400}
        className="w-full object-cover"
      />
    )}
    {images.length === 2 && (
      <div className="flex space-x-1">
        <Image
          src={images[0]}
          alt="Experience 1"
          width={300}
          height={400}
          className="w-1/2 object-cover"
        />
        <Image
          src={images[1]}
          alt="Experience 2"
          width={300}
          height={400}
          className="w-1/2 object-cover"
        />
      </div>
    )}
    {images.length === 3 && (
      <div className="grid grid-cols-2 gap-1">
        <Image
          src={images[0]}
          alt="Experience 1"
          width={300}
          height={400}
          className="col-span-2 w-full object-cover"
        />
        <Image
          src={images[1]}
          alt="Experience 2"
          width={300}
          height={200}
          className="w-full object-cover"
        />
        <Image
          src={images[2]}
          alt="Experience 3"
          width={300}
          height={200}
          className="w-full object-cover"
        />
      </div>
    )}
  </div>
));

ImageCollage.displayName = 'ImageCollage';

const ActionButton = memo(
  ({
    icon: Icon,
    label,
    onClick,
    isActive,
  }: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className={`flex-1 h-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ${
        isActive ? 'text-blue-500 dark:text-blue-400' : ''
      }`}
      onClick={onClick}
    >
      <Icon className="h-5 w-5 mr-2" />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  )
);

ActionButton.displayName = 'ActionButton';

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
