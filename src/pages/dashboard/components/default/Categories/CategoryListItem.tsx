import { IconButton, Link, Stack, SvgIconProps, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

export interface CategoryListItemProps {
  id: string;
  color: string;
  icon: (props: SvgIconProps) => JSX.Element;
  name: string;
  description: JSX.Element;
  route: string;
}
const CategoryListItem = ({ item }: { item: CategoryListItemProps }) => {
  const { route, name, description, icon: Icon } = item;
  return (
    <Stack
      component="li"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      //   mb={item.length - 1 === key ? 0 : 1}
      sx={() => ({
        py: 1,
        pr: 2,
      })}
    >
      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={({ palette, spacing, shadows, shape }) => ({
            bgcolor: palette.common.black,
            color: palette.common.white,
            borderRadius: shape.borderRadius * 0.75,
            width: spacing(4.5),
            height: spacing(4.5),
            boxShadow: shadows[4],
            mr: 2,
          })}
        >
          <Icon
            sx={({ spacing }) => ({
              width: spacing(1.5),
              height: spacing(1.5),
            })}
          />
        </Stack>
        <Stack>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </Stack>
      <IconButton display="flex" component={Link} href={route}>
        <Typography
          variant="button"
          sx={{
            lineHeight: 0,
            transition: 'all 0.2s cubic-bezier(.34,1.61,.7,1.3)',
            p: 0.5,

            '&:hover, &:focus': {
              transform: 'translateX(5px)',
            },
          }}
        >
          <IconifyIcon
            color="text.primary"
            icon="material-symbols:chevron-right"
            fontSize="medium"
          />
        </Typography>
      </IconButton>
    </Stack>
  );
};

export default CategoryListItem;
