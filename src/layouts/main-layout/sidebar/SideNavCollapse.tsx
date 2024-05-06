import { Collapse, ListItem, ListItemIcon, ListItemText, Stack, SvgIconProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactNode } from 'react';

interface SidenavCollapseProps {
  icon?: React.ComponentType<SvgIconProps>;
  name?: string;
  children?: ReactNode;
  active?: boolean;
  noCollapse?: boolean;
  open?: boolean;
  onClick?: () => void;
}

const SideNavCollapse = ({
  name,
  icon: Icon,
  active,
  children,
  open,
  noCollapse,
  onClick,
}: SidenavCollapseProps) => {
  return (
    <>
      <ListItem onClick={onClick}>
        <Stack
          direction="row"
          alignItems="center"
          sx={(theme) => ({
            width: '100%',
            bgcolor: active ? theme.palette['grey'][100] : 'transparent.main',
            px: 2,
            py: 1,
            mx: 1,
            gap: 1,
            borderRadius: theme.shape.borderRadius * 0.5,
            userSelect: 'none',
            whiteSpace: 'nowrap',
            [theme.breakpoints.up('xl')]: {
              transition: theme.transitions.create(['box-shadow', 'background-color'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
            },
            '&:hover, &:focus': {
              bgcolor: theme.palette.grey[200],
            },
          })}
        >
          <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
          <ListItemText
            primary={name}
            sx={() => ({
              '& span': {
                fontWeight: active ? 600 : 400,
              },
            })}
          />

          <IconifyIcon
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              transform: open ? 'rotate(0)' : 'rotate(-180deg)',
              transition: theme.transitions.create(['color', 'transform', 'opacity'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
              color: theme.palette.text.secondary,
              [theme.breakpoints.up('xl')]: {
                display: noCollapse ? 'none !important' : 'block !important',
              },
            })}
            icon="fa:angle-up"
            fontSize={16}
          />
        </Stack>
      </ListItem>
      {children && (
        <Collapse in={Boolean(open)} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
};

export default SideNavCollapse;
