// import React from "react";

// const Create = () => {
//   return (
//     <div className="h-[100vh] overflow-y-auto  w-[100%] md:ml-44 ml-16  bg-slate-900 p-10">
//       Create new User
//     </div>
//   );
// };

// export default Create;

import React, { useState } from "react";

function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Post Content:", postContent);
    console.log("Image:", image);
  };

  return (
    <div className=" overflow-y-auto  w-[100%] md:ml-48 ml-16   bg-slate-950  pt-4 pr-6 pl-10">
      <div className="max-w-xl p-4 mx-auto md:p-6 md:mx-0 bg-inherit shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postContent"
            >
              Post Content
            </label>
            <textarea
              id="postContent"
              name="postContent"
              rows="4"
              value={postContent}
              onChange={handleContentChange}
              className="w-full px-3 py-2 bg-inherit  border rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block  bg-inherit text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name=""
              onChange={handleImageChange}
              className="w-full  px-3 py-2 bg-inherit  border rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
