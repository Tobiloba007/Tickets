import React, { useState } from "react";
import AdminRecentEventsTable from "./overview/AdminRecentEventsTable";
import AdminUsersTable from "./adminUsers/AdminUsersTable";
import SuspendAcctModal from "./adminUsers/SuspendAcctModal";
import DeactivateModal from "./adminUsers/DeactivateModal";
import ActivateModal from "./adminUsers/ActivateModal";
import DeleteModal from "./adminUsers/DeleteModal";

const AdminEvents = () => {
  const [openModal, setOpenModal] = useState(false);
  const events = [
    {
      name: "string",
      category: "string",
      price: "string",
      status: "string",
      date: "string",
      host: "string",
    },
  ];
  return (
    <div className="flex-col items-center justify-center w-full h-full overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-7 px-5 lg:px-6 xl:px-8">
{/* create blog BUTTON */}
<section className="flex justify-end w-full">
        <div
        onClick={()=>{
          setOpenModal(true)
        }}
        className="flex items-center justify-center bg-[#571845] hover:scale-110 transition cursor-pointer h-8 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.13477 12.9744H18.1348" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1348 18.9744V6.97437" stroke="#FEFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p className="text-[#ffffff] text-xs font-medium ml-2 xl:text-sm xl:ml-3">
      
   Create Event
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-start w-full mt-4 md:flex-row md:justify-between md:items-start">
        <div className="flex items-center justify-between flex-wrap w-full mt-5 md:mt-0 md:flex-nowrap">
          <div className="flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 md:w-[50%] md:py-4 xl:px-5 xl:py-6">
            <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
              Total Events
            </p>
            <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
              2500
            </p>
            <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
              <span className="text-[#4BB543]">+20%</span> vs 28 previous day
            </p>
          </div>

          <div className="flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-4 xl:px-5 xl:ml-4 xl:py-6">
            <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
            Avg Events per week
            </p>
            <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
              2456
            </p>
            <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
              <span className="text-[#4BB543]">+20%</span> vs 28 previous day
            </p>
          </div>

          <div className="flex flex-col items-start justify-center w-[48.5%] bg-white rounded-md py-3 px-4 mt-4 md:mt-0 md:w-[50%] md:ml-3 md:py-4 xl:px-5 xl:ml-4 xl:py-6">
            <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
              Total Revenue
            </p>
            <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
              200
            </p>
            <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
              <span className="text-[#4BB543]">+20%</span> vs 28 previous day
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full">
      <AdminRecentEventsTable displayrecent={false} events={events}/>
      </div>

      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed h-screen w-full bg-[#A4A4A4] left-0 top-0 opacity-45"
        ></div>
      )}

      {/* <div className="flex items-center justify-center w-full h-full">
        <div className="fixed flex items-center justify-center w-[85%] top-[30%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
          {openModal === "Suspend" ? (
            <SuspendAcctModal setOpenModal={setOpenModal} />
          ) : openModal === "Deactivate" ? (
            <DeactivateModal setOpenModal={setOpenModal} />
          ) : openModal === "Activate" ? (
            <ActivateModal setOpenModal={setOpenModal} />
          ) : (
            openModal === "Delete" && (
              <DeleteModal setOpenModal={setOpenModal} />
            )
          )}
        </div>
      </div> */}
    </div>
  );
};

export default AdminEvents;
