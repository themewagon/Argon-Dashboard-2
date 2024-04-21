import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} fill="none" viewBox="0 0 20 20">
      <path
        fill="url(#paint0_linear_3286_1096)"
        d="M16.578.5h-13.5a3.003 3.003 0 00-3 3V17a3.003 3.003 0 003 3h13.5a3.003 3.003 0 003-3V3.5a3.003 3.003 0 00-3-3zm-1.676 6.482l-6.3 7.5a.75.75 0 01-.563.268h-.012a.75.75 0 01-.558-.248l-2.7-3a.75.75 0 111.115-1.004l2.123 2.36 5.746-6.84a.75.75 0 011.149.964z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3286_1096"
          x1="9.828"
          x2="9.828"
          y1="0.5"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7B62E4"></stop>
          <stop offset="1" stopColor="#646FE4"></stop>
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default CheckBoxCheckedIcon;
