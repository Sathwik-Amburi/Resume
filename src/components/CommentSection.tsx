'use client';

import { useState, useEffect } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Smile, Send } from 'lucide-react';
import { useUserStore } from '@/hooks/userStore';
import { UserSetup } from './UserSetup';

interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: number;
}

interface CommentSectionProps {
  experienceId: string;
}

export default function CommentSection({ experienceId }: CommentSectionProps) {
  const user = useUserStore((state) => state.user);
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${experienceId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [experienceId]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setComment((prevComment) => prevComment + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === '' || !user) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      text: comment,
      timestamp: Date.now(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${experienceId}`,
      JSON.stringify(updatedComments)
    );
    setComment('');
  };

  if (!user) {
    return <UserSetup />;
  }

  return (
    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
      <form onSubmit={handleSubmitComment} className="flex items-center mb-4">
        <Avatar className="w-8 h-8 mr-2">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="relative flex-1">
          <Input
            className="w-full bg-gray-100 dark:bg-gray-800 border-none pr-10"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-primary hover:text-primary-foreground"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send comment</span>
          </Button>
        </div>
        <div className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-2 text-primary"
            onClick={toggleEmojiPicker}
          >
            <Smile className="h-4 w-4" />
            <span className="sr-only">Toggle emoji picker</span>
          </Button>
          {showEmojiPicker && (
            <div className="absolute z-10 mt-2 right-0">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-center mb-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
            <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-bold">{comment.user.name}</span>:{' '}
            {comment.text}
          </div>
        </div>
      ))}
    </div>
  );
}
