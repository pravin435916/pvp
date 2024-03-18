import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineSend } from "react-icons/ai";
import './custom.css'
import axios from 'axios';
const ChatBox = () => {
    const [menu, setMenu] = useState(false);
    const popUP = () => {
        setMenu(!menu);
    }
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleMessageSubmit = async () => {
        if (!inputText.trim()) return;

        const newMessage = {
            text: inputText,
            sender: 'user'
        };

        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInputText('');

        try {
            const response = await axios.post('http://localhost:5000/chatbot', {
                message: inputText
            });

            const botResponse = {
                text: response.data,
                sender: 'bot'
            };

            setMessages(prevMessages => [...prevMessages, botResponse]);
        } catch (error) {
            console.error('Error sending message to the server:', error);
        }
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    const closePopup = () => {
        setMenu(false)
        // setMessages("");
    };
    return (
        <div>
            <div
                className="fixed bottom-10 right-10 bg-violet-600 text-white p-2 rounded-full cursor-pointer z-50"
                onClick={popUP}
                title="Talk to ChatBot"
            >
                <img className='w-12 h-12' src="/assets/robot.svg" alt="" />
            </div>
            <AnimatePresence>
                {
                    menu && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 10 }}
                            exit={{ opacity: 0, y: 20 }}
                            onMouseLeave={() => setMenu(false)}
                            className="flex justify-between items-center w-72 h-[26rem] bg-gray-100 flex-col absolute right-20 bottom-32 rounded-lg overflow-hidden">
                            <div className="flex w-full justify-between items-center bg-black h-18 text-white p-4 shadow-2xl">
                                <div className='flex gap-2'>
                                    <img className='w-12' src="/assets/robot.svg" alt="" />
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Chat Bot</span>
                                        <div className='flex items-center text-[#43EE7D]'>
                                            <span><GoDotFill /></span>
                                            <span> Online</span>
                                        </div>
                                    </div>
                                </div>
                                <span className='text-2xl cursor-pointer' onClick={closePopup}><RxCrossCircled /></span>
                            </div>
                            <div className="flex flex-col p-2 overflow-y-auto flex-end justify-end pt-4 h-full">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-1 my-2 p-2 rounded-lg ${message.sender === 'user' ? 'bg-white shad self-end' : 'bg-violet-400 shad'}`}
                                    >
                                                <span>{message.text}</span>
                                        {
                                            message.sender === 'user' ? (
                                                <div className='bg-green-400 w-8 h-8 p-2 border rounded-full'>
                                                    <img src="http://clipart-library.com/images/6Tp66Bp7c.png" alt="" />
                                                </div>
                                            ) :
                                                (
                                                    <div className='bg-transparant w-8 h-8 p-2 border rounded-full'>
                                                        <img src="/assets/robot.svg" alt="" />
                                                    </div>
                                                )
                                        }
                                    </div>
                                ))}
                            </div>
                            <div className='w-full mx-10 px-6 py-4 rounded-lg flex gap-2 items-center bg-transparant'>
                                <input className='outline-none  border bg-transparant rounded-lg w-full text-black p-2' onChange={handleInputChange} type="text" placeholder='Type your message here' />
                                <span className='text-3xl cursor-pointer text-violet-600' onClick={handleMessageSubmit}><AiOutlineSend /></span>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </div>
    );
};

export default ChatBox;