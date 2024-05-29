type TimeOrders = { time: string; orders: number }[];

export interface ComparisonChartData {
  today: TimeOrders;
  yesterday: TimeOrders;
}

export const ordersOverTimeData: ComparisonChartData = {
  today: [
    { time: '12:00 AM', orders: 20 },
    { time: '1:00 AM', orders: 12 },
    { time: '2:00 AM', orders: 16 },
    { time: '3:00 AM', orders: 14 },
    { time: '4:00 AM', orders: 26 },
    { time: '5:00 AM', orders: 16 },
    { time: '6:00 AM', orders: 175 },
    { time: '7:00 AM', orders: 18 },
    { time: '8:00 AM', orders: 11 },
    { time: '9:00 AM', orders: 13 },
    { time: '10:00 AM', orders: 8 },
    { time: '11:00 AM', orders: 16 },
    { time: '12:00 PM', orders: 16 },
    { time: '1:00 PM', orders: 15 },
    { time: '2:00 PM', orders: 9 },
  ],
  yesterday: [
    { time: '12:00 AM', orders: 10 },
    { time: '1:00 AM', orders: 15 },
    { time: '2:00 AM', orders: 95 },
    { time: '3:00 AM', orders: 95 },
    { time: '4:00 AM', orders: 98 },
    { time: '5:00 AM', orders: 14 },
    { time: '6:00 AM', orders: 13 },
    { time: '7:00 AM', orders: 15 },
    { time: '8:00 AM', orders: 15 },
    { time: '9:00 AM', orders: 16 },
    { time: '10:00 AM', orders: 255 },
    { time: '11:00 AM', orders: 14 },
    { time: '12:00 PM', orders: 14 },
    { time: '1:00 PM', orders: 16 },
    { time: '2:00 PM', orders: 16 },
  ],
};
