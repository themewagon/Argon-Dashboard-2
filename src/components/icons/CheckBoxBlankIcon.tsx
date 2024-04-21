import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxBlankIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        stroke="#DEE2E6"
        d="M.578 3.5a2.5 2.5 0 012.5-2.5h13.5a2.5 2.5 0 012.5 2.5V17a2.5 2.5 0 01-2.5 2.5h-13.5a2.5 2.5 0 01-2.5-2.5V3.5z"
      ></path>
    </SvgIcon>
  );
};

export default CheckBoxBlankIcon;
