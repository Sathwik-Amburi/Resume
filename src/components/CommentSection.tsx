"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log("Submitted comment:", comment);
    setComment("");
  };

  return (
    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
      <form onSubmit={handleSubmitComment} className="flex items-center">
        <Avatar className="w-8 h-8 mr-2">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Input
          className="flex-1 bg-gray-100 dark:bg-gray-800 border-none"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="ml-2 text-blue-600 dark:text-blue-400"
        >
          <Smile className="h-4 w-4" />
          <span className="sr-only">Submit comment</span>
        </Button>
      </form>
    </div>
  );
}
