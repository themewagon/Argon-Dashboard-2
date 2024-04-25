import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { grey } from 'theme/colors';
import pxToRem from 'theme/functions/pxToRem';
interface ListItemProps {
  name: string;
  active?: boolean | string;
  route: string;
  nested?: boolean;
  children?: ReactNode;
  open?: boolean;
}
const SideNavItem = ({ name, active, route }: ListItemProps) => {
  return (
    <>
      <ListItem
        sx={({ palette }) => ({
          color: palette.text.secondary,
          pl: 3,
          my: 0.5,
          borderRadius: `${pxToRem(6)}`,
          width: '100%',
          cursor: 'pointer',
          '&:hover, &:focus': {
            backgroundColor: grey[50],
          },
        })}
      >
        <ListItemButton
          component={NavLink}
          to={route}
          sx={(theme) => ({
            '& span': {
              fontWeight: active ? 600 : 400,
              color: active ? theme.palette.grey[900] : theme.palette.grey[600],
            },
            '&::before': {
              //   content: `"${name[0]}"`,
              content: `''`,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: pxToRem(-200),
              opacity: 1,
              borderRadius: '50%',
            },
          })}
        >
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default SideNavItem;
