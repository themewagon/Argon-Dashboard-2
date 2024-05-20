import product1 from 'assets/images/products/product-1.png';
import product2 from 'assets/images/products/product-2.png';
import product3 from 'assets/images/products/product-3.png';
import product4 from 'assets/images/products/product-4.png';
import product5 from 'assets/images/products/product-5.png';
import team1 from 'assets/images/team/team-1.jpg';
import team2 from 'assets/images/team/team-2.jpg';
import team3 from 'assets/images/team/team-3.jpg';
import team4 from 'assets/images/team/team-4.jpg';
import team5 from 'assets/images/team/team-5.jpg';
import { uniqueId } from 'lodash';

export interface TransactionRowData {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
}
export interface TopProductsRowData {
  id: string;
  item: { title: string; image?: string };
  price: number;
  sold: number;
}
function getRandomDate(): string {
  const start = new Date(2024, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  const day = String(randomDate.getDate()).padStart(2, '0');
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const year = String(randomDate.getFullYear());

  return `${day}.${month}.${year}`;
}
export const userTableData = [
  {
    id: 1,
    author: { name: 'Jon Snow', image: team2, email: 'jon@gmail.com' },
    function: { title: 'Administrator', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 2,
    author: { name: 'Cersei Lannister', image: team1, email: 'cersei@gmail.com' },
    function: { title: 'Manager', designation: 'developer' },
    status: false,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 3,
    author: { name: 'Jaime Lannister', image: team5, email: 'jaime@gmail.com' },
    function: { title: 'User', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 4,
    author: { name: 'Anya Stark', image: team5, email: 'anya@gmail.com' },
    function: { title: 'Administrator', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 5,
    author: { name: 'Daenerys Targaryen', image: team1, email: 'daenerys@gmail.com' },
    function: { title: 'User', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 6,
    author: { name: 'Ever Melisandre', image: team2, email: 'ever@gmail.com' },
    function: { title: 'Manager', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 7,
    author: { name: 'Ferrara Clifford', image: team3, email: 'ferrara@gmail.com' },
    function: { title: 'User', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 8,
    author: { name: 'Rossini Frances', image: team4, email: 'rossini@gmail.com' },
    function: { title: 'User', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
  {
    id: 9,
    author: { name: 'Harvey Roxie', image: team1, email: 'harvey@gmail.com' },
    function: { title: 'Administrator', designation: 'developer' },
    status: true,
    employed: '22/12/2017',
    action: 'Edit',
  },
];

export const transactionTableData: TransactionRowData[] = [
  {
    id: uniqueId(),
    name: 'John Doe',
    date: getRandomDate(),
    amount: 100,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Jane Smith',
    date: getRandomDate(),
    amount: 150,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Alice Johnson',
    date: getRandomDate(),
    amount: 200,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'Bob Williams',
    date: getRandomDate(),
    amount: 120,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Eva Brown',
    date: getRandomDate(),
    amount: 180,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'Michael Davis',
    date: getRandomDate(),
    amount: 250,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Emily Wilson',
    date: getRandomDate(),
    amount: 300,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'David Taylor',
    date: getRandomDate(),
    amount: 130,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Olivia Clark',
    date: getRandomDate(),
    amount: 180,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'William Martinez',
    date: getRandomDate(),
    amount: 220,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Sophia Anderson',
    date: getRandomDate(),
    amount: 200,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'James Thompson',
    date: getRandomDate(),
    amount: 160,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Emma Garcia',
    date: getRandomDate(),
    amount: 210,
    status: 'paid',
  },
  {
    id: uniqueId(),
    name: 'Alexander Hernandez',
    date: getRandomDate(),
    amount: 190,
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Mia Lopez',
    date: getRandomDate(),
    amount: 230,
    status: 'paid',
  },
];

export const topProductsTableData: TopProductsRowData[] = [
  {
    id: uniqueId(),
    item: { title: 'Men Grey Hoodie', image: product1 },
    price: 99.9,
    sold: 5,
  },
  {
    id: uniqueId(),
    item: { title: 'Women Striped T-Shirt', image: product2 },
    price: 54.9,
    sold: 5,
  },
  {
    id: uniqueId(),
    item: { title: 'Wome White T-Shirt', image: product3 },
    price: 24.7,
    sold: 5,
  },
  {
    id: uniqueId(),
    item: { title: 'Men White T-Shirt', image: product4 },
    price: 44.4,
    sold: 5,
  },
  {
    id: uniqueId(),
    item: { title: 'Men White T-Shirt', image: product5 },
    price: 34.9,
    sold: 5,
  },
];
