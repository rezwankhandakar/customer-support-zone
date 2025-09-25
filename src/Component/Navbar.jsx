
import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-full bg-white border-b border-b-gray-200 shadow-sm px-4 md:px-20 py-3 flex flex-col md:flex-row justify-between items-center'>
            <div>
                <h2 className='text-[18px] font-bold text-[#130B2D]'>CS — Ticket System</h2>
            </div>

            <div className='flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 mt-3 md:mt-0'>
                <ul className='flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-[12px] text-black'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>

                <div className='mt-2 md:mt-0'>
                    <button className='text-[10px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-1 rounded-sm text-white'>
                        + New Ticket
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
