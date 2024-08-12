import React from "react";

import AdminRecentEventsTable from "../../components/Admin/overview/AdminRecentEventsTable";
import Image from "next/image";

import LineChartComp from "./overview/Linechart";
import { Box, Text } from "@mantine/core";

import DropDown from "./overview/Dropdown";
import StackedBarChart from "./overview/StackedBarChat";
import FunnelChartComp from "./overview/FunnelChart";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { csvConverter } from "@/utils/app";

const AdminOverview = () => {

  
  const mockData = [
    {
      name: "Rouky",
      date: "2023-09-01",
      percentage: 0.4,
      quoted: 'Pickles',
    },
    {
      name: "Keiko",
      date: "2023-09-01",
      percentage: 0.9,
      quoted: 'Cactus',
    },
  ];
 
  const {csvConfig,csv}=csvConverter(mockData)
  
 
  return (
    <>
      <div className="flex-col items-center justify-start w-full h-screen overflow-y-scroll [&>div]:flex-shrink-0 hide-scrollbar mt-14 px-5 lg:px-6 xl:px-8">
        {/* EXPORT BUTTON */}
        <section className="flex justify-end w-full">
          <div className="flex items-center justify-center bg-[#571845] h-8 px-5 rounded-md ml-3 md:h-[30px] md:ml-2 lg:px-6 xl:h-10 xl:ml-3
          cursor-pointer
          "
          onClick={()=>{
            download(csvConfig)(csv)
            
          }}
          >
            <Image
              height={16}
              width={20}
              className="w-4 lg:w-5 xl:w-6"
              src={"/img/icons/export.svg"}
              alt="export_icon"
            />
            <p className="text-[#ffffff] text-xs font-medium ml-2 xl:text-sm xl:ml-3">
              Export
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center justify-start w-full mt-4 md:flex-row md:justify-between md:items-start">
          <div className=" items-center bg-white justify-center w-full h-60 shadow rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px] mt-5 md:mt-0 py-3 px-4  md:py-5 lg:py-0 xl:px-5 overflow-y-auto hide-scrollbar">
            <Box
              className="text-purple flex mt-4 flex-row justify-between text-lg font-bold
xl:text-[22px] "
            >
              <Text>Total Sales</Text>

              <Box className="inline-flex gap-x-2 font-normal text-base">
                Last week
                <DropDown
                  dropDownIcon={
                    <Image
                      src="arrow-down.svg"
                      className="hover:rotate-180 transition-all hover:border focus-within:border-purple "
                      alt="arrow-down"
                      height={24}
                      width={24}
                    />
                  }
                />
              </Box>
            </Box>

            <LineChartComp className="pt-5" />
          </div>

          <div className="flex flex-col items-center w-full md:w-[44%] xl:w-[39%]">
            <div className="flex items-center justify-between w-full mt-5 md:mt-0">
              <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5">
                <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                  Total Revenue
                </p>
                <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                  NGN200,000
                </p>
                <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                  <span className="text-[#4BB543]">+20%</span> vs previous day
                </p>
              </div>

              <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4">
                <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                  Total Visitors
                </p>
                <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                  2456
                </p>
                <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                  <span className="text-[#4BB543]">+20%</span> vs previous day
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full mt-3 md:mt-5">
              <div className="flex flex-col items-start justify-center w-[48.5%] bg-white shadow rounded-md py-3 px-4 md:w-[50%] md:py-5 xl:px-5">
                <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                  Total Events
                </p>
                <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                  30
                </p>
                <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                  <span className="text-[#4BB543]">+20%</span> vs previous 28
                  day
                </p>
              </div>

              <div className="flex flex-col items-start justify-center w-[48.5%]  bg-white shadow rounded-md py-3 px-4 md:mt-0 md:w-[50%] md:ml-3 md:py-5 xl:px-5 xl:ml-4">
                <p className="text-xs font-normal text-[#766871] xl:text-[13px]">
                  Total Users
                </p>
                <p className="text-lg font-bold text-[#331F2D] mt-2 md:mt-3 xl:text-xl xl:mt-4">
                  245
                </p>
                <p className="text-[10px] font-normal text-[#766871] lg:mt-1 xl:text-[11px] xl:mt-2">
                  <span className="text-[#4BB543]">+20%</span> vs 28 previous
                  day
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-start w-full mt-5 md:flex-row md:justify-between md:items-start">
          {/* funnel chart */}
          <Box className="p-5 items-center justify-center w-full shadow h-60 bg-white rounded-md md:w-[54%] lg:h-[248px] xl:w-[59%] xl:h-[267px]">
            <Box>
              <Text
                className="flex flex-row w-full justify-start text-purple  text-base 
"
              >
                Funnel Analytics
              </Text>
              <Box className="mx-auto flex items-center justify-center w-full">
              <FunnelChartComp  />
              </Box>
            </Box>
          </Box>
          {/* barchart */}
          <div className=" items-center justify-center w-full h-60 bg-white shadow rounded-md mt-5 md:mt-0 md:w-[44%] lg:h-[248px] xl:w-[39%] xl:h-[267px] p-5   ">
          <Box
              className="text-purple flex  flex-row justify-between text-lg font-bold
xl:text-[22px] "
            >
              <Text>Sales by category</Text>

              <Box className="inline-flex gap-x-2 font-normal text-base">
                Last week
                <DropDown
                  dropDownIcon={
                    <Image
                      src="arrow-down.svg"
                      className="hover:rotate-180 transition-all hover:border focus-within:border-purple "
                      alt="arrow-down"
                      height={24}
                      width={24}
                    />
                  }
                />
              </Box>
            </Box>
            {/* <Text className="text-purple text-start">   Sales by category</Text> */}

            <Box className="text-xs  mt-3 ">
            <StackedBarChart />
            </Box>
            
          </div>
        </section>

        <section className="flex w-full">
          {/* @ts-ignore */}
          <AdminRecentEventsTable />
        </section>
      </div>
    </>
  );
};

export default AdminOverview;
