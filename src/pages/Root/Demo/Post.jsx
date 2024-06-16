import React from "react";

function Post({ username, avatar, image, caption }) {
  return (
    <div className="max-w-sm w-full bg-slate-900 shadow-lg rounded-lg">
      <div className="flex items-center  justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={avatar}
            alt={username}
          />
          <span className="font-bold text-gray-800">{username}</span>
        </div>
        <div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 5v14m-7-7h14"></path>
            </svg>
          </button>
        </div>
      </div>
      <img className="w-full" src={image} alt={caption} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">{caption}</p>
      </div>
      <div className="px-6 py-4">
        <button className="text-gray-700 mr-2">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-5 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-700 mr-2">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-7-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5v14m-7-7h14"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Post;
