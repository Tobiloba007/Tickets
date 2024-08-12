import { rem } from '@mantine/core';
import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

const data = [
  { name: 'Event Creation', value: 1800000,fill:"#DBDBDB" },
  { name: ' Explore Event Creation', value: 180000 },
  { name: 'Registration Login', value: 29000 },
  { name: 'Website visit', value: 300000 },
  { name: 'Registration/Login', value: 300000,fill:"#571845"  },
];

const FunnelChartComp = () => (
  <FunnelChart className='' width={500} height={240}>
    <Tooltip />
    <Funnel dataKey="value" data={data} isAnimationActive>
      {/* <LabelList position="right" fill="#000" stroke="none" dataKey="name" /> */}
      {/* <LabelList position="inside" fill="#000" stroke="none" dataKey="value" /> */}
      
    </Funnel>
  </FunnelChart>
);

export default FunnelChartComp;
