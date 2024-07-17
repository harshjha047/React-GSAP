import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post('http://localhost:3000/post', {}, { withCredentials: true });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        navigate('/login');
      }
    };

    fetchPosts();
  }, [navigate]);

  return (
    <div className="bg-[#111] flex justify-center items-center">
      <div>
        <div className="h-[16vh] w-full"></div>
        <div className="flex flex-wrap w-[80vw] justify-between">
          {posts.map(post => (
            <Card
              key={post._id}
              id={post._id}
              thumbnail={post.thumbnail}
              title={post.title}
              description={post.description}
              video={post.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
