import { Link, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { grey } from 'theme/colors';
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
          my: 0.5,
          width: '100%',
          cursor: 'pointer',
          '&:hover, &:focus': {
            backgroundColor: grey[50],
          },
        })}
      >
        <ListItemButton
          component={Link}
          href={route}
          sx={(theme) => ({
            '& span': {
              fontWeight: active ? 600 : 400,
              color: active ? theme.palette.grey[900] : theme.palette.grey[600],
            },
            paddingLeft: theme.spacing(4),
            marginLeft: 0,
          })}
        >
          <ListItemText
            primary={name}
            sx={({ spacing }) => ({
              pl: spacing(3.25),
            })}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default SideNavItem;
