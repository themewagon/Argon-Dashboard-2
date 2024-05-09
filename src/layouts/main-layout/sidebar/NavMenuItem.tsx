import {
  Chip,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { IMenuitems } from './MenuItems';

interface NavMenuItemType {
  item: IMenuitems;
  //   onClick: (event: React.MouseEvent<HTMLElement>) => void;
  pathTo: string;
}
const NavMenuItem = ({ item, pathTo }: NavMenuItemType) => {
  const { icon: Icon } = item;

  const itemIcon = Icon ? <Icon /> : null;
  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <ListItemButton
        component={Link}
        href={item?.href}
        disabled={item?.disabled}
        selected={pathTo === item?.href}
        // onClick={onClick}
      >
        <ListItemIcon
          sx={({ spacing }) => ({
            p: spacing(0.4, 0),
          })}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText>
          {<>{`${item?.title}`}</>}
          <br />
          {item?.subtitle ? <Typography variant="caption">{item.subtitle}</Typography> : ''}
        </ListItemText>

        {!item?.chip ? null : (
          <Chip
            color={item?.chipColor}
            variant={item?.variant ? item?.variant : 'outlined'}
            size="small"
            label={item?.chip}
            sx={({ palette }) => ({
              ...(pathTo === item?.href
                ? {
                    bgcolor: palette.text.disabled,
                  }
                : {
                    bgcolor: palette.text.primary,
                    color: palette.common.white,
                  }),
            })}
          />
        )}
      </ListItemButton>
    </List>
  );
};

export default NavMenuItem;
