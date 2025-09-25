import React, { use, useState } from 'react';
import toast from 'react-hot-toast'; 

const Mainsection = ({ teketsPromise, inProgressCount, setInProgressCount }) => {
  const tecketsData = use(teketsPromise);

  // নতুন state - Task Status এর জন্য
  const [taskList, setTaskList] = useState([]);

  const handleTicketClick = (ticket) => {
    setInProgressCount(prev => prev + 1);

    // টিকেট Task Status এ push করবো
    setTaskList(prev => [...prev, ticket]);

    toast.success(`"${ticket.title}" moved to In-Progress 🚀`);
  };

  return (
    <main className=' bg-[#f5f5f5] pt-10'>
      <div className='border-2 border-amber-300 mx-30'>
        <div className='flex justify-between items-center'>
          <div className=' h-30 w-[500px] '>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md h-full flex flex-col items-center justify-center'>
              <h5 className='text-[15px] text-white'>In-Progress</h5>
              <h3 className='text-[30px] font-bold text-white'>{inProgressCount}</h3>
            </div>
          </div>
          <div className=' h-30 w-[500px]'>
            <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-md h-full flex flex-col items-center justify-center'>
              <h5 className='text-[15px] text-white'>Resolved</h5>
              <h3 className='text-[30px] font-bold text-white'>0</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Tickets section */}
      <div className="flex mx-30 mt-15 gap-4">
        <div className="w-2/3 text-white">
          <div>
            <h2 className='text-[#34485A] text-[15px] font-semibold p-2'>Customer Tickets</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 pl-1 py-3 justify-between items-center w-full'>
              {tecketsData.map(ticket => (
                <div 
                  key={ticket.id}
                  onClick={() => handleTicketClick(ticket)}
                  className='bg-white h-20 w-[330px] p-2 shadow-2xl shadow-gray-300 cursor-pointer'
                >
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[12px] text-black font-semibold'>{ticket.title}</h2>
                    <button className='text-[12px] text-gray-500 bg-[#B9F8CF] px-2 rounded-full'>
                      {ticket.status}
                    </button>
                  </div>
                  <p className='text-[10px] text-gray-500'>{ticket.description}</p>

                  <div className='text-[10px] text-gray-500 flex justify-around items-center pt-1'>
                    <p>#{ticket.id}</p>
                    <h3>{ticket.priority}</h3>
                    <h4>{ticket.customer}</h4>
                    <h4>{ticket.createdAt}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Status section */}
        <div className="w-1/3 text-white p-2">
          <div>
            <h2 className='text-[#34485A] text-[15px] font-semibold'>Task Status</h2>

          <div className='ml-3'>
            {taskList.map((task) => (
              <div 
                key={task.id} 
                className='bg-white h-16 w-60 flex flex-col items-center justify-center mt-3 gap-2 shadow-2xl shadow-gray-300'
              >
                <h2 className='text-[12px] text-black font-semibold'>{task.title}</h2>
                <button className='text-[10px] bg-[#02A53B] h-6 w-52 rounded-md'>Complete</button>
              </div>
            ))}
          </div>
          </div>

          {/* Resolved Task */}
        <div className=" p-2">
          <h2 className='text-[#34485A] text-[15px] font-semibold'>Resolved Task</h2>
        </div>
        </div>

      </div>
    </main>
  );
};

export default Mainsection;
