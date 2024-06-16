// src/components/InstagramPost.js
import React, { useState } from "react";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const toggleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="max-w-md mx-auto border rounded-lg shadow-md overflow-hidden mb-6">
      <img
        className="w-full object-cover bg-no-repeat h-64"
        src={post?.url}
        alt="Post"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={toggleLike}
              className={`focus:outline-none ${
                isLiked ? "text-red-500" : "text-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d={
                    isLiked
                      ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  }
                />
              </svg>
            </button>
            <button
              onClick={toggleDislike}
              className={`focus:outline-none ${
                isDisliked ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d={
                    isDisliked
                      ? "M12 2.65l1.45 1.32C18.6 8.64 22 11.72 22 15.5 22 18.58 19.58 21 16.5 21c-1.74 0-3.41-1.01-4.5-2.09C10.91 19.99 9.24 21 7.5 21 4.42 21 2 18.58 2 15.5c0-3.78 3.4-6.86 8.55-11.54L12 2.65z"
                      : "M12 2.65l1.45 1.32C18.6 8.64 22 11.72 22 15.5 22 18.58 19.58 21 16.5 21c-1.74 0-3.41-1.01-4.5-2.09C10.91 19.99 9.24 21 7.5 21 4.42 21 2 18.58 2 15.5c0-3.78 3.4-6.86 8.55-11.54L12 2.65z"
                  }
                />
              </svg>
            </button>
            <button
              onClick={toggleSave}
              className={`focus:outline-none ${
                isSaved ? "text-yellow-500" : "text-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d={
                    isSaved
                      ? "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                      : "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                  }
                />
              </svg>
            </button>
          </div>
          <span className="text-gray-500 text-sm">{post?.date}</span>
        </div>
        <p className="mt-2 text-gray-700">{post?.title}</p>
      </div>
    </div>
  );
};

export default Post;
