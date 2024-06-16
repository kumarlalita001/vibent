// import React from "react";

// const Profile = () => {
//   return (
//     <div className="h-[100vh] overflow-y-auto  w-[100%] md:ml-44 ml-16  bg-slate-900 p-10">
//       Profile
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";

const userData = {
  username: "john_doe",
  profilePicture: "https://via.placeholder.com/150",
  postsCount: 34,
  followersCount: 1234,
  followingCount: 567,
  posts: [
    { id: 1, image: "https://via.placeholder.com/150", description: "Post 1" },
    { id: 2, image: "https://via.placeholder.com/150", description: "Post 2" },
    { id: 3, image: "https://via.placeholder.com/150", description: "Post 3" },
    { id: 4, image: "https://via.placeholder.com/150", description: "Post 4" },
    { id: 5, image: "https://via.placeholder.com/150", description: "Post 1" },
    { id: 6, image: "https://via.placeholder.com/150", description: "Post 2" },
    { id: 7, image: "https://via.placeholder.com/150", description: "Post 3" },
    { id: 8, image: "https://via.placeholder.com/150", description: "Post 4" },
    // Add more posts as needed
  ],
  saved: [
    { id: 1, image: "https://via.placeholder.com/150", description: "Saved 1" },
    { id: 2, image: "https://via.placeholder.com/150", description: "Saved 2" },
    { id: 3, image: "https://via.placeholder.com/150", description: "Saved 3" },
    { id: 4, image: "https://via.placeholder.com/150", description: "Saved 4" },
    { id: 5, image: "https://via.placeholder.com/150", description: "Saved 1" },
    { id: 6, image: "https://via.placeholder.com/150", description: "Saved 2" },
    { id: 7, image: "https://via.placeholder.com/150", description: "Saved 3" },
    { id: 8, image: "https://via.placeholder.com/150", description: "Saved 4" },
    // Add more saved posts as needed
  ],
};

function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="h-[100vh] overflow-hidden  w-[100%] md:ml-48 ml-16  bg-slate-950 pt-4 pr-6 pl-10 ">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex w-[100%] items-center mb-6">
          <img
            src={userData.profilePicture}
            alt={userData.username}
            className="w-20 h-20 rounded-full mr-6"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{userData.username}</h2>
            <div className="flex flex-col md:flex-row gap-2 mt-2">
              <div>
                <span className="font-bold">
                  {userData.postsCount + "    "}
                </span>{" "}
                posts
              </div>
              <div>
                <span className="font-bold">
                  {userData.followersCount + "    "}
                </span>
                followers
              </div>
              <div>
                <span className="font-bold">
                  {userData.followingCount + "    "}
                </span>
                following
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mb-4 ">
          <button
            onClick={() => setActiveTab("posts")}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === "posts"
                ? "border-b-2 border-blue-500 font-bold"
                : ""
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === "saved"
                ? "border-b-2 border-blue-500 font-bold"
                : ""
            }`}
          >
            Saved
          </button>
        </div>
        <div className="grid  grid-cols-1 pr-2 md:grid-cols-2 xl:grid-cols-3 gap-4 h-[400px] overflow-y-scroll">
          {activeTab === "posts" &&
            userData.posts.map((post) => (
              <div key={post.id} className="border p-2 rounded">
                <img
                  src={post.image}
                  alt={post.description}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            ))}
          {activeTab === "saved" &&
            userData.saved.map((post) => (
              <div key={post.id} className="border p-2 rounded">
                <img
                  src={post.image}
                  alt={post.description}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
