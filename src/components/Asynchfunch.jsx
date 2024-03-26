import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Asynchfunch = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { data: usersData } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchDatas();
  }, []);

  const fetchPostsForUser = async (userId) => {
    try {
      const { data: userPosts } = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      setPosts(userPosts);
      console.log("Posts for user", userId, ":", userPosts);
    } catch (error) {
      console.error("Error fetching posts for user:", error);
    }
  };

  const handleGetPosts = (userId) => {
    setSelectedUserId(userId);
    fetchPostsForUser(userId);
    setIsOpen(true);
  };

  const handleCloseCard = () => {
    setSelectedUserId(null);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-slate-700 pt-9">
      <div className="text-white w-4/5 min-h-96 bg-slate-600 rounded-xl p-8">
        <h1 className="text-2xl text-center">Asynch Exam</h1>
        <h2 className="text-center mt-4">Users</h2>
        <ul className="mt-4 space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 list-decimal">
              {user.name}
              <button
                type="button"
                className="ml-2 bg-gray-700 text-white px-2 py-1 rounded"
                onClick={() => handleGetPosts(user.id)}
              >
                Get Post
              </button>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%" }}
              className="text-left p-4 bg-transparentblack rounded-xl mt-4 absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-white pt-4 pl-5">
                  Posts for User {selectedUserId}
                </h2>
                <button
                  className="text-white bg-red-600 px-4 py-2 mt-4 rounded"
                  onClick={handleCloseCard}
                >
                  Close
                </button>
              </div>

              <ul className="mt-4 p-10 space-y-2">
                {posts.map((post) => (
                  <li key={post.id} className="text-white list-decimal">
                    {post.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Asynchfunch;
