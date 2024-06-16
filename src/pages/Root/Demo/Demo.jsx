import React from "react";
import Post from "./Post";

// Sample post data (simulate 10-20 posts)
const postsData = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    username: "jane_smith",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    username: "john_doe",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    username: "jane_smith",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    username: "john_doe",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    username: "jane_smith",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more posts as needed
];

function Hom() {
  return (
    <div className="flex justify-center bg-slate-950">
      <div className="max-w-screen-lg w-full ml-2 md:mr-4 md:ml-0 ">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 ">
          {postsData.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              avatar={post.avatar}
              image={post.image}
              caption={post.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hom;
