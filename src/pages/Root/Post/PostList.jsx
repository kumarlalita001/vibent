import React, { useEffect, useState } from "react";
import Post from "./Post";

const demoPosts = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    comments: "This is a beautiful view!",
    date: "June 14, 2024",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    comments: "Loving the vibes here!",
    date: "June 13, 2024",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600/771796",
    comments: "Great time with friends!",
    date: "June 12, 2024",
  },
];

const PostList = () => {
  // const [posts, setPosts] = useState([]);
  // const [posts1, setPosts1] = useState([]);

  // const fetchPosts = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const json = await data.json();

  //   setPosts(json);
  //   return json;
  // };

  // useEffect(() => {
  //   fetchPosts();

  //   const data = print();
  //   setPosts1(data);
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://meme-api.com/gimme/4");
        const json = await response.json();

        const newJson = json.memes.map((item) => {
          return { ...item, date: new Date().toString(), id: Math.random() };
        });

        setData(newJson);
        console.log(newJson);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    return () => fetchData();
  }, []);

  console.log("hiii");

  return (
    <div className="max-w-md p-4 mx-auto space-y-6  ">
      {data &&
        data.map((item) => {
          return <Post key={item.id} post={item} />;
        })}
    </div>
  );
};

export default PostList;
