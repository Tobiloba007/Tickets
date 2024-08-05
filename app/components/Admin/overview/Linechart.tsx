import { LineChart } from '@mantine/charts';
import { rem } from '@mantine/core';




 const data = [
    {
      day: 'Mon',
      amount:10
    },
    
    {
      date: 'Tue',
      amount:50
    },
    {
      date: 'Wed',
      amount:100
    },
    {
      date: 'Thur',
      amount:500
    },
    {
      date: 'Fri',
      amount:1000
    },
    {
        date: 'Sat',
        amount:2010
      },
      {
        date: 'Sun',
    amount:2000
      
      },
  ];
interface LineChartCompType{
className?:string
}

export default function LineChartComp({
    className
}:LineChartCompType) {
  return (
    <LineChart
    
     strokeDasharray="10 0"
    h={rem('240px')}
    w={'100%'}
    unit='$'

      className={`${className} overflow-y-auto`}
      data={data}
      
      dataKey="date"
      series={[
        { name: 'amount', color: 'indigo.6' }
      
       
      ]}
      curveType="linear"
    />
  );
}