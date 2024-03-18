// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from './baseUrl';
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts`)
      .then(response => {
        setPosts(response.data);
        setSearchResults(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSearch = () => {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Blog Posts</h2>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch();
          }}
          className="p-2 border rounded-l focus:outline-none focus:border-blue-500 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Search
        </button>
      </div>
      <ul className="list-disc pl-4">
        {searchResults.map(post => (
          <li key={post._id} className="mb-2">
            <Link
              to={`/post/${post._id}`}
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
