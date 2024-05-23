import { SvgIcon, SvgIconProps } from '@mui/material';

const CameraIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 12 12" fill="none" style={{ padding: '0.3rem' }} {...props}>
      <g clipPath="url(#clip0_3448_2212)">
        <path d="M4.5 0.47224H1.5V1.41668H4.5V0.47224Z" fill="#172B4D" />
        <path
          d="M11.5 1.8889H0.5C0.2235 1.8889 0 2.10045 0 2.36112V10.3889C0 10.6496 0.2235 10.8611 0.5 10.8611H11.5C11.7765 10.8611 12 10.6496 12 10.3889V2.36112C12 2.10045 11.7765 1.8889 11.5 1.8889ZM3 5.19445C2.724 5.19445 2.5 4.9829 2.5 4.72223C2.5 4.46156 2.724 4.25001 3 4.25001C3.276 4.25001 3.5 4.46156 3.5 4.72223C3.5 4.9829 3.276 5.19445 3 5.19445ZM7.5 8.97223C6.1195 8.97223 5 7.91493 5 6.61112C5 5.30731 6.1195 4.25001 7.5 4.25001C8.8805 4.25001 10 5.30731 10 6.61112C10 7.91493 8.8805 8.97223 7.5 8.97223Z"
          fill="#172B4D"
        />
      </g>
      <defs>
        <clipPath id="clip0_3448_2212">
          <rect width="12" height="11.3333" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CameraIcon;
