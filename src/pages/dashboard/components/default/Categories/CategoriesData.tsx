import { Typography } from '@mui/material';
import CategoryFourIcon from 'components/icons/CategoryFour';
import CategoryOneIcon from 'components/icons/CategoryOne';
import CategoryThreeIcon from 'components/icons/CategoryThree';
import CategoryTwoIcon from 'components/icons/CategoryTwo';

const categoriesListData = [
  {
    id: '1',
    color: 'dark',
    icon: CategoryOneIcon,
    name: 'Devices',
    description: (
      <>
        250 in stock,
        <Typography variant="caption"> 346+ sold</Typography>
      </>
    ),
    route: '/',
  },
  {
    id: '2',
    color: 'dark',
    icon: CategoryTwoIcon,
    name: 'Tickets',
    description: (
      <>
        123 closed,
        <Typography variant="caption"> 15 open</Typography>
      </>
    ),
    route: '/',
  },
  {
    id: '3',
    color: 'dark',
    icon: CategoryThreeIcon,
    name: 'Error logs',
    description: (
      <>
        1 is active,
        <Typography variant="caption"> 40 closed</Typography>
      </>
    ),
    route: '/',
  },
  {
    id: '3',
    color: 'dark',
    icon: CategoryFourIcon,
    name: 'Error logs',
    description: (
      <>
        1 is active,
        <Typography variant="caption"> 40 closed</Typography>
      </>
    ),
    route: '/',
  },
];

export default categoriesListData;
