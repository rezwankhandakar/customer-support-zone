import React from 'react';

const Navbar = () => {
    return (
        <nav className=' h-12 w-auto flex justify-between items-center px-20 border-b-gray-500'>
        <div><h2 className='text-[18px] font-bold text-[#130B2D]'>CS — Ticket System</h2></div>

        <div className='flex justify-center items-center gap-4'>
          <ul className='flex justify-center items-center gap-4 text-[12px]'>
            <ol>Home</ol>
            <ol>FAQ</ol>
            <ol>Changelog</ol>
            <ol>Blog</ol>
            <ol>Download</ol>
            <ol>Contact</ol>
          </ul>
          
          <div>
            <button className='text-[10px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-sm text-white
'>+ New Ticket</button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;