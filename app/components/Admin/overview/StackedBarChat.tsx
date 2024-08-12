"use client"
import { BarChart } from '@mantine/charts';
import { rem } from '@mantine/core';
export const data = [
   
    { category: 'Concert', revenue: 120},
    { category: 'Business', revenue: 120},
    { category: 'Conference', revenue: 120},
    { category: 'Festival', revenue: 15},
    { category: 'Visual', revenue: 12},
    { category: 'Party', revenue: 12}
  ];

export default function StackedBarChart() {
  return (
    
    <BarChart
    
    className='rounded overflow-scroll hide-scrollbar'
      strokeDasharray="10 0"
     withTooltip={false}
      tickLine='none'
      barChartProps={{
        barSize:23
      }}
    h={rem('210px')}
    w={'100%'}
    barProps={{ radius: [10,10,0,0] }}
      data={data}
      dataKey="category"
      valueFormatter={(val)=> `$${val}k`}
      series={[
        { name: 'revenue', color: '#FFC655' },
     
      ]}
    />
  );
}