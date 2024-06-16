// src/components/UserSuggestion.js
import React, { useState } from "react";

const UserSuggestion = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="flex flex-col  items-center gap-1  w-[100%]  ">
      <img
        className="w-10 h-10 rounded-full  object-cover "
        src={user.picture}
        alt={user.name}
      />
      <div className="flex-1">
        <h2 className="text-sm font-mono text-center ">{user.name}</h2>
      </div>
      <button
        onClick={handleFollow}
        className={`px-2 py-1 rounded text-sm ${
          isFollowing ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserSuggestion;
