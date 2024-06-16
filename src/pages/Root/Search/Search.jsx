import React, { useState } from "react";

// Sample user data
const usersData = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Sed do eiusmod tempor incididunt.",
  },
  {
    id: 4,
    name: "Bob Brown",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Charlie Davis",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Ut enim ad minim veniam.",
  },
  {
    id: 6,
    name: "Diana Evans",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Quis nostrud exercitation ullamco.",
  },
  {
    id: 7,
    name: "Frank Green",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 8,
    name: "Grace Harris",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 9,
    name: "Hannah White",
    profilePicture: "https://via.placeholder.com/150",
    bio: "In voluptate velit esse cillum.",
  },
  {
    id: 10,
    name: "Ian Black",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Dolore eu fugiat nulla pariatur.",
  },
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = usersData.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="h-[100vh] overflow-y-auto  w-[100%] md:ml-48 ml-16  bg-slate-950 pl-10 pr-6 pt-4">
      <div className="max-w-2xl mx-auto p-4 md:p-6 md:mx-0 bg-inherit shadow-md rounded-lg mt-2">
        {/* <h2 className="text-2xl font-bold mb-4">User Search</h2> */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-2 bg-inherit mb-4 border rounded-sm focus:outline-none focus:shadow-outline"
        />
        <div>
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center mb-4 p-4 border rounded-md"
            >
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="">{user.bio}</p>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && <p className="">No users found.</p>}
        </div>
      </div>
    </div>
  );
}

export default Search;
