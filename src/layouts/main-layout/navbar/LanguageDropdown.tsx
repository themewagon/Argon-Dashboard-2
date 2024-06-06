import { MouseEvent, useState } from 'react';

import { Box, MenuItem, Popover } from '@mui/material';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en-Us',
    label: 'English (Global)',
    icon: '/Modernize-Material-Admin/flag-icons/gb.svg',
  },
  {
    value: 'en-Uk',
    label: 'English',
    icon: '/Modernize-Material-Admin/flag-icons/us.svg',
  },

  {
    value: 'bd',
    label: 'Bangla',
    icon: '/Modernize-Material-Admin/flag-icons/bd.svg',
  },
];

// ----------------------------------------------------------------------
const LanguageDropdown = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          height: 40,
          width: 40,
          p: 1,
          ...(open ? { bgcolor: 'primary.lighter' } : {}),
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 1,
            borderRadius: 1,
            verticalAlign: 'middle',
          }}
          src={LANGS[0].icon}
          alt={LANGS[0].label}
        />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: { width: 170 },
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[0].value}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{ width: 28, height: 28, mr: 2 }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguageDropdown;
