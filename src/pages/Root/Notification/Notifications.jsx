// import React from "react";

// const Notification = () => {
//   return (
//     <div className="h-[100vh] overflow-y-auto  w-[100%] md:ml-44 ml-16  bg-slate-900 p-10">
//       Notification
//     </div>
//   );
// };

// export default Notification;

import React from "react";

const notifications = [
  {
    id: 1,
    type: "like",
    message: "Alice liked your post",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "comment",
    message: 'Bob commented: "Nice photo!"',
    time: "10 minutes ago",
  },
  {
    id: 3,
    type: "follow",
    message: "Charlie started following you",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "mention",
    message: "Diana mentioned you in a comment",
    time: "3 hours ago",
  },
  {
    id: 5,
    type: "like",
    message: "Eve liked your comment",
    time: "5 hours ago",
  },
  {
    id: 6,
    type: "like",
    message: "Alice liked your post",
    time: "2 minutes ago",
  },
  {
    id: 7,
    type: "comment",
    message: 'Bob commented: "Nice photo!"',
    time: "10 minutes ago",
  },
  {
    id: 8,
    type: "follow",
    message: "Charlie started following you",
    time: "1 hour ago",
  },
  {
    id: 9,
    type: "mention",
    message: "Diana mentioned you in a comment",
    time: "3 hours ago",
  },
  {
    id: 10,
    type: "like",
    message: "Eve liked your comment",
    time: "5 hours ago",
  },
  // Add more notifications as needed
];

function Notifications() {
  return (
    <div className="h-[100vh] overflow-y-auto  w-[100%] md:ml-48 ml-16  bg-slate-950 pt-2 pl-10 pr-6">
      <div className="max-w-xl mx-auto p-4 md:p-6 md:mx-0  bg-inherit shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div key={notification.id} className="py-4 flex">
              <div className="flex-shrink-0">
                {notification.type === "like" && (
                  <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
                    ❤️
                  </div>
                )}
                {notification.type === "comment" && (
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    💬
                  </div>
                )}
                {notification.type === "follow" && (
                  <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                    ➕
                  </div>
                )}
                {notification.type === "mention" && (
                  <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-full">
                    @
                  </div>
                )}
              </div>
              <div className="ml-4">
                <p className="">{notification.message}</p>
                <p className=" text-slate-500 text-sm">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
