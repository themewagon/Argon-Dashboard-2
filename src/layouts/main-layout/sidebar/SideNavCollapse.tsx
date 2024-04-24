import { Box, Collapse, ListItem, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactNode } from 'react';
import { grey } from 'theme/colors';
import pxToRem from 'theme/functions/pxToRem';

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
      <ListItem component="li" onClick={onClick}>
        <Box
          sx={(theme) => ({
            width: '100%',
            background: active ? theme.palette['grey'][100] : 'transparent.main',
            display: 'flex',
            alignItems: 'center',
            padding: `${pxToRem(8)} ${pxToRem(16)}`,
            margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
            borderRadius: `${pxToRem(8)}`,
            userSelect: 'none',
            whiteSpace: 'nowrap',
            [theme.breakpoints.up('xl')]: {
              transition: theme.transitions.create(['box-shadow', 'background-color'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
            },
            '&:hover, &:focus': {
              backgroundColor: grey[200],
            },
          })}
        >
          <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
          <ListItemText
            primary={name}
            sx={() => ({
              marginLeft: pxToRem(10),
              '& span': {
                fontSize: pxToRem(14),
                fontWeight: active ? 600 : 400,
              },
            })}
          />

          <IconifyIcon
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              marginBottom: pxToRem(-1),
              transform: open ? 'rotate(0)' : 'rotate(-180deg)',
              transition: theme.transitions.create(['color', 'transform', 'opacity'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),

              [theme.breakpoints.up('xl')]: {
                display: noCollapse ? 'none !important' : 'block !important',
              },
            })}
            icon="ri:arrow-up-s-line"
            fontSize={16}
          />
        </Box>
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
