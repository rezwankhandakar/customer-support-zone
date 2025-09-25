
import React, { use, useState } from 'react';
import toast from 'react-hot-toast';

const Mainsection = ({ teketsPromise, inProgressCount, setInProgressCount }) => {
  const tecketsData = use(teketsPromise);

  const [taskList, setTaskList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);
  const [customerTickets, setCustomerTickets] = useState(tecketsData);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleTicketClick = (ticket) => {
    if (!taskList.find(t => t.id === ticket.id)) {
      setInProgressCount(prev => prev + 1);
      setTaskList(prev => [...prev, ticket]);
      toast.success(`"${ticket.title}" moved to In-Progress `);
    } else {
      toast.error(`"${ticket.title}" already in Task Status `);
    }
  };

  const handleCompleteTask = (task) => {
    setInProgressCount(prev => prev - 1);
    setResolvedCount(prev => prev + 1);
    setTaskList(prev => prev.filter(t => t.id !== task.id));
    setResolvedList(prev => [...prev, task]);
    setCustomerTickets(prev => prev.filter(t => t.id !== task.id));
    toast.success(`"${task.title}" marked as Resolved `);
  };

  return (
    <main className="bg-[#f5f5f5] pt-6 px-3 md:px-6">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* In-Progress */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md h-24 flex flex-col items-center justify-center">
              <h5 className="text-sm text-white">In-Progress</h5>
              <h3 className="text-2xl font-bold text-white">{inProgressCount}</h3>
            </div>
          </div>

          {/* Resolved */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-md h-24 flex flex-col items-center justify-center">
              <h5 className="text-sm text-white">Resolved</h5>
              <h3 className="text-2xl font-bold text-white">{resolvedCount}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Customer Tickets */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-[#34485A] text-[15px] font-semibold p-2">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customerTickets.map(ticket => {
              const statusColor =
                ticket.status === "Open"
                  ? "bg-[#B9F8CF] text-green-600"
                  : ticket.status === "In-Progress"
                  ? "bg-yellow-200 text-yellow-600"
                  : "bg-gray-200 text-gray-600";

              const priorityColor =
                ticket.priority === "HIGH PRIORITY"
                  ? "text-red-500 font-semibold"
                  : ticket.priority === "MEDIUM PRIORITY"
                  ? "text-orange-500 font-semibold"
                  : "text-green-500 font-semibold";

              return (
                <div
                  key={ticket.id}
                  onClick={() => handleTicketClick(ticket)}
                  className="bg-white h-auto p-3 shadow-lg shadow-gray-300 cursor-pointer rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-[12px] text-black font-semibold">{ticket.title}</h2>
                    <button className={`text-[12px] px-2 rounded-full ${statusColor}`}>
                      {ticket.status}
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500">{ticket.description}</p>

                  <div className="text-[10px] text-gray-500 flex flex-wrap justify-between items-center pt-1">
                    <p>#{ticket.id}</p>
                    <h3 className={priorityColor}>{ticket.priority}</h3>
                    <h4>{ticket.customer}</h4>
                    <h4>{ticket.createdAt}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Task & Resolved */}
        <div className="md:w-1/3 w-full">
          <h2 className="text-[#34485A] text-[15px] font-semibold mb-2">Task Status</h2>
          <div className="space-y-3">
            {taskList.map((task) => (
              <div 
                key={task.id} 
                className="bg-white p-2 flex flex-col items-center justify-center rounded-md shadow-lg shadow-gray-300"
              >
                <h2 className="text-[12px] text-black font-semibold">{task.title}</h2>
                <button 
                  onClick={() => handleCompleteTask(task)}
                  className="text-[10px] w-44 bg-[#02A53B] mt-2 px-3 py-1 rounded-md text-white"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-[#34485A] text-[15px] font-semibold">Resolved Task</h2>
            <div className="space-y-3 mt-2">
              {resolvedList.map((task) => (
                <div 
                  key={task.id} 
                  className="bg-green-100 border border-gray-200 rounded-md p-2 flex flex-col items-center justify-center shadow-lg shadow-gray-300"
                >
                  <h2 className="text-[12px] text-black font-semibold">{task.title}</h2>
                  <h2 className="text-[12px] text-green-500 font-semibold">✅ Completed</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mainsection;
