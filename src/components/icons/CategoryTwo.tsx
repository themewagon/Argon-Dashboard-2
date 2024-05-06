import { SvgIcon, SvgIconProps } from '@mui/material';

const CategoryTwoIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0H3C2.173 0 1.5 0.673 1.5 1.5V10.5C1.5 11.327 2.173 12 3 12H9C9.827 12 10.5 11.327 10.5 10.5V1.5C10.5 0.673 9.827 0 9 0ZM6 11C5.724 11 5.5 10.776 5.5 10.5C5.5 10.224 5.724 10 6 10C6.276 10 6.5 10.224 6.5 10.5C6.5 10.776 6.276 11 6 11ZM9.5 8.5C9.5 8.776 9.276 9 9 9H3C2.724 9 2.5 8.776 2.5 8.5V2C2.5 1.724 2.724 1.5 3 1.5H9C9.276 1.5 9.5 1.724 9.5 2V8.5Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default CategoryTwoIcon;
