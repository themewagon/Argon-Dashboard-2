import { SvgIcon, SvgIconProps } from '@mui/material';

const MenuItemIconPages = (props: SvgIconProps) => {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <g clip-path="url(#clip0_3358_3355)">
        <path
          d="M10.6666 5.33325H14.6666V14.6666H5.33331V10.6666"
          stroke="#FD7E14"
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />
        <path
          d="M10.6666 1.33325H1.33331V10.6666H10.6666V1.33325Z"
          stroke="#FD7E14"
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_3358_3355">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default MenuItemIconPages;
