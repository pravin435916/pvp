import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBookmark, FaSearch, FaTimes } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='w-full p-6 flex justify-between items-center text-black overflow-hidden'>
            <img className='w-full overflow-hidden absolute top-[-44] left-4 scale-105 rotate-180 -z-10' src="/assets/wave.png" alt="" />
            {/* <svg className='w-full overflow-hidden absolute top-0 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,90.7C672,107,768,181,864,224C960,267,1056,277,1152,240C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
            <div className='flex gap-2'>
                <div className='flex items-center gap-4 text-2xl ml-4'>
                    <img className='w-14' src="/assets/logo.png" alt="" />
                    <span>PVP | Blog</span>
                </div>
            </div>
            <span className='absolute top-4 right-4 block sm:hidden text-3xl' onClick={handleMenuOpen}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </span>
            <div className={`absolute bg-black text-white p-10 border-xs rounded-lg top-10 right-8 sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <Link to='/' className='block py-2'><FaSearch/></Link>
                <Link to='/' className='block py-2'><MdNightsStay /></Link>
                <Link to='/save' className='block py-2'><FaBookmark/></Link>
                <Link to='/create' className='block py-2 bg-black border p-2 text-white rounded-lg'>Get For Free</Link>
            </div>
            <div className='hidden sm:flex sm:flex-row gap-8 text-2xl items-center'>
                <Link to='/'><span><FaSearch/></span></Link>
                <Link to='/'><span><MdNightsStay /></span></Link>
                <Link to='/save'><span><FaBookmark/></span></Link>
                <Link to='/create'><span className='bg-black border p-2 text-lg text-white rounded-lg'>Create a BLog</span></Link>
            </div>
        </div>
    );
}

export default Navbar;
