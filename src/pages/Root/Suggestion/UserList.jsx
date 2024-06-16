// src/components/UserList.js
import React from "react";
import UserSuggestion from "./UserSuggestion";

const demoUsers = [
  {
    id: 1,
    name: "John Doe134134",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith5134123",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice well513134",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 5,
    name: " Smith",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 6,
    name: "Lisa",
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "John Doe134134",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 8,
    name: "Jane Smith5134123",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 9,
    name: "Alice well513134",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 10,
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 11,
    name: " Smith",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 12,
    name: "Lisa",
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 13,
    name: "John Doe134134",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 14,
    name: "Jane Smith5134123",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 15,
    name: "Alice well513134",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 16,
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 17,
    name: " Smith",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 18,
    name: "Lisa",
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const UserList = () => {
  return (
    <div className="grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      {demoUsers.map((user) => (
        <UserSuggestion key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
