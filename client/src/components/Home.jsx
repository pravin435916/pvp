import React,{useEffect,useState} from 'react'
import { FaBookmark, FaHeart } from 'react-icons/fa'
import axios from 'axios';
function Home() {
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
    <div className='relative w-full h-full mt-20'>
      <div className='w-full sm:w[70vw] flex justify-center items-center gap-8 sm:flex-row flex-col overflow-y-auto'>
        <div className="w-full sm:w-2/3 p-2 sm:p-10 flex justify-start items-start flex-col">
          <div className='flex gap-4 text-yellow-400 font-bold flex-start'>
            <span>TOP ARTICLES</span>
            <span>RECENTLY UPDATED</span>
          </div>
          {searchResults.map((post,index) => (
          <div className='w-[48rem] flex flex-col mt-10 text-white border p-2' key={index}>
            <div className='flex sm:flex-row flex-col gap-6'>
              <img className='w-72' src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className='flex flex-col'>
                <span className='text-gray-200'>VS CODE</span>
                <span className='text-yellow-400 font-bold'>{post.title}</span>
                <span className='text-xs text-wrap'>{post.content}</span>
                <div className='flex h-full gap-2 flex-end items-center'>
                  <span><FaBookmark /></span>
                  <span><FaHeart /></span>
                  <span>14 Feb</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          <div className='flex flex-col mt-10 text-white border p-2'>
            <div className='flex sm:flex-row flex-col gap-4'>
              <img className='w-72' src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className='flex flex-col'>
                <span className='text-gray-200'>VS CODE</span>
                <span className='text-yellow-400 font-bold'>9 VSCode Extensions You Definitely
                  Need As A Developer</span>
                <span className='text-xs text-wrap'>It would help if you had these extensions to improve your
                  workflow, reduce the number bugs and issues  of bugs...</span>
                <div className='flex h-full gap-2 flex-end items-center'>
                  <span><FaBookmark /></span>
                  <span><FaHeart /></span>
                  <span>14 Feb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center sm:w-96 text-white sm:justify-end mt-10'>
          <div className='flex flex-col justify-center items-center gap-8 absolute top-10'>
            <div className='flex gap-2'>
              <img className='w-12 h-12 rounded-full' src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
              <div className='flex flex-col gap-1 items-center'>
                <span>Pravin Nandankar</span>
                <span>Developer</span>
              </div>
            </div>
            <div className='flex gap-2'>
              <img className='w-12 h-12 rounded-full' src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
              <div className='flex flex-col gap-1 items-center'>
                <span>Vansh Kolte</span>
                <span>Designer</span>
              </div>
            </div>
            <div className='flex gap-2'>
              <img className='w-12 h-12 rounded-full' src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
              <div className='flex flex-col gap-1 items-center'>
                <span>Prathamesh Rokade</span>
                <span>Writer</span>
              </div>
            </div>
            <div className='w-72 bg-white rounded-[2rem] p-4 text-black'>
              <span className='w-full text-center text-xs'>Let me help you integrate into the “New World” and show you cool features that you may not know. I love to write about Programming, Productivity and Web 3.0</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-yellow-300 uppercase font-bold'>Top Categories</span>
              <div className='flex flex-wrap mt-6 mx-12  gap-4 justify-evenly items-center'>
                <span className='bg-white text-black border rounded-lg px-4 py-1'>Coding</span>
                <span className='bg-white text-black border rounded-lg px-2 py-1'>NFT</span>
                <span className='bg-white text-black border rounded-lg px-2 py-1'>Web 3.0</span>
                <span className='bg-white text-black border rounded-lg px-2 py-1'>Crypto</span>
                <span className='bg-white text-black border rounded-lg px-2 py-1'>Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home