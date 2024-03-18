import React from 'react'
import { FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
export const Footer = () => {
    return (
        <div className='w-full h-full flex sm:justify-between items-center p-4 sm:p-10 bg-black text-white flex-col sm:flex-row'>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                    <span><SiFramer/></span>
                    <span className='w-72'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</span>
                </div>
                <div className='flex gap-4 mt-8'>
                    <span className='text-2xl'><FaXTwitter /></span>
                    <span className='text-2xl'><FaInstagram /></span>
                    <span className='text-2xl'><FaPinterest /></span>
                    <span className='text-2xl'><FaLinkedin /></span>
                    <span className='text-2xl'><FaTiktok /></span>
                    <span className='text-2xl'><FaYoutube /></span>
                </div>
            </div>
            <div className='flex flex-wrap gap-12 mt-8 justify-center'>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Product</span>
                    <span className='text-gray-400'>Features</span>
                    <span className='text-gray-400'>Integrations</span>
                    <span className='text-gray-400'>Updates</span>
                    <span className='text-gray-400'>FAQ</span>
                    <span className='text-gray-400'>Pricing</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Company</span>
                    <span className='text-gray-400'>About</span>
                    <span className='text-gray-400'>Blog</span>
                    <span className='text-gray-400'>Careers</span>
                    <span className='text-gray-400'>Manifesto</span>
                    <span className='text-gray-400'>Press</span>
                    <span className='text-gray-400'>Contact</span>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Resources</span>
                    <span className='text-gray-400'>Examples</span>
                    <span className='text-gray-400'>Community</span>
                    <span className='text-gray-400'>Guides</span>
                    <span className='text-gray-400'>Docs</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Legal</span>
                    <span className='text-gray-400'>Privacy</span>
                    <span className='text-gray-400'>Terms</span>
                    <span className='text-gray-400'>Security</span>
                </div>
            </div>
        </div>
    )
}
