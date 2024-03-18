// PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(response => {
        response.data.imagePath = response.data.imagePath.replace(/\\/g, '/');
        setPost(response.data);
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      {post.imagePath && <img src={`http://localhost:5000/${post.imagePath}`} alt="Post" className="mb-4" />}
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetail;
