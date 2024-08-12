import { LineChart } from '@mantine/charts';
import { Paper, rem, Text } from '@mantine/core';




 const data = [
    {
      date: 'Mon',
      amount:50
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

  interface ChartTooltipProps {
    label: string;
    payload: Record<string, any>[] | undefined;
  }
  
  function ChartTooltip({ label, payload }: ChartTooltipProps) {
    if (!payload) return null;
  
    return (
      <Paper px="md" py="sm" withBorder shadow="md" radius="md">
        <Text fw={500} mb={5}>
          {label}
        </Text>
        {payload.map((item: any) => (
          <Text key={item.name} c={item.color} fz="sm">
            {item.name}: ${item.value}k
          </Text>
        ))}
      </Paper>
    );
  }
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
    tooltipProps={{
      content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
    }}
    withDots={false}

      className={`${className} overflow-auto text-xs p-5 `}
      data={data}
      
      dataKey="date"
      series={[
        { name: 'amount', color: '#571845' }
      
       
      ]}
      tickLine='none'
      curveType="linear"
      valueFormatter={(val)=> `$${val}k`}
    />
  );
}