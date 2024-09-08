"use client";
import { useState, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Comment {
  user: User;
  text: string;
}

const defaultUsers: User[] = [
  { id: 1, name: "Alice", avatar: "/avatars/alice.png" },
  { id: 2, name: "Bob", avatar: "/avatars/bob.png" },
];

export default function CommentSection() {
  const [currentUser, setCurrentUser] = useState<User>(defaultUsers[0]);
  const [comments, setComments] = useState<Comment[]>([]);

  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUser = defaultUsers.find(
      (user) => user.id === parseInt(e.target.value)
    );
    if (selectedUser) {
      setCurrentUser(selectedUser);
    }
  };

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
    if (comment.trim() === "") return;

    const newComment: Comment = {
      user: currentUser,
      text: comment,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setComment("");
  };

  useEffect(() => {
    console.log("Current user:", currentUser.name);
  }, [currentUser]);

  return (
    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
      <div className="mb-4">
        <select
          onChange={handleUserChange}
          value={currentUser.id}
          className="text-blue-600 dark:text-blue-400"
        >
          {defaultUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmitComment} className="flex items-center mb-4">
        <Avatar className="w-8 h-8 mr-2">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <Input
          className="flex-1 bg-gray-100 dark:bg-gray-800 border-none"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-2 text-blue-600 dark:text-blue-400"
            onClick={toggleEmojiPicker}
          >
            <Smile className="h-4 w-4" />
            <span className="sr-only">Toggle emoji picker</span>
          </Button>
          {showEmojiPicker && (
            <div className="absolute z-10 mt-2">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
      {comments.map((comment, index) => (
        <div key={index} className="flex items-center mb-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
            <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-bold">{comment.user.name}</span>:{" "}
            {comment.text}
          </div>
        </div>
      ))}
    </div>
  );
}
