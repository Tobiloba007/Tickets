"use client"
import { Menu, Button, rem, Text, px,  Divider, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';





interface DropDownProps {
  dropDownIcon?: React.ReactNode;
}
export default function DropDown({ dropDownIcon }: DropDownProps) {
 
  const width = px('37.875rem');
  const smWidth=px('20rem')
 
  const smScreen=useMediaQuery('(max-width:540px)')
  const mdScreen=useMediaQuery('(max-width:768px)')
  // console.log(width)
  return (
    <Menu
      trigger="click-hover"
      openDelay={100}
      closeDelay={400}
      width={mdScreen ? 141 :141}
      
      shadow="md"
 styles={{
    dropdown:{
        marginRight:300
    }
 }}
      transitionProps={{transition:"rotate-right",duration:150}}
    >
      <Menu.Target>
        <Text className='cursor-pointer'>
        
          {dropDownIcon}
         
        </Text>
      </Menu.Target>


        {/* Drawer content */}
        <Menu.Dropdown className="text-start  font-outfit  " >
        
          
          <Menu.Item
            mih={rem('52px')}
            className="   border-t-grey-1 border "
            leftSection
            component="a"
            href=""
            target=""
          >
            <Box className="text-purple  ">
           Today
            </Box>
          </Menu.Item>
          <Divider/>
          
       
          <Menu.Item
            mih={rem('52px')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <Box className=" text-purple">
           This Week
            </Box>
          </Menu.Item>
          <Divider/>


          <Menu.Item
            mih={rem('52px')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <Box className=" text-purple">
           This Month
            </Box>
          </Menu.Item>
          <Divider/>
        </Menu.Dropdown>
      
    </Menu>
  );
}
